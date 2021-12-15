import select from 'dom-select';
import { serialize } from 'dom-form-serializer/dist/dom-form-serializer';
import serializeJSON from 'es-serialize-json';
import queryString from 'querystringify';
import { subMonths, isWithinRange, isBefore } from 'date-fns';

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

export default(el) => {
  const ui = {
    el,
    cards: select.all('.card--cs', el),
    form: select('.js-form--filters', el),
    filters: select.all('.js-form--filters select'),
    filterDate: select('select#filter--date', el),
    listParent: select('.layout--cs-list', el),
    loadMoreBtn: select('.js-load-more', el),
    nopeMsg: 'There are no results matching your choices.',
    resetMsg: 'Clear Filters'
  };

  const filterNames = () => ui.filters.map((filter) => filter.name);

  const state = {
    filter: null,
    qs: null,
    filterNames: filterNames(),
    initialSet: ui.listParent && ui.listParent.dataset.initialLimit ? ui.listParent.dataset.initialLimit : 8,  // eslint-disable-line
    cardsVisible: ui.listParent && ui.listParent.dataset.initialLimit ? ui.listParent.dataset.initialLimit : 8,  // eslint-disable-line
    resultsPage: 0
  };

  const dataSep = ui.listParent && ui.listParent.dataset.separator ? ui.listParent.dataset.separator : '|';

  const maybeResetTab = () => {
    const tabParent = ui.el.closest('.tab__content');
    const tabsAncestor = ui.el.closest('.tabs');

    if (!tabParent) {
      return;
    }

    const height = tabParent.offsetHeight;

    if (height > 0) {
      if (document.body.offsetWidth > 768) {
        if (tabsAncestor) {
          tabsAncestor.style.marginBottom = `${height}px`;
        }
      }
    }
  };

  const hideLoadMore = () => ui.loadMoreBtn && ui.loadMoreBtn.classList.add('u-hidden');

  const showLoadMore = () => ui.loadMoreBtn && ui.loadMoreBtn.classList.remove('u-hidden');

  const toggleLoadMore = (set) => (set.length > 8 ? showLoadMore() : hideLoadMore());

  const resetFilters = (ev) => {
    ev.preventDefault();

    ui.filters.forEach((filter) => {
      filter.value = 'All'; // eslint-disable-line
    });

    state.resultsPage = 0;
  };

  const cleanFilterString = (str) => {
    // remove ? from query strings
    const s = str[0] === '?' ? str.substring(1) : str;

    // ensure there are multiple params
    if (s.indexOf('&') !== -1) {
      return s
        .split('&') // create array of 'k=v' strings
        .filter((a) => a.indexOf('=') !== (a.length - 1)) // remove empty params
        .join('&'); // back to a friendly query string...
    }

    return s;
  };

  const updateFilterState = () => {
    const filterStr = serialize(ui.form);
    const encodedFilterStr = serializeJSON(filterStr);
    state.filter = `${encodedFilterStr}`;
    state.qs = cleanFilterString(encodedFilterStr);
  };

  const removeURLParameter = (search, parameter) => {
      var urlparts = search.split('?');   
      if (urlparts.length >= 2) {

          var prefix = encodeURIComponent(parameter);
          var pars = urlparts[1].split(/[&;]/g);

          //reverse iteration as may be destructive
          for (var i = pars.length; i-- > 0;) {    
              //idiom for string.startsWith
              if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                  pars.splice(i, 1);
              }
          }

          return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
      }
      return window.location.pathname + "?" + parameter;
  }

  const showCard = (card) => {
    card.classList.add('filtered--show');
    card.classList.remove('filtered--hide');
    return card;
  };

  const hideCard = (card) => {
    card.classList.remove('filtered--show');
    card.classList.add('filtered--hide');
    return card;
  };

  const hideAllCards = () => {
    ui.cards.forEach((card) => {
      hideCard(card);
    });
  };

  const showAllCards = () => {
    ui.cards.forEach((card) => {
      showCard(card);
    });
  };

  const hideExtraCards = (set) => {
    // hide all cards past current page
    set.forEach((card, index) => {
      if (index > ((state.initialSet) * (state.resultsPage + 1)) - 1) {
        hideCard(card);
      }
    });

    const shownCards = select.all('.card--cs:not(.filtered--hide)', ui.el);
    state.cardsVisible = shownCards.length;

    if (set.length > state.cardsVisible) {
      showLoadMore();
      maybeResetTab();
    } else {
      hideLoadMore();
      maybeResetTab();
    }
  };

  const notSorry = () => {
    const nope = select('.nope-wrap', el);

    if (nope) {
      ui.el.removeChild(nope);
    }
  };

  const handleReset = (ev) => {
    resetFilters(ev);
    showAllCards();
    hideExtraCards(ui.cards);
    toggleLoadMore(ui.cards);
    updateFilterState();
    notSorry();
    maybeResetTab();
    state.resultsPage = 0;
  };

  const saySorry = () => {
    const wrap = document.createElement('div');
    const nope = document.createElement('h3');
    const msg = document.createTextNode(ui.nopeMsg);
    const reset = document.createElement('button');
    const resetMsg = document.createTextNode(ui.resetMsg);

    wrap.classList.add('text--align-center');
    wrap.classList.add('nope-wrap');
    wrap.classList.add('rhythm--large');

    nope.classList.add('card--cs__nope');
    nope.classList.add('heading');
    nope.classList.add('heading--h3');
    nope.appendChild(msg);

    reset.classList.add('button');
    reset.classList.add('button--primary');
    reset.classList.add('button--size-large');
    reset.classList.add('js-reset-filters');
    reset.appendChild(resetMsg);

    wrap.appendChild(nope);
    wrap.appendChild(reset);

    notSorry();
    ui.el.appendChild(wrap);
    hideLoadMore();
    reset.addEventListener('click', handleReset);
    maybeResetTab();
  };

  const idToDataset = (id) => `cs${id.charAt(0).toUpperCase() + id.slice(1)}`;

  const handleChange = (ev = null) => {
    const filterObject = serialize(ui.form); // { name: value }
    const filterKeysArray = Object.keys(filterObject); // array of names

    const set = ui.cards
      .map((card) => hideCard(card))
      .filter((card) => {
        // loop over filters to see which match card's values
        const filtersMap = filterKeysArray.map((filter) => {
          // little bit of defense for unexpected HTML
          const filterNameArr = filter.split('--');
          const filterName = filterNameArr.length > 1 ? filterNameArr[1].toLowerCase() : filterNameArr[0]; // eslint-disable-line
          const dataAttrName = idToDataset(filterName);
          const filterValue = filterObject[filter] != null ? filterObject[filter].toLowerCase() : ''; // eslint-disable-line
          const cardValue = card.dataset[dataAttrName].toLowerCase();
          const valueArr = cardValue.split(dataSep);

          // if we're matching dates, we need to do things a bit differently...
          if (filterName === 'date') {
            // first, get the values of the date options
            // because we'll need to map them later
            const options = ev ? select.all('option', ui.filterDate) : null;
            const optionNames = options ? options.map((o) => o.value) : null;

            // set up dates to test against
            const today = new Date();
            const pastMonth = subMonths(new Date(), 1);
            const past3Months = subMonths(new Date(), 3);
            const pastYear = subMonths(new Date(), 12);

            // test card's date against those dates
            const isFromPastMonth = isWithinRange(new Date(cardValue), pastMonth, today);
            const isFromPast3Months = isWithinRange(new Date(cardValue), past3Months, today);
            const isFromPastYear = isWithinRange(new Date(cardValue), pastYear, today);
            const isOlderThanYear = isBefore(new Date(cardValue), pastYear);

            // map option values to DOM, with fallbacks
            const pastMonthValue = optionNames ? optionNames[1] : '1';
            const past3MonthsValue = optionNames ? optionNames[2] : '2';
            const pastYearValue = optionNames ? optionNames[3] : '3';
            const olderThanYearValue = optionNames ? optionNames[4] : '4';

            // if any of the tests are true, push corresponding value to array
            const dateValueMap = [
              isFromPastMonth ? pastMonthValue : '0',
              isFromPast3Months ? past3MonthsValue : '0',
              isFromPastYear ? pastYearValue : '0',
              isOlderThanYear ? olderThanYearValue : '0'
            ];

            // map over array and test against filter value
            const yepnope = dateValueMap.filter((value) => filterValue === 'all' || value === filterValue);

            return yepnope.length > 0;
          }

          const yepnope = valueArr.filter((value) => filterValue === 'all' || value === filterValue);

          return yepnope.length > 0;
        });

        // filter resulting array for cards where *all* criteria are true
        // const set will consist *only* of those cards
        return filtersMap.filter((v) => v === true).length === filtersMap.length;
      });

    // ensure we have matching cards and show them
    if (set.length > 0) {
      notSorry();
      set.map((card) => showCard(card));
      hideExtraCards(set);
      maybeResetTab();
      updateFilterState();
    } else {
      hideAllCards();
      saySorry();
      maybeResetTab();
      updateFilterState();
    }
  };

  const handleOnLoad = () => {
    updateFilterState();
    handleChange();
  };

  const handleOnClick = (ev) => {
    ev.preventDefault();

    state.resultsPage += 1;

    handleChange();
    ev.target.blur();
  };

  // if we're not filterable, bail early
  if (!ui.filters) {
    return;
  }

  // bind filter change event
  ui.filters.forEach((filter) => {
    filter.addEventListener('change', (ev) => {
      state.resultsPage = 0;
      handleChange(ev);
    });
  });

  // bind load more click event
  if (ui.loadMoreBtn) {
    ui.loadMoreBtn.addEventListener('click', handleOnClick);
  }

  // fire initially to handle users entering with query string
  handleOnLoad();

  // watch for URL changes to the document not caused by pushState
  // (back button, etc) and update results set accordingly
  window.onpopstate = () => {
    handleOnLoad();
  };
};

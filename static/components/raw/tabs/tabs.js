import select from 'dom-select';
import throttle from 'lodash.throttle';
import createSetState from '../../../assets/js/lib/createSetState';

const Tabs = (el) => {
  // cache elements
  const ui = {
    el,
    body: select('body'),
    tabList: select.all('.tab', el),
    inputList: select.all('.tab__input', el),
    contentList: select.all('.tab__content', el),
    initialCheck: null
  };

  const initialCheck = () => {
    const ic = ui.inputList
      .map((input, index) => ({ index, checked: input.checked }))
      .filter((item) => item.checked)[0];

    if (ic) {
      ui.initialCheck = ic;
    }

    // if there's no input checked on load, set the first one to checked
    ui.inputList[0].checked = true;
    ui.initialCheck = { index: 0, checked: true };
  };

  // state
  const state = {
    activeIndex: ui.initialCheck ? ui.initialCheck.index : 0
  };

  // update state and set height
  const setState = createSetState(state, ({ isUpdating }) => {
    if (isUpdating('activeIndex')) {
      ui.contentList.forEach((content, index) => {
        content.setAttribute('aria-expanded', state.activeIndex === index);
        const heights = content.offsetHeight;
        if (heights > 0) {
          if (ui.body.offsetWidth > 768) {
            ui.el.style.marginBottom = `${heights}px`;
          } else {
            ui.el.style.marginBottom = 'auto';
          }
        }
      });
    }
  });

  // as each image inside tabs loads, remeasure height of panels
  const handleImgOnLoad = () => {
    ui.contentList.forEach((panel) => {
      const imgs = select.all('img', panel);

      if (imgs.length) {
        imgs.map((img) => (
          img.addEventListener('load', () => {
            setState({}, true);
          })
        ));
      }
    });
  };

  // listener callbacks
  const onChange = (ev) => {
    ev.preventDefault();
    const { parentNode } = ev.target;

    setState({
      activeIndex: ui.tabList.indexOf(parentNode)
    });
  };

  // init universal event listeners
  ui.el.addEventListener('change', onChange, false);

  // set initial aria state
  initialCheck();
  setState({}, true);

  handleImgOnLoad();

  // fire on (throttled) resize
  window.addEventListener('resize', throttle(() => setState({}, true), 250, { trailing: true, leading: true }));
};

Tabs.initAll = () => {
  select.all('.tabs').map(Tabs);
};

export default Tabs;

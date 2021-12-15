import select from 'dom-select';
import throttle from 'lodash.throttle';

export default(el) => {
  const ui = {
    el,
    body: select('body'),
    topLevelLinks: select.all('.nav__menu-toggle', el),
    dropdowns: select.all('.global-nav__menu', el),
    dropdownLinks: select.all('.global-nav__menu a', el),
    activeClass: 'is-active',
    activeItemClass: 'nav__category--active',
    toggle: select('.js-nav-toggle'),
    closeBtn: select('.secondary-nav .nav__close')
  };

  const state = {
    isTouch: false,
    isSmall: window.matchMedia('(max-width: 768px)')
  };

  // adds necessary aria-haspopup attribute to LIs with submenus
  // called in init, on load
  const setHasPopUp = () => {
    ui.topLevelLinks.forEach((link) => {
      const subNav = link.nextElementSibling;
      const parentLi = link.parentElement;

      // add aria helper only if subnav present
      if (subNav && subNav.classList.contains('global-nav__menu')) {
        parentLi.setAttribute('aria-haspopup', true);
      }
    });
  };

  // adds aria-hidden to subnav items so they're hidden from screenreaders
  // will be set to false when activated
  const setSubNavAriaBaseline = () => {
    ui.dropdowns.forEach((d) => {
      d.setAttribute('aria-hidden', true);
    });
  };

  // sets subnav items' tabIndex = -1 so they're hidden from keyboards
  // will be set to tabIndex = 0 when activated
  const setSubNavLinkBaseTabIndex = () => {
    ui.dropdownLinks.forEach((link) => {
      link.tabIndex = -1; // eslint-disable-line
    });
  };

  const resetMenus = () => {
    const activeMenu = select('.global-nav__menu.is-active');

    if (activeMenu) {
      const activeLink = select('.nav__menu-toggle.is-active');
      const activeParent = select(`.${ui.activeItemClass}`);
      const activeSubLinks = select.all('a', activeMenu);

      activeLink.classList.remove(ui.activeClass);
      activeLink.blur();

      activeParent.classList.remove(ui.activeItemClass);

      ui.body.classList.remove('subnav-active', 'nav-active');

      // set aria hidden of current menu and...
      activeMenu.setAttribute('aria-hidden', true);
      // ...remove active class
      activeMenu.classList.remove(ui.activeClass);
      // reset tabIndex on active menu links
      if (activeSubLinks) {
        activeSubLinks.forEach((link) => {
          link.tabIndex = -1; // eslint-disable-line
        });
      }
    }
  };

  const closeSubNav = (link) => {
    const parentLi = link.parentElement;
    const subNav = link.nextElementSibling;
    const curMenuLinks = select.all('a', subNav);

    // remove active state from link
    link.classList.remove(ui.activeClass);

    // set aria hidden to false for next menu
    subNav.setAttribute('aria-hidden', true);

    // ...and add active class
    subNav.classList.remove(ui.activeClass);

    // set the active class on the parent li
    parentLi.classList.remove(ui.activeItemClass);

    // add subnav active class to root
    ui.body.classList.remove('subnav-active');

    // ...and set tabIndex = 0 for each link inside
    curMenuLinks.forEach((subNavLink) => {
      subNavLink.tabIndex = -1; // eslint-disable-line
    });
  };

  const unbindCloseButton = () => {
    ui.closeBtn.removeEventListener('click', (ev) => {
      ev.preventDefault();
    }, false);
  };

  const bindCloseButton = (link) => {
    // click event for mobile nav close button
    ui.closeBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      closeSubNav(link);
    });

    // touch event for mobile nav close button
    ui.closeBtn.addEventListener('touchstart', (ev) => {
      ev.preventDefault();
      closeSubNav(link);
    });
  };

  const toggleMenu = (link, subNav, parent, activate = true) => {
    const curMenuLinks = select.all('a', subNav);

    // remove active state from link
    link.classList[activate ? 'add' : 'remove'](ui.activeClass);

    // set aria hidden to false for next menu
    subNav.setAttribute('aria-hidden', !activate);

    // ...and add active class
    subNav.classList[activate ? 'add' : 'remove'](ui.activeClass);

    // set the active class on the parent li
    parent.classList[activate ? 'add' : 'remove'](ui.activeItemClass);

    // add subnav active class to root
    ui.body.classList[activate ? 'add' : 'remove']('subnav-active');

    // ...and set tabIndex = 0 for each link inside
    curMenuLinks.forEach((subNavLink) => {
      subNavLink.tabIndex = activate ? 0 : -1; // eslint-disable-line
    });
  };

  const addLinkBindings = () => {
    ui.topLevelLinks.forEach((link) => {
      const parentLi = link.parentElement;
      const nextMenu = link.nextElementSibling;
      const nextMenuLinks = select.all('a', nextMenu);
      const lastLink = nextMenuLinks[nextMenuLinks.length - 1];

      // click event for top-level nav links
      link.addEventListener('click', (ev) => {
        ev.preventDefault();

        // don't bubble up to the click event bound to body
        ev.stopPropagation();

        if (ev.target.classList.contains(ui.activeClass)) {
          // if it's the active menu item, just close everything
          resetMenus();
        } else {
          // other wise, close everything then open the correct menu
          resetMenus();
          toggleMenu(link, nextMenu, parentLi, true);
          // rebind the close button to the active menu
          unbindCloseButton();
          bindCloseButton(link);

          // if login menu's open, body class contains
          // subnav-active *without* nav-active
          // and the menu button is in its active state
          // resetting and toggling then creates odd, unwanted states
          // this is a stop-gap at correcting it
          if (ev.target.classList.contains('secondary-nav__login')) {
            ui.body.classList.remove('nav-active');
            ui.toggle.classList.remove('nav-toggle--is-active');
          }
        }
      });

      // touch event for top-level nav links
      link.addEventListener('touchstart', (ev) => {
        if (!state.isTouch) return;

        ev.preventDefault();

        // don't bubble up to the click event bound to body
        ev.stopPropagation();

        if (ev.target.classList.contains(ui.activeClass)) {
          // if it's the active menu item, just close everything
          resetMenus();
        } else {
          // other wise, close everything then open the correct menu
          resetMenus();
          toggleMenu(link, nextMenu, parentLi, true);
          // rebind the close button to the active menu
          unbindCloseButton();
          bindCloseButton(link);

          // if login menu's open, body class contains
          // subnav-active *without* nav-active
          // and the menu button is in its active state
          // resetting and toggling then creates odd, unwanted states
          // this is a stop-gap at correcting it
          if (ev.target.classList.contains('secondary-nav__login')) {
            ui.body.classList.remove('nav-active');
            ui.toggle.classList.remove('nav-toggle--is-active');
          }
        }
      });

      // closes open flyout when user leaves submenu
      if (lastLink) {
        lastLink.addEventListener('blur', () => {
          resetMenus();
          toggleMenu(link, nextMenu, parentLi, false);
        });
      }
    });
  };

  const handleActiveMenuClick = () => {
    ui.dropdowns.forEach((menu) => {
      menu.addEventListener('click', (ev) => {
        ev.stopPropagation();
      });
    });
  };

  const isActionLink = (elem) => {
    let test = false;

    if (elem.classList.contains('secondary-nav__login')) {
      test = true;
    }

    if (elem.classList.contains('js-nav-toggle')) {
      test = true;
    }

    if (elem.classList.contains('brand__anchor')) {
      test = true;
    }

    return test;
  };

  // click event to close submenus when clicking outside of flyout
  const handleDocumentClick = () => {
    document.addEventListener('click', (ev) => {
      if ((state.isTouch || state.isSmall.matches) && !isActionLink(ev.target)) {
        return;
      }

      resetMenus();
    }, false);
  };

  const handleResize = () => {
    // reset menus on (throttled) resize
    window.addEventListener('resize', throttle(() => {
      if (state.isTouch || state.isSmall.matches) return;

      resetMenus();
      ui.body.classList.remove('nav-active');
    }, 250, { trailing: true, leading: true }));
  };

  // sledgehammer-like hack to determine if on a touch device
  const touched = () => {
    document.body.classList.add('touch');

    state.isTouch = true;

    window.removeEventListener('touchstart', touched, false);
  };

  const init = () => {
    window.addEventListener('touchstart', touched, false);
    setHasPopUp();
    setSubNavAriaBaseline();
    setSubNavLinkBaseTabIndex();
    addLinkBindings();
    handleActiveMenuClick();
    handleDocumentClick();
    handleResize();
  };

  init();
};

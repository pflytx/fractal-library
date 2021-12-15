import throttle from 'lodash.throttle';

export default(el) => {
  const ui = {
    el
  };

  const onScroll = (ev) => {
    const isScrolled = window.pageYOffset >= ui.el.offsetHeight;

    ui.el.classList[isScrolled ? 'add' : 'remove']('has-scrolled');
  };

  window.addEventListener('scroll', throttle(onScroll, 250, { trailing: true, leading: true }));
};


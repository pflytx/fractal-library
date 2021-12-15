import select from 'dom-select';
import throttle from 'lodash.throttle';

export default(el) => {
  const ui = {
    el,
    carousel: select('.carousel', el),
    body: select('body')
  };

  if (ui.el.classList.contains('photo-gallery--in-place')) {
    return;
  }

  const positionCarousel = () => {
    const wrap = select('.wrapper', ui.el);
    const wrapWidth = wrap.getBoundingClientRect().width;
    const bodyWidth = ui.body.getBoundingClientRect().width;

    const deltaOffset = (bodyWidth - wrapWidth) / 2;
    const mr = `calc(-${deltaOffset}px - 3rem)`;

    // pulls the carousel to the right edge of the window
    ui.carousel.style.marginRight = mr;
  };

  // fire on load
  positionCarousel();

  // fire on (throttled) resize
  window.addEventListener('resize', throttle(positionCarousel, 250, { trailing: true, leading: true }));

}

// el = ".carousel-rotator"
// has next/prev buttons on carousel

import Flickity from 'flickity';
import select from 'dom-select';
import throttle from 'lodash.throttle';
import 'flickity-imagesloaded';

export default(el) => {
  const ui = {
    el,
    container: select('.carousel__container', el),
    cells: select.all('.carousel__cell', el),
    tabs: select.all('.carousel__tabs li', el)
  };

  if (ui.cells.length > 1) {
    // initialize carousel
    const flkty = new Flickity(ui.container, {
      adaptiveHeight: true,
      // SVG path value from icons/arrow-carousel.hbs
      arrowShape: "M54.4 4.2c2.5 2.5 2.5 6.2 0 8.8L23.7 43.6h70c3.7 0 6.2 2.5 6.2 6.2S97.4 56 93.7 56h-70l30.6 30.6c2.5 2.5 2.5 6.2 0 8.8-2.5 2.5-6.2 2.5-8.8 0L0 49.8 45.6 4.2c2.5-1.9 6.3-1.9 8.8 0z",
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: true,
      wrapAround: true
    });

    // change is a Flickity event fired any time the active slide changes
    flkty.on('change', (index) => {
      if (ui.tabs.length > 0) {
        ui.tabs.forEach((tab) => {
          tab.classList.remove('active');
        });

        ui.tabs[index].classList.add('active');
      }
    });

    // settle is a Flickity event fired once slide change completes
    flkty.on('settle', (index) => {
      flkty.resize();
    });

    if (ui.tabs.length > 1) {
      ui.tabs[0].classList.add('active');
    }

    // resize carousel cells on (throttled) window.resize
    window.addEventListener('resize', throttle(() => {
      flkty.resize();
    }, 250, { trailing: true, leading: true }));
  }
};

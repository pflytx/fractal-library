import Flickity from 'flickity';
import select from 'dom-select';
import throttle from 'lodash.throttle';
import 'flickity-imagesloaded';

export default(el) => {
  const ui = {
    el,
    container: select('.carousel__container', el),
    cells: select.all('.carousel__cell', el)
  };

  if (ui.cells.length > 1) {
    // initialize carousel
    const flkty = new Flickity(ui.container, {
      adaptiveHeight: true,
      autoPlay: 5000,
      imagesLoaded: true,
      pageDots: true,
      prevNextButtons: false
    });

    // change is a Flickity event fired any time the active slide changes
    flkty.on( 'change', () => {
      flkty.resize();
    });

    // resize carousel cells on (throttled) window.resize
    window.addEventListener('resize', throttle(() => {
      flkty.resize();
    }, 250, { trailing: true, leading: true }));
  }
};

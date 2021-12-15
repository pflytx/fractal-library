import Flickity from 'flickity';
import select from 'dom-select';
import throttle from 'lodash.throttle';
import 'flickity-imagesloaded';

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

export default(el) => {
  const ui = {
    el,
    container: select('.carousel__container', el),
    cells: select.all('.carousel__cell', el),
    buttonGroup: select('.carousel__controls', el),
    prevButton: select('.carousel__control-prev', el),
    nextButton: select('.carousel__control-next', el),
    curIndicator: select('.carousel__current', el),
    nextIndicator: select('.carousel__next', el)
  };

  // initialize carousel
  const flkty = new Flickity(ui.container, {
    adaptiveHeight: true,
    cellAlign: 'left',
    imagesLoaded: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true
  });

  // takes a number and adds a leading zero if necessary
  // 1 => 01, 10 => 10
  const leftPadNumber = (num, width) => {
    return num.toString().padStart(width, 0);
  };

  const formatedCounter = (index) => leftPadNumber(index + 1, 2);

  const setIndicators = (selectedIndex) => {
    const isFirst = selectedIndex === 0;
    const isLast = selectedIndex === ui.cells.length - 1;

    // update arrow classes
    ui.prevButton.classList[isFirst ? 'remove' : 'add']('is-active');
    ui.nextButton.classList[isLast ? 'remove' : 'add']('is-active');

    // update number indicators
    ui.curIndicator.innerHTML = formatedCounter(selectedIndex);
    ui.nextIndicator.innerHTML = isLast ? formatedCounter(0) : formatedCounter(selectedIndex + 1);
  };

  // call on load to set correct numbers
  setIndicators(flkty.selectedIndex);

  // update buttons on select
  // select is a Flickity event fired on any slide change
  flkty.on('select', () => {
    setIndicators(flkty.selectedIndex);
  });

  // settle is a Flickity event fired once slide change completes
  flkty.on('settle', () => {
    flkty.resize();
  });

  // previous
  ui.prevButton.addEventListener('click', () => {
    flkty.previous();
  });

  // next
  ui.nextButton.addEventListener('click', () => {
    flkty.next();
  });

  // resize carousel cells on (throttled) window.resize
  window.addEventListener('resize', throttle(() => {
    flkty.resize();
  }, 250, { trailing: true, leading: true }));
};

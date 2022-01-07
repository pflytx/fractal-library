import select from 'dom-select';
// import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
// import 'debug.addIndicators';

const controller = new ScrollMagic.Controller();
const logos = select.all('.logo-farm__img');
let currentPreview = 0;

const logoFarm = () => {

  logos.forEach((i) => {
    let el = '#logo-farm-img' + currentPreview;
    let trigger = '#logo-farm-trigger';

    // img tween
    const tween = TweenMax.to(el, 1, { className: '+=animated' });
    const scene = new ScrollMagic.Scene({
      triggerElement: trigger,
      duration: 300,
      offset: -230
    })
      .setTween(tween)
      .addTo(controller)
      // .addIndicators()
      ;

    currentPreview++;
  });
}

export default logoFarm;

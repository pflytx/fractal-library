import select from 'dom-select';
import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
// import 'debug.addIndicators';

const controller = new ScrollMagic.Controller();

const scrolls = (i) => {
  const media = select('.animate', i);
  if (!media) {
    return
  }
  const tween = TweenMax.to(media, 1, { className: '+=animated' });
  const scene = new ScrollMagic.Scene({
    triggerElement: i,
    duration: 900,
    offset: -300
  })
    .setTween(tween)
    .addTo(controller)
  // .addIndicators()
  ;
}

export default scrolls;

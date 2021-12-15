  import select from 'dom-select';
  import ScrollMagic from 'ScrollMagic';
  import 'animation.gsap';
  // import 'debug.addIndicators';
  
  const controllerAnchorNav = new ScrollMagic.Controller();

  const anchorNav = () => {
    // build scenes
    new ScrollMagic.Scene({triggerElement: "#content-a"})
      .duration(select('#content-a').offsetHeight)
      .setClassToggle("#anchor-a", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav);
    new ScrollMagic.Scene({triggerElement: "#content-b"})
    .duration(select('#content-b').offsetHeight)
      .setClassToggle("#anchor-b", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav);
    new ScrollMagic.Scene({triggerElement: "#content-c"})
    .duration(select('#content-c').offsetHeight)
      .setClassToggle("#anchor-c", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav)
    new ScrollMagic.Scene({triggerElement: "#content-d"})
    .duration(select('#content-d').offsetHeight)
      .setClassToggle("#anchor-d", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav)
    new ScrollMagic.Scene({triggerElement: "#content-e"})
    .duration(select('#content-e').offsetHeight)
      .setClassToggle("#anchor-e", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav)
    new ScrollMagic.Scene({triggerElement: "#content-f"})
    .duration(select('#content-f').offsetHeight)
      .setClassToggle("#anchor-f", "active")
      // .addIndicators()
      .addTo(controllerAnchorNav)
  }
  
  export default anchorNav;
    
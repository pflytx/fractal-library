import select from 'dom-select';

export default(el) => {
  const ui = {
    el,
    toggle: select('.connected-drawer__btn', el)
  };

  const setTarget = () => {
    const id = ui.toggle.dataset.targetId;
    ui.target = select(`#${id}`, ui.el);
  }

  const handleClick = () => {
    ui.target.classList.toggle('is-active');
    ui.toggle.blur();
  };

  setTarget();

  ui.toggle.addEventListener('click', handleClick);
};

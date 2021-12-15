export default(el) => {
  const ui = {
    el,
    input: el.previousElementSibling
  };

  const handleOnClick = (btn) => {
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();

      ui.input.value = '';
      ui.input.focus();
    });
  };

  handleOnClick(ui.el);
}

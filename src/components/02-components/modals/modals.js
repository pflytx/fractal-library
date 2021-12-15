import A11yDialog from 'a11y-dialog';
import select from 'dom-select';

export default(el) => {
  const ui = {
    el,
    parent: select('body'),
    triggers: select.all('a[data-a11y-dialog-show]')
  };

  const state = {
    isLocked: false,
    hasTakeover: false
  };

  const modal = new A11yDialog(el, ui.parent);

  // triggers should always be buttons for a11y
  // but in the event they're not or need to be anchor tags
  // they shouldn't do anythign stupid...
  ui.triggers.forEach((trigger) => {
    trigger.addEventListener('click', (ev) => {
      ev.preventDefault();
    });
  });

  const updateLock = () => {
    ui.parent.classList[state.isLocked ? 'add' : 'remove']('is-locked');
  };

  const updateTakeover = () => {
    ui.parent.classList[state.hasTakeover ? 'add' : 'remove']('has-takeover');
  };

  modal.on('show', () => {
    state.isLocked = true;
    state.hasTakeover = true;

    updateLock();
    updateTakeover();
  });

  modal.on('hide', () => {
    state.isLocked = false;
    state.hasTakeover = false;

    updateLock();
    updateTakeover();
  });
};

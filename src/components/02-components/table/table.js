import select from 'dom-select';

export default(el) => {
  const tabTableWrap = select('#js-table-wrap');
  const tabTriggers = select.all('.js-tab-trigger');

  tabTriggers.forEach ((tabTrigger) => {
    tabTrigger.addEventListener('click', (e) => {
      const tabValue = (tabTrigger.getAttribute('data-tab'));
      
      // clear previous tab state
      tabTableWrap.className = '';
      // add current tab state
      tabTableWrap.classList.add(tabValue);
    });
  })
};

const nav = document.querySelector('.tabs-nav');
const navTabs = Array.from(document.querySelectorAll('.tabs-nav__tab'));
const tabPanels = Array.from(document.querySelectorAll('.tabs-panel'));

const selectedTabClassName = 'tabs-nav__tab--selected';
const selectedPanelAriaRoleName = 'aria-selected';
const selectedPanelClassName = 'tabs-panel--selected';

const handleNavClick = event => {
  if (event.target instanceof HTMLAnchorElement) {
    const currentTabPanel = tabPanels
      .find(tabPanel => tabPanel.id === event.target.hash.replace('#', ''));

    navTabs.forEach(navTab => {
      navTab.classList.remove(selectedTabClassName);
    });
    tabPanels.forEach(tabPanel => {
      tabPanel.setAttribute(selectedPanelAriaRoleName, 'false');
      tabPanel.classList.remove(selectedPanelClassName);
      tabPanel.classList.add('tabs-panel--hidden');
    });

    event.target.classList.add(selectedTabClassName);
    currentTabPanel.setAttribute(selectedPanelAriaRoleName, 'true');
    currentTabPanel.classList.add(selectedPanelClassName);
  }
};

navTabs[0].classList.add(selectedTabClassName);

nav.addEventListener('click', handleNavClick, false);

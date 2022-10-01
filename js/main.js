const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const cardInfoArray = [];

class PortfolioCard {
  constructor(productTitle, sectionTitle, image) {
    this.productTitle = productTitle;
    this.sectionTitle = sectionTitle;
    this.image = image;
    cardInfoArray.push(this);
  }
}

const portfolioCard1 = new PortfolioCard('Food Website', 'Web Development', 'assets/images/portfolio-1.jpg');
const portfolioCard2 = new PortfolioCard('Social Network', 'UI Designs', 'assets/images/portfolio-2.jpg');
const portfolioCard3 = new PortfolioCard('Online Store', 'Web Development', 'assets/images/portfolio-3.jpg');
const portfolioCard4 = new PortfolioCard('Meeting App', 'App Development', 'assets/images/portfolio-4.jpg');
const portfolioCard5 = new PortfolioCard('Pin Website', 'Web Development', 'assets/images/portfolio-5.jpg');
const portfolioCard6 = new PortfolioCard('Weather App', 'App Development', 'assets/images/portfolio-6.jpg');
const portfolioCard7 = new PortfolioCard('VPN App', 'UI Designs', 'assets/images/portfolio-7.jpg');
const portfolioCard8 = new PortfolioCard('News App', 'App Development', 'assets/images/portfolio-8.jpg');

const cardContainer = document.querySelector('.portfolio-grid');

cardInfoArray.forEach((item) => {
  const productTitle = item.productTitle;
  const sectionTitle = item.sectionTitle;
  const image = item.image;
  let cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="card-body">
    <img src="${image}" alt="portfolio-icon" />
    <a href="#" class="card-popup-box">
      <div>${sectionTitle}</div>
      <h3>${productTitle}</h3>
    </a>
  </div>
  `;
  cardDiv.classList.add('portfolio-card');
  cardContainer.appendChild(cardDiv);
});

// portfolioCardData.forEach((item) => {});

// portfolioCardTemplate.innerHTML = `
// <div class="portfolio-card" data-item="web">
//   <div class="card-body">
//     <img src="${image}" alt="portfolio-icon" />
//     <a href="#" class="card-popup-box">
//       <div>${sectionTitle}</div>
//       <h3>${productTitle}</h3>
//     </a>
//   </div>
// </div>
// `;

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

//
const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (value) => {
  if (value === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener('click', function () {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

//
searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

for (const link of filterLink) {
  link.addEventListener('click', function () {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Full Site Modal "open buttons"

for (const elm of openModal) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}

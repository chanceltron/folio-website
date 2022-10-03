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
  constructor(id, dataItem, productTitle, sectionTitle, image, header, info1, info2) {
    this.id = id;
    this.dataItem = dataItem;
    this.productTitle = productTitle;
    this.sectionTitle = sectionTitle;
    this.image = image;
    this.header = header;
    this.info1 = info1;
    this.info2 = info2;
    cardInfoArray.push(this);
  }
}

const portfolioCard1 = new PortfolioCard(
  'web1',
  'web',
  'Food Website',
  'Web Development',
  'assets/images/portfolio-1.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard2 = new PortfolioCard(
  'ui1',
  'ui',
  'Social Network',
  'UI Designs',
  'assets/images/portfolio-2.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard3 = new PortfolioCard(
  'web2',
  'web',
  'Online Store',
  'Web Development',
  'assets/images/portfolio-3.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard4 = new PortfolioCard(
  'app1',
  'app',
  'Meeting App',
  'App Development',
  'assets/images/portfolio-4.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard5 = new PortfolioCard(
  'web3',
  'web',
  'Pin Website',
  'Web Development',
  'assets/images/portfolio-5.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard6 = new PortfolioCard(
  'app2',
  'app',
  'Weather App',
  'App Development',
  'assets/images/portfolio-6.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard7 = new PortfolioCard(
  'ui2',
  'ui',
  'VPN App',
  'UI Designs',
  'assets/images/portfolio-7.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);
const portfolioCard8 = new PortfolioCard(
  'app3',
  'app',
  'News App',
  'App Development',
  'assets/images/portfolio-8.jpg',
  'Lorem ipsum dolor sit amet',
  'Etiam tempor orci eu lobortis elementum nibh tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.',
  'Sed viverra ipsum nunc aliquet. Velit scelerisque in dictum non consectetur.'
);

const cardContainer = document.querySelector('.portfolio-grid');

cardInfoArray.forEach((item) => {
  let cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="portfolio-card" data-item="${item.dataItem}" data-open="${item.id}">
  <div class="card-body">
  <img src="${item.image}" alt="portfolio-icon" />
  <div class="card-popup-box">
  <div>${item.sectionTitle}</div>
  <h3>${item.productTitle}</h3>
  </div>
  </div>
  `;
  cardContainer.appendChild(cardDiv);
});

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

const portfolioModals = document.querySelector('.portfolio-modals');
//
const addPortfolioModal = (modalId) => {
  cardInfoArray.forEach((item) => {
    if (item.id === modalId) {
      let modalDiv = document.createElement('div');
      modalDiv.innerHTML = `
      <div id="${item.id}" class="modal" data-animation="slideInOutTop">
            <div class="modal-dialog">
              <header class="modal-header">
                <h3>${item.productTitle}</h3>
                <i class="fa-solid fa-xmark" data-close></i>
              </header>
              <div class="modal-body">
                <div class="img-wrapper">
                  <img src="${item.image}" alt="portfolio-icon" />
                </div>
                <div class="text-wrapper">
                  <p><strong>${item.header}</strong></p>
                  <p>${item.info1}</p>
                  <p>${item.info2}</p>
                </div>
              </div>
            </div>
          </div>
          `;
      portfolioModals.appendChild(modalDiv);
      modalDiv.classList.add('modal-container');
    }
  });
};

const removePortfolioModal = async () => {
  const modalContainer = document.querySelector('.modal-container');
  setTimeout(() => {
    portfolioModals.removeChild(modalContainer);
  }, 500);
};
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

// Modal "open buttons"

for (const elm of openModal) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.open;
    addPortfolioModal(modalId);
    setTimeout(() => {
      document.getElementById(modalId).classList.add(isVisible);
    }, 50);
  });
}

for (const elm of closeModal) {
  elm.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// Modal
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    removePortfolioModal();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    removePortfolioModal();
  }
});

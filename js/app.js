/* ===== GAME DATA ===== */
const GAMES = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    genre: "Action, Adventure",
    category: "Action",
    price: 5.10,
    description: "Experience the ultimate open-world crime saga. Fully playable offline after installation. Includes all single-player content.",
    size: "95 GB",
    developer: "Rockstar North",
    tags: ["PC Offline", "Open World"]
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    genre: "RPG, Action",
    category: "RPG",
    price: 12.99,
    description: "Become a cyberpunk mercenary in Night City. Complete offline single-player experience with no online requirements after install.",
    size: "70 GB",
    developer: "CD Projekt RED",
    tags: ["PC Offline", "RPG"]
  },
  {
    id: 3,
    title: "Elden Ring",
    genre: "RPG, Action",
    category: "RPG",
    price: 14.50,
    description: "Rise, Tarnished. A vast open-world action RPG fully playable offline. Explore the Lands Between at your own pace.",
    size: "60 GB",
    developer: "FromSoftware",
    tags: ["PC Offline", "Souls-like"]
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    genre: "Action, Adventure",
    category: "Action",
    price: 11.25,
    description: "An epic tale of life in America's unforgiving heartland. Complete story mode available offline.",
    size: "120 GB",
    developer: "Rockstar Games",
    tags: ["PC Offline", "Open World"]
  },
  {
    id: 5,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG, Adventure",
    category: "RPG",
    price: 6.75,
    description: "Play as Geralt of Rivia in this award-winning open-world RPG. Full game + expansions playable offline.",
    size: "50 GB",
    developer: "CD Projekt RED",
    tags: ["PC Offline", "Story Rich"]
  },
  {
    id: 6,
    title: "FC 25 PC",
    genre: "Sports",
    category: "Sports",
    price: 8.90,
    description: "The latest football simulation experience. Career mode, Ultimate Team offline features, and more. Optimized for PC offline play.",
    size: "45 GB",
    developer: "EA Sports",
    tags: ["PC Offline", "Football"]
  },
  {
    id: 7,
    title: "PES 2021 (Season Patch)",
    genre: "Sports",
    category: "Sports",
    price: 3.65,
    description: "Classic eFootball experience with updated kits and squads. Fully offline football action on any decent PC.",
    size: "25 GB",
    developer: "Konami",
    tags: ["PC Offline", "Football"]
  },
  {
    id: 8,
    title: "Football Manager 2025",
    genre: "Sports, Simulation",
    category: "Simulation",
    price: 9.40,
    description: "Build your dream club and dominate world football. Deep management simulation fully playable offline.",
    size: "8 GB",
    developer: "Sports Interactive",
    tags: ["PC Offline", "Management"]
  },
  {
    id: 9,
    title: "GTA IV – Complete Edition",
    genre: "Action, Adventure",
    category: "Action",
    price: 3.20,
    description: "Liberty City awaits. Includes Episodes from Liberty City. Classic open-world action fully offline.",
    size: "22 GB",
    developer: "Rockstar North",
    tags: ["PC Offline", "Classic"]
  },
  {
    id: 10,
    title: "Sleeping Dogs: Definitive Edition",
    genre: "Action, Adventure",
    category: "Action",
    price: 4.80,
    description: "Undercover cop in the Hong Kong underworld. Stylish open-world combat and story, fully offline.",
    size: "18 GB",
    developer: "United Front Games",
    tags: ["PC Offline", "Open World"]
  },
  {
    id: 11,
    title: "Batman: Arkham Knight",
    genre: "Action, Adventure",
    category: "Action",
    price: 5.50,
    description: "The finale to the Arkham series. Become the Batman and take back Gotham. Complete offline experience.",
    size: "55 GB",
    developer: "Rocksteady Studios",
    tags: ["PC Offline", "Superhero"]
  },
  {
    id: 12,
    title: "Assassin's Creed Odyssey",
    genre: "Action, RPG",
    category: "RPG",
    price: 7.15,
    description: "Explore Ancient Greece as a legendary mercenary. Massive open world fully playable offline.",
    size: "46 GB",
    developer: "Ubisoft Quebec",
    tags: ["PC Offline", "Open World"]
  },
  {
    id: 13,
    title: "Need for Speed: Most Wanted (2005)",
    genre: "Racing",
    category: "Racing",
    price: 2.90,
    description: "The legendary street racing classic. Blacklist chase system and open-world free roam, fully offline.",
    size: "4 GB",
    developer: "EA Black Box",
    tags: ["PC Offline", "Classic"]
  },
  {
    id: 14,
    title: "Forza Horizon 5",
    genre: "Racing",
    category: "Racing",
    price: 13.80,
    description: "Open-world racing festival in Mexico. Huge map, hundreds of cars, fully enjoyable offline.",
    size: "110 GB",
    developer: "Playground Games",
    tags: ["PC Offline", "Open World"]
  },
  {
    id: 15,
    title: "Call of Duty: Modern Warfare 2 (2009)",
    genre: "Shooter",
    category: "Shooter",
    price: 4.25,
    description: "Iconic campaign and Spec Ops. Classic single-player experience fully playable offline.",
    size: "16 GB",
    developer: "Infinity Ward",
    tags: ["PC Offline", "Campaign"]
  },
  {
    id: 16,
    title: "Doom Eternal",
    genre: "Shooter",
    category: "Shooter",
    price: 8.60,
    description: "Rip and tear through demons in this high-octane FPS. Complete campaign available offline.",
    size: "50 GB",
    developer: "id Software",
    tags: ["PC Offline", "FPS"]
  },
  {
    id: 17,
    title: "Sekiro: Shadows Die Twice",
    genre: "Action, Adventure",
    category: "Action",
    price: 10.20,
    description: "Shinobi action from FromSoftware. Precise combat and exploration, fully offline.",
    size: "25 GB",
    developer: "FromSoftware",
    tags: ["PC Offline", "Souls-like"]
  },
  {
    id: 18,
    title: "Hades",
    genre: "Action, Roguelike",
    category: "Action",
    price: 6.40,
    description: "Escape the Underworld in this award-winning roguelike. Perfect for offline sessions.",
    size: "15 GB",
    developer: "Supergiant Games",
    tags: ["PC Offline", "Indie"]
  },
  {
    id: 19,
    title: "Stardew Valley",
    genre: "Simulation, RPG",
    category: "Simulation",
    price: 4.10,
    description: "Build the farm of your dreams. Relaxing life sim fully playable offline.",
    size: "1 GB",
    developer: "ConcernedApe",
    tags: ["PC Offline", "Cozy"]
  },
  {
    id: 20,
    title: "Cities: Skylines",
    genre: "Simulation",
    category: "Simulation",
    price: 5.75,
    description: "Build and manage your dream city. Deep city-builder experience with no online requirements.",
    size: "6 GB",
    developer: "Colossal Order",
    tags: ["PC Offline", "Builder"]
  },
  {
    id: 21,
    title: "Mafia: Definitive Edition",
    genre: "Action, Adventure",
    category: "Action",
    price: 7.90,
    description: "Remade classic crime story set in Lost Heaven. Cinematic single-player experience offline.",
    size: "50 GB",
    developer: "Hangar 13",
    tags: ["PC Offline", "Story"]
  },
  {
    id: 22,
    title: "Control Ultimate Edition",
    genre: "Action, Adventure",
    category: "Action",
    price: 6.95,
    description: "Supernatural action-adventure in the Federal Bureau of Control. Fully offline.",
    size: "42 GB",
    developer: "Remedy Entertainment",
    tags: ["PC Offline", "Supernatural"]
  },
  {
    id: 23,
    title: "Hollow Knight",
    genre: "Adventure, Metroidvania",
    category: "Adventure",
    price: 3.95,
    description: "Explore a vast interconnected underground kingdom. One of the best offline Metroidvanias.",
    size: "2 GB",
    developer: "Team Cherry",
    tags: ["PC Offline", "Indie"]
  },
  {
    id: 24,
    title: "Celeste",
    genre: "Platformer",
    category: "Adventure",
    price: 3.50,
    description: "Help Madeline survive Mount Celeste in this precise and emotional platformer. Fully offline.",
    size: "1.5 GB",
    developer: "Maddy Makes Games",
    tags: ["PC Offline", "Indie"]
  }
];

/* ===== STATE ===== */
let GAMES_DATA = [...GAMES]; // Will be replaced by API data when available
let cart = JSON.parse(localStorage.getItem('gamevault_cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';
let searchQuery = '';
let useAPI = false;

/* ===== DOM ===== */
const gamesGrid = document.getElementById('games-grid');
const noResults = document.getElementById('no-results');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const toastEl = document.getElementById('toast');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', async () => {
  await loadGames();
  updateCartUI();
  bindEvents();
});

/* ===== LOAD GAMES (API with local fallback) ===== */
async function loadGames() {
  try {
    if (typeof GamesAPI !== 'undefined') {
      const data = await GamesAPI.getAll();
      if (data.success && data.games && data.games.length > 0) {
        GAMES_DATA = data.games.map(g => ({
          id: g.id,
          title: g.title,
          genre: g.genre,
          category: g.category_name || g.genre.split(',')[0].trim(),
          price: Number(g.price),
          description: g.description,
          size: g.size || 'N/A',
          developer: g.developer || 'Unknown',
          tags: ['PC Offline']
        }));
        useAPI = true;
        console.log('✅ Loaded games from API:', GAMES_DATA.length);
      }
    }
  } catch (err) {
    console.warn('⚠️ API not available, using local game data.', err.message);
    useAPI = false;
  }
  renderGames();
}

/* ===== RENDER GAMES ===== */
function getFilteredGames() {
  let list = [...GAMES_DATA];

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );
  }

  // Category
  if (currentFilter !== 'all') {
    list = list.filter(g => g.category === currentFilter || g.genre.includes(currentFilter));
  }

  // Sort
  switch (currentSort) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      // featured – keep original order
      break;
  }

  return list;
}

function renderGames() {
  const games = getFilteredGames();

  if (games.length === 0) {
    gamesGrid.innerHTML = '';
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  gamesGrid.innerHTML = games.map(game => `
    <article class="game-card" data-id="${game.id}">
      <div class="game-cover">
        <div class="game-cover-inner">${game.title.split(' ')[0]}</div>
        <span class="game-badge">PC OFFLINE</span>
      </div>
      <div class="game-info">
        <div class="game-genre">${game.genre}</div>
        <h3 class="game-title">${game.title}</h3>
        <div class="game-meta">
          <span class="game-price">$${game.price.toFixed(2)}</span>
          <div class="game-actions">
            <button class="btn-view" data-id="${game.id}" title="View details">👁</button>
            <button class="btn-add" data-id="${game.id}" title="Add to cart">+</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ===== CART ===== */
function saveCart() {
  localStorage.setItem('gamevault_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const game = GAMES_DATA.find(g => g.id === id);
  if (!game) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: game.id, title: game.title, price: game.price, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${game.title} added to cart`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared');
}

function updateCartUI() {
  // Count
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalItems;

  // Total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = `$${total.toFixed(2)}`;

  // Checkout button
  document.getElementById('checkout-btn').disabled = cart.length === 0;

  // Items
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty">Your cart is empty.<br>Browse PC Offline games and add some!</div>`;
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-cover">${item.title.split(' ')[0]}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" data-action="minus" data-id="${item.id}">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===== MODAL ===== */
function openModal(id) {
  const game = GAMES_DATA.find(g => g.id === id);
  if (!game) return;

  modalBody.innerHTML = `
    <div class="modal-cover">${game.title.split(' ')[0]}</div>
    <div class="modal-info">
      <h2>${game.title}</h2>
      <div class="modal-genre">${game.genre} • PC Offline</div>
      <div class="modal-price">$${game.price.toFixed(2)}</div>
      <p class="modal-desc">${game.description}</p>
      <div class="modal-meta">
        <div><span>Developer</span><br><strong>${game.developer}</strong></div>
        <div><span>Size</span><br><strong>${game.size}</strong></div>
        <div><span>Delivery</span><br><strong>Instant Digital Access</strong></div>
        <div><span>Play Mode</span><br><strong>Fully Offline</strong></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" data-add="${game.id}">Add to Cart</button>
        <button class="btn btn-outline" id="modal-close-btn">Close</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== TOAST ===== */
function showToast(message, type = '') {
  toastEl.textContent = message;
  toastEl.className = 'toast show' + (type ? ` ${type}` : '');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

/* ===== CART OPEN/CLOSE ===== */
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== EVENTS ===== */
function bindEvents() {
  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGames();
  });

  document.getElementById('search-btn').addEventListener('click', () => {
    searchQuery = searchInput.value;
    renderGames();
  });

  // Filters
  categoryFilter.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    renderGames();
  });

  sortFilter.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderGames();
  });

  document.getElementById('clear-filters').addEventListener('click', () => {
    searchQuery = '';
    currentFilter = 'all';
    currentSort = 'featured';
    searchInput.value = '';
    categoryFilter.value = 'all';
    sortFilter.value = 'featured';
    renderGames();
  });

  // Games grid delegation
  gamesGrid.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add');
    const viewBtn = e.target.closest('.btn-view');
    const card = e.target.closest('.game-card');

    if (addBtn) {
      e.stopPropagation();
      addToCart(Number(addBtn.dataset.id));
      return;
    }

    if (viewBtn) {
      e.stopPropagation();
      openModal(Number(viewBtn.dataset.id));
      return;
    }

    if (card) {
      openModal(Number(card.dataset.id));
    }
  });

  // Cart toggle
  document.getElementById('cart-toggle').addEventListener('click', openCart);
  document.getElementById('close-cart').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Cart items delegation
  cartItemsEl.addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (!id) return;

    if (e.target.classList.contains('remove-item')) {
      removeFromCart(id);
    } else if (e.target.dataset.action === 'plus') {
      updateQty(id, 1);
    } else if (e.target.dataset.action === 'minus') {
      updateQty(id, -1);
    }
  });

  document.getElementById('clear-cart').addEventListener('click', clearCart);

  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) return;
    showToast('Checkout simulation – order placed! (Demo)', 'success');
    clearCart();
    closeCart();
  });

  // Modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalBody.addEventListener('click', (e) => {
    if (e.target.id === 'modal-close-btn') {
      closeModal();
    }
    if (e.target.dataset.add) {
      addToCart(Number(e.target.dataset.add));
      closeModal();
    }
  });

  // Navigation
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      const target = document.getElementById(section === 'home' ? 'home' : section === 'categories' ? 'games' : section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Update active nav
      document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
      if (link.classList.contains('nav-link')) {
        link.classList.add('active');
      }
      // Close mobile menu
      document.getElementById('main-nav').classList.remove('open');
    });
  });

  document.getElementById('browse-games-btn').addEventListener('click', () => {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('how-it-works-btn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  // Mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });
}
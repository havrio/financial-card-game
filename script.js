// Відкриття/закриття гамбургер-меню
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Дані ігор (можна потім замінити на реальні)
const games = [
  { title: "Гра 1", desc: "Цікава аркада з яскравою графікою." },
  { title: "Гра 2", desc: "Стратегія в реальному часі." },
  { title: "Гра 3", desc: "Гонки з реалістичним фізичним рушієм." },
  { title: "Гра 4", desc: "Платформер з головоломками." },
  { title: "Гра 5", desc: "Виживання на безлюдному острові." },
  { title: "Гра 6", desc: "Мультиплеєрний шутер." },
  { title: "Гра 7", desc: "Рольова гра з відкритим світом." },
  { title: "Гра 8", desc: "Симулятор ферми." },
  { title: "Гра 9", desc: "Головоломка на логіку." },
  { title: "Гра 10", desc: "Музична гра з ритмом." }
];

// Генеруємо карточки ігор
const gamesGrid = document.getElementById('gamesGrid');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';

  card.innerHTML = `
    <img src="https://via.placeholder.com/300x180/5e60ff/ffffff?text=${encodeURIComponent(game.title)}" alt="${game.title}">
    <div class="game-card-content">
      <h3>${game.title}</h3>
      <p>${game.desc}</p>
    </div>
  `;

  gamesGrid.appendChild(card);
});

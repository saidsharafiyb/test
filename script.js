// Максимальное здоровье
const maxHealth = 100;

// Текущее здоровье
let currentHealth = maxHealth; 

// Элементы интерфейса
const healthBarInner = document.getElementById('health-bar-inner');
const healthText = document.getElementById('health-text');

// Функция уменьшения здоровья
function decreaseHealth() {
  if (currentHealth > 0) {
    currentHealth -= 1; // Уменьшить здоровье
    updateHealthBar();
  }
}

// Функция увеличения здоровья
function heal() {
  if (currentHealth < maxHealth) {
    currentHealth += 5; // Увеличить здоровье
    if (currentHealth > maxHealth) {
      currentHealth = maxHealth; // Ограничить максимум
    }
    updateHealthBar();
  }
}

// Обновление полоски и текста здоровья
function updateHealthBar() {
  const healthPercentage = (currentHealth / maxHealth) * 100;
  healthBarInner.style.width = `${healthPercentage}%`;
  healthText.textContent = `HP: ${currentHealth}`;
}

// Таймер для уменьшения здоровья
setInterval(decreaseHealth, 1000);

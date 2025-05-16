const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const profileToggle = document.getElementById('profileToggle');
const profileMenu = document.querySelector('.profile-menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

profileToggle.addEventListener('click', function (e) {
  e.preventDefault();
  profileMenu.classList.toggle('open');
});

document.addEventListener('click', function (e) {
  if (!profileMenu.contains(e.target) && e.target !== profileToggle) {
    profileMenu.classList.remove('open');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".search-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Останавливаем стандартную отправку формы

    const input = form.querySelector("input");
    const select = form.querySelector("select");

    if (input.value.trim() === "" || select.value === "Выберите формат") {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Показываем сообщение об успехе
    const successMessage = document.createElement("p");
    successMessage.textContent = "Поиск психологов по вашему запросу...";
    successMessage.style.color = "#1b98f7";
    successMessage.style.marginTop = "1rem";

    // Удалим предыдущее сообщение, если есть
    const existingMessage = form.querySelector(".search-success");
    if (existingMessage) {
      existingMessage.remove();
    }

    successMessage.classList.add("search-success");
    form.appendChild(successMessage);
  });
});

const track = document.getElementById('carouselTrack');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let scrollAmount = 0;
const scrollStep = 300;

nextBtn.addEventListener('click', () => {
  if (scrollAmount + scrollStep >= track.scrollWidth - track.clientWidth) {
    scrollAmount = 0; // Сброс в начало
  } else {
    scrollAmount += scrollStep;
  }
  track.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  if (scrollAmount - scrollStep <= 0) {
    scrollAmount = track.scrollWidth - track.clientWidth; // В конец
  } else {
    scrollAmount -= scrollStep;
  }
  track.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = question.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");

      // Переключаем открытие/закрытие блока
      faqItem.classList.toggle("open");
    });
  });
});


function scrollToCars() {
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
}

function openForm(car) {
    const form = document.getElementById('rental-form');
    if (form) {
        document.getElementById('car').value = car;
        form.classList.add('show'); // добавляем класс для анимации
    }
}   

function closeForm() {
    const form = document.getElementById('rental-form');
    if (form) {
        form.classList.remove('show'); // убираем класс
        setTimeout(() => {
            form.style.display = 'none'; // скрываем после завершения анимации
        }, 300);
    }
}


document.getElementById('view-cars').addEventListener('click', scrollToCars);

document.querySelectorAll('.rent-button').forEach(button => {
    button.addEventListener('click', function() {
        openForm(this.dataset.car);
    });
});

document.querySelector('.close').addEventListener('click', closeForm);

function scrollToCars() {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
        carsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openForm(car) {
    const form = document.getElementById('rental-form');
    if (form) {
        document.getElementById('car').value = car;
        form.classList.add('show');
    }
}

function closeForm() {
    const form = document.getElementById('rental-form');
    if (form) {
        form.classList.remove('show');
    }
}



const viewCarsButton = document.getElementById('view-cars');
if (viewCarsButton) {
    viewCarsButton.addEventListener('click', scrollToCars);
}

document.querySelectorAll('.rent-button').forEach(button => {
    button.addEventListener('click', function() {
        openForm(this.dataset.car);
    });
});

const closeButton = document.querySelector('.close');
if (closeButton) {
    closeButton.addEventListener('click', closeForm);
}

document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.05; // чувствительность движения
        const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0px, 0px)';
    });
});

document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.05; // движение влево-вправо
        const y = (e.clientY - rect.top - rect.height / 2) * 0.05; // движение вверх-вниз
        
        card.style.transform = `translate(${x}px, ${y}px) scale(1.05)`; // увеличиваем + двигаем
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0px, 0px) scale(1)'; // возвращаем в исходное состояние
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("language-selector");

    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            function changeLanguage(lang) {
                if (!translations[lang]) return;
            
                document.querySelector(".hero h1").textContent = translations[lang]["hero_title"];
                document.querySelector(".hero p").textContent = translations[lang]["hero_text"];
                document.querySelector("#view-cars").textContent = translations[lang]["button_text"];
            
                document.getElementById("toggle-snow").textContent = translations[lang]["toggle_snow"];
                document.getElementById("snow-speed-value").textContent = `${document.getElementById("snow-speed").value} ${translations[lang]["snow_speed"]}`;
                
                // обновляем надписи "Больше" и "Меньше"
                document.querySelector(".snow-slider-container .snow-label:first-child").textContent = translations[lang]["more"];
                document.querySelector(".snow-slider-container .snow-label:last-child").textContent = translations[lang]["less"];
            
                localStorage.setItem("selectedLanguage", lang);
            

                const infoItems = document.querySelectorAll(".info-item");
                if (infoItems.length >= 3) {
                    infoItems[0].querySelector("h3").textContent = translations[lang]["delivery_title"];
                    infoItems[0].querySelector("p").textContent = translations[lang]["delivery_text"];
                    infoItems[1].querySelector("h3").textContent = translations[lang]["newcomer_title"];
                    infoItems[1].querySelector("p").textContent = translations[lang]["newcomer_text"];
                    infoItems[2].querySelector("h3").textContent = translations[lang]["flexible_title"];
                    infoItems[2].querySelector("p").textContent = translations[lang]["flexible_text"];
                }

                document.querySelector("#cars h2").textContent = translations[lang]["cars_section"];
                const carCards = document.querySelectorAll(".car-card");
                if (carCards.length >= 2) {
                    carCards[0].querySelector("h3").textContent = translations[lang]["car1_name"];
                    carCards[0].querySelector("p").textContent = translations[lang]["car1_desc"];
                    carCards[0].querySelector(".rent-button").textContent = translations[lang]["rent_button"];

                    carCards[1].querySelector("h3").textContent = translations[lang]["car2_name"];
                    carCards[1].querySelector("p").textContent = translations[lang]["car2_desc"];
                    carCards[1].querySelector(".rent-button").textContent = translations[lang]["rent_button"];
                }

                document.querySelector("#contact h2").textContent = translations[lang]["contact_section"];
                document.querySelector("#contact p:nth-of-type(1)").textContent = translations[lang]["phone"];
                document.querySelector("#contact p:nth-of-type(2)").textContent = translations[lang]["email"];
                document.querySelector("#contact button").textContent = translations[lang]["whatsapp_button"];

                document.querySelector(".modal-content h2").textContent = translations[lang]["rental_form_title"];
                document.querySelector("label[for='name']").textContent = translations[lang]["name_label"];
                document.querySelector("label[for='contact']").textContent = translations[lang]["contact_label"];
                document.querySelector("label[for='car']").textContent = translations[lang]["car_label"];
                document.querySelector("label[for='message']").textContent = translations[lang]["message_label"];
                document.querySelector(".modal-content button[type='submit']").textContent = translations[lang]["submit_button"];

                localStorage.setItem("selectedLanguage", lang);
            }

            const savedLang = localStorage.getItem("selectedLanguage") || "en";
            langSelector.value = savedLang;
            changeLanguage(savedLang);

            langSelector.addEventListener("change", (event) => {
                changeLanguage(event.target.value);
            });

            // Плавное скрытие прелоадера
            setTimeout(() => {
                document.body.classList.add("loaded");
            }, 500); // Добавили небольшую задержку
        })
        .catch(error => console.error("Ошибка загрузки переводов:", error));
});

const scrollUpButton = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
});

scrollUpButton.addEventListener('click', () => {
    scrollUpButton.classList.add('fly'); // запускаем анимацию
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // через 500мс (длительность анимации) убираем класс, чтобы кнопка вернулась
    setTimeout(() => {
        scrollUpButton.classList.remove('fly');
        scrollUpButton.classList.remove('show');
    }, 500);
});

let snowEnabled = false;
let snowInterval;
let snowFrequency = 700; // начальная частота

function createSnowflake() {
    if (!snowEnabled) return;

    const snowflake = document.createElement('img');
    snowflake.classList.add('snowflake');
    snowflake.src = 'images/snowflake.png'; // путь к изображению снежинки

    const size = Math.random() * 15 + 10; // размер 10-25px
    const startPos = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // падение 5-10 сек

    snowflake.style.left = `${startPos}px`;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

function startSnow() {
    if (snowInterval) clearInterval(snowInterval);
    snowInterval = setInterval(createSnowflake, snowFrequency);
}

document.getElementById('toggle-snow').addEventListener('click', function () {
    snowEnabled = !snowEnabled;
    const lang = localStorage.getItem("selectedLanguage") || "en"; // получаем текущий язык
    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            this.textContent = snowEnabled ? translations[lang]["toggle_snow_off"] : translations[lang]["toggle_snow"];
        });

    if (snowEnabled) {
        startSnow();
    } else {
        clearInterval(snowInterval);
    }
});


document.getElementById('snow-speed').addEventListener('input', function () {
    snowFrequency = this.value;
    document.getElementById('snow-speed-value').textContent = this.value;
    if (snowEnabled) startSnow();
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const logo = document.getElementById("logo");

    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark-theme");
        themeToggle.innerHTML = isDark ? "☀️" : "🌙";
    }

    function updateThemeWithLogo() {
        const isDark = document.body.classList.contains("dark-theme");
        if (logo) {
            logo.style.opacity = "0"; // Сначала делаем логотип прозрачным
            setTimeout(() => {
                logo.src = isDark ? "images/logo-dark.png" : "images/logo.png"; // Меняем изображение
                logo.style.opacity = "1"; // Плавно возвращаем
            }, 200);
        }
    }

    function applyThemeWithAnimation() {
        const isDark = !document.body.classList.contains("dark-theme");
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeButton();
        updateThemeWithLogo();
    }

    // Загружаем тему при старте
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
    
    updateThemeButton();
    updateThemeWithLogo(); // Убеждаемся, что логотип загружается правильно

    themeToggle.addEventListener("click", applyThemeWithAnimation);
});


function updateThemeWithLogo() {
    const isDark = document.body.classList.contains("dark-theme");
    const logo = document.getElementById("logo");

    if (logo) {
        // устанавливаем правильный логотип в зависимости от темы
        logo.src = isDark ? "images/logo-dark.png" : "images/logo.png";
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeButton();
}

function applyThemeWithAnimation() {
    const isDark = !document.body.classList.contains("dark-theme");
    document.body.classList.toggle("dark-theme");
    updateThemeWithLogo();
}

// загружаем тему при старте
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    updateThemeWithLogo();

    document.getElementById("theme-toggle").addEventListener("click", applyThemeWithAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const carAvailability = {
        "Toyota Prius": true,  // true - доступно, false - занято
        "Honda Civic 2010": true
    };

    document.querySelectorAll(".availability-indicator").forEach(indicator => {
        const carName = indicator.getAttribute("data-car");
        if (carAvailability[carName]) {
            indicator.style.backgroundColor = "green";
            indicator.classList.add("green"); // добавляем анимацию
        } else {
            indicator.style.backgroundColor = "red";
            indicator.classList.remove("green"); // убираем анимацию
        }
    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    const snowControls = document.getElementById("snow-controls");
    const snowflakeIcon = document.getElementById("snowflake-icon");
    const closeSnow = document.getElementById("close-snow");

    closeSnow.addEventListener("click", function () {
        snowControls.style.display = "none";
        snowflakeIcon.style.display = "block"; // показываем снежинку
    });

    snowflakeIcon.addEventListener("click", function () {
        snowControls.style.display = "flex";
        snowflakeIcon.style.display = "none"; // скрываем снежинку
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".image-slider").forEach(slider => {
        let images = slider.querySelectorAll("img");
        let prevButton = slider.querySelector(".prev");
        let nextButton = slider.querySelector(".next");
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
        }

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);

        // Lightbox логика
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxCounter = document.getElementById("lightbox-counter");
        const closeLightbox = document.querySelector(".close-lightbox");
        const lightboxPrev = document.querySelector(".lightbox-prev");
        const lightboxNext = document.querySelector(".lightbox-next");

        let lightboxImages = [];
        let lightboxIndex = 0;

        images.forEach((img, index) => {
            img.addEventListener("click", function () {
                // Запоминаем только фото из текущего слайдера!
                lightboxImages = Array.from(slider.querySelectorAll("img"));
                lightboxIndex = index;
                lightboxImg.src = lightboxImages[lightboxIndex].src;

                lightbox.style.display = "flex";

                requestAnimationFrame(() => {
                    lightbox.classList.add("show");
                });

                updateCounter();
            });
        });

        function showLightboxImage(index) {
            lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
            lightboxImg.src = lightboxImages[lightboxIndex].src;
            updateCounter();
        }

        function updateCounter() {
            lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
        }

        lightboxPrev.addEventListener("click", function () {
            showLightboxImage(lightboxIndex - 1);
        });

        lightboxNext.addEventListener("click", function () {
            showLightboxImage(lightboxIndex + 1);
        });

        function closeLightboxFunc() {
            lightbox.classList.remove("show");
            setTimeout(() => {
                lightbox.style.display = "none";
            }, 300);
        }

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox || e.target === lightboxImg) {
                closeLightboxFunc();
            }
        });

        closeLightbox.addEventListener("click", closeLightboxFunc);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rotateWarning = document.getElementById("rotate-warning");

    async function loadTranslations() {
        try {
            const response = await fetch("translations.json");
            const translations = await response.json();
            return translations;
        } catch (error) {
            console.error("Ошибка загрузки translations.json", error);
            return null;
        }
    }

    async function updateRotateMessage() {
        const translations = await loadTranslations();
        if (!translations) return;

        const lang = document.documentElement.lang || "ru";
        rotateWarning.textContent = translations[lang]?.rotate_message || translations["ru"].rotate_message;
    }

    updateRotateMessage();
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("rental-form");
    const closeModal = document.querySelector(".modal .close");
    const rentButtons = document.querySelectorAll(".rent-button");
    const carInput = document.getElementById("car");
    const form = document.querySelector(".modal-content form");
    const successPopup = document.getElementById("success-popup");
    const sendButton = form.querySelector("button[type='submit']");

    rentButtons.forEach(button => {
        button.addEventListener("click", function() {
            carInput.value = this.getAttribute("data-car");
            modal.classList.add("show");
        });
    });

    closeModal.addEventListener("click", function() {
        modal.classList.remove("show");
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        sendButton.disabled = true;  // блокируем кнопку
        sendButton.classList.add("loading"); // добавляем спиннер
        sendButton.innerHTML = "Отправка..."; // меняем текст

        const name = document.getElementById("name").value;
        const contact = document.getElementById("contact").value;
        const car = document.getElementById("car").value;
        const message = document.getElementById("message").value;

        const formData = new FormData();
        formData.append("_subject", "Новая заявка на аренду");
        formData.append("Имя", name);
        formData.append("Контакты", contact);
        formData.append("Выбранное авто", car);
        formData.append("Комментарий", message);

        fetch("https://formsubmit.co/kornillit555@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                successPopup.classList.add("show");

                setTimeout(() => {
                    successPopup.classList.add("hide");
                }, 3000);

                setTimeout(() => {
                    successPopup.classList.remove("show", "hide");
                    sendButton.disabled = false;  // снова активируем кнопку
                    sendButton.classList.remove("loading"); // убираем спиннер
                    sendButton.innerHTML = "Send"; // возвращаем текст
                }, 3500);

                modal.classList.remove("show");
                form.reset();
            } else {
                alert("Ошибка при отправке заявки.");
                sendButton.disabled = false;
                sendButton.classList.remove("loading");
                sendButton.innerHTML = "Send";
            }
        })
        .catch(error => {
            console.error("Ошибка при отправке:", error);
            alert("Ошибка при отправке заявки. Попробуйте позже.");
            sendButton.disabled = false;
            sendButton.classList.remove("loading");
            sendButton.innerHTML = "Send";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let snowflake = document.getElementById("snowflake-icon");
    let sound = document.getElementById("new-year-sound");

    sound.volume = 0.05; // установи громкость (0.3 = 30% от максимума)

    snowflake.addEventListener("mouseenter", function() {
        sound.currentTime = 0; // перезапуск звука
        sound.play();
    });
});

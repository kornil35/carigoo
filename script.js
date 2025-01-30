function scrollToCars() {
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
}

function openForm(car) {
    document.getElementById('car').value = car;
    document.getElementById('rental-form').style.display = 'flex';
}

function closeForm() {
    document.getElementById('rental-form').style.display = 'none';
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
        form.style.display = 'flex';
    }
}

function closeForm() {
    const form = document.getElementById('rental-form');
    if (form) {
        form.style.display = 'none';
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

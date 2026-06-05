const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const userInfo = document.getElementById("userInfo");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();

    if (name === "") {
        alert("Пожалуйста, введите имя");
        nameInput.focus();
        return;
    }

    if (age === "") {
        alert("Пожалуйста, введите возраст");
        ageInput.focus();
        return;
    }

    if (isNaN(age) || age <= 0 || age > 120) {
        alert("Пожалуйста, введите корректный возраст (от 1 до 120)");
        ageInput.value = "";
        ageInput.focus();
        return;
    }

    if (city === "") {
        alert("Пожалуйста, введите город");
        cityInput.focus();
        return;
    }

    if (hobby === "") {
        alert("Пожалуйста, введите хобби");
        hobbyInput.focus();
        return;
    }

    userInfo.innerHTML = `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Город:</strong> ${city}</p>
        <p><strong>Хобби:</strong> ${hobby}</p>
    `;
});

clearBtn.addEventListener("click", () => {
    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";
    userInfo.innerHTML = "";
    nameInput.focus();
});

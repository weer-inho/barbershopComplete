var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var close = document.querySelector(".modal-close");
var login = document.querySelector("[name=login]");
var storage = localStorage.getItem("login");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

// открой попап если нажали на вход
link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

// кнопка закрытия
close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

// если в форме отсутствуют логин или пароль
// то отмени дефол действие и выведи в консоль
form.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {						
			localStorage.setItem("login", login.value);
		}
	}
});

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
})


mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
})
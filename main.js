let menu = document.querySelector(".navlist");
let toggle = document.querySelector(".toggle");
let close = document.querySelector(".nav-close");
toggle.addEventListener("click", () => {
	menu.classList.toggle("show");
});
close.addEventListener("click", () => {
	menu.classList.remove("show");
});
//heloo world
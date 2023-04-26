document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const navbar = document.querySelector("#navbarNavAltMarkup");
	const navLinks = document.querySelectorAll(".nav-link");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	navLinks.forEach((link) =>
		link.addEventListener("click", () => navbar.classList.remove("show"))
	);

	window.addEventListener("scroll", addShadow);
});

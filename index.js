

const ul = document.querySelector('#menu');
function func() {
    ul.classList.toggle("mobile");
}
function hide() {
    ul.classList.remove("mobile");
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 375.998) {
        if (ul.classList.contains("mobile")) {
            ul.classList.remove("mobile");
        }
    }
});
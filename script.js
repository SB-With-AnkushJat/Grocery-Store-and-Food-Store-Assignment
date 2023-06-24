console.log (`@Anku_Choudhary`);

const btn_what = document.querySelector(".btn-what");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".price-product-box");

btn_what.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((currentElement) => {
        currentElement.classList.remove("p-btn-active")
    });
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currentElement) => {
        currentElement.classList.add("p-image-not-active")
    });
    img_active.forEach((currentElement) => {
        currentElement.classList.remove("p-image-not-active")
    });

});

const herosection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

footerElem.after(scrollElement);

const scrollTop = (() => {
    herosection.scrollIntoView({ behavior: "smooth" });
});

scrollElement.addEventListener("click", scrollTop);

const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerEle = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
    headerEle.classList.toggle("active")
});







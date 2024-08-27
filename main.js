const faqs = document.querySelectorAll(".actions");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.parentNode.classList.toggle("focus");
    })
});
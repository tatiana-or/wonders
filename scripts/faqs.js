document.addEventListener("DOMContentLoaded", function () {
    const faqSurfaces = document.querySelectorAll(".faq-surface");

    faqSurfaces.forEach((surface) => {
        surface.addEventListener("click", function () {
            toggleFAQ(this);
        });

        //Управление с клавиатуры
        surface.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleFAQ(this);
            }
        });
    });

    function toggleFAQ(surface) {
        const isExpanded = surface.classList.contains("expanded");
        const icon = surface.querySelector(".expand-icon");
        const faqText = surface.querySelector(".faq-text");

        if (isExpanded) {
            // Закрыть
            surface.classList.remove("expanded");
            surface.classList.add("collapsed");
            surface.setAttribute("aria-expanded", "false");
            icon.setAttribute("src", "img/plus.png");

            // плавный переход
            faqText.style.maxHeight = faqText.scrollHeight + "px";
            faqText.offsetHeight; // Trigger reflow
            faqText.style.maxHeight = "0px";
            faqText.style.paddingTop = "0px";
            faqText.style.paddingBottom = "0px";

        } else {
            // Открыть
            surface.classList.remove("collapsed");
            surface.classList.add("expanded");
            surface.setAttribute("aria-expanded", "true");
            icon.setAttribute("src", "img/xmark.png");

            // плавный переход
            faqText.style.maxHeight = faqText.scrollHeight + "px";
            faqText.style.paddingTop = "16px";
            faqText.style.paddingBottom = "16px";

            // Удаление max-height
            setTimeout(() => {
                if (surface.classList.contains("expanded")) {
                    faqText.style.maxHeight = "none";
                }
            }, 300);
        }
    }
});
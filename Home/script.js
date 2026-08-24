document.addEventListener("DOMContentLoaded", function () {

    // ================= NAVIGATION =================
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    // ================= CALCULATOR CARDS =================
    const calculatorCards =
        document.querySelectorAll(".calculator-card");

    calculatorCards.forEach(card => {

        card.addEventListener("click", function (event) {

            // Don't interfere with the button itself
            if (event.target.closest(".card-button")) {
                return;
            }

            const button = this.querySelector(".card-button");

            if (button) {
                window.location.href = button.href;
            }
        });
    });
});
//remove access
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});
// هذه لازم تكون خارج DOMContentLoaded
function filterDest(type) {
    if (type === "all") {
        displayData(allData);
    } else {
        const filtered = allData.filter(d => d.type === type);
        displayData(filtered);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("toggleInfo");
    const historySection = document.getElementById("history");

    if (button && historySection) {
        button.addEventListener("click", () => {
            historySection.classList.toggle("hidden");
            button.textContent =
                historySection.classList.contains("hidden")
                ? "عرض معلومات إضافية"
                : "إخفاء المعلومات";
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light");
        });
    }
});


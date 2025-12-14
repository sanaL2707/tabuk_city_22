/* =========================
   FILTER (Destinations)
   لازم تكون GLOBAL
========================= */
function filterDest(type) {
    if (type === "all") {
        displayData(allData);
    } else {
        const filtered = allData.filter(d => d.type === type);
        displayData(filtered);
    }
}

/* =========================
   DOM INTERACTIONS
========================= */
document.addEventListener("DOMContentLoaded", () => {

    /* Toggle history section (zaita page only) */
    const toggleBtn = document.getElementById("toggleInfo");
    const historySection = document.getElementById("history");

    if (toggleBtn && historySection) {
        toggleBtn.addEventListener("click", () => {
            historySection.classList.toggle("hidden");
            toggleBtn.textContent =
                historySection.classList.contains("hidden")
                ? "عرض معلومات إضافية"
                : "إخفاء المعلومات";
        });
    }

});

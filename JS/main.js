
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    
    if (themeBtn) {
        // تحقق إذا كنا في صفحة نيوم (لأن خلفيتها فاتحة أصلاً)
        const isNeomPage = window.location.pathname.includes("neom") || 
                          document.querySelector(".neom-header, .neom-main");
        
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light");
            
            // إذا كانت صفحة نيوم، أضف كلاس خاص لها
            if (isNeomPage) {
                document.body.classList.toggle("neom-dark");
            }
        });
        
        // وضع النص المناسب على الزر بناءً على الصفحة
        if (isNeomPage) {
            themeBtn.textContent = "🌙 / ☀";  // لأن الصفحة فاتحة أصلاً
        } else {
            themeBtn.textContent = "☀ / 🌙";  // الصفحات الأخرى داكنة
        }
    }
});
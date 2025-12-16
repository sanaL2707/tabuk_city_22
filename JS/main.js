
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    
    if (themeBtn) {
        
        const isNeomPage = window.location.pathname.includes("neom") || 
                          document.querySelector(".neom-header, .neom-main");
        
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light");
            
           
            if (isNeomPage) {
                document.body.classList.toggle("neom-dark");
            }
        });
        
        
        if (isNeomPage) {
            themeBtn.textContent = "🌙 / ☀"; 
        } else {
            themeBtn.textContent = "☀ / 🌙";  
      }
    }
});
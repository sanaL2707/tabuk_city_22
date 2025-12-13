document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    if (!name || !email || !msg) {
        alert("يرجى تعبئة جميع الحقول");
        return;
    }

    if (!email.includes("@")) {
        alert("هذا البريد غير صالح");
        return;
    }

    document.getElementById("status").innerHTML = "تم إرسال الرسالة بنجاح ✓";
});



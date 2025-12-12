document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    if (name === "" || email === "" || msg === "") {
        alert("الرجاء تعبئة جميع الحقول");
        return;
    }

    if (!email.includes("@")) {
        alert("البريد الإلكتروني غير صالح");
        return;
    }

    document.getElementById("status").innerHTML = "تم إرسال رسالتك بنجاح ✓";
});



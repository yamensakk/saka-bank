document.addEventListener("DOMContentLoaded", function() {
    // التعامل مع الضغط على "الرئيسية" وعرض أسعار العملات
    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        let content = document.getElementById("mainContent");
        content.innerHTML = `
            <h2>أسعار العملات اليوم 💲</h2>
            <table border="1">
                <tr>
                    <th>العملة</th>
                    <th>السعر مقابل الدولار</th>
                </tr>
                <tr>
                    <td>💵 الدولار الأمريكي</td>
                    <td>1.00</td>
                </tr>
                <tr>
                    <td>💶 اليورو</td>
                    <td>1.10</td>
                </tr>
                <tr>
                    <td>🇸🇾 الليرة السورية</td>
                    <td>15000.00</td>
                </tr>
            </table>
        `;
    });

    // التعامل مع الضغط على "الخدمات" وعرض قائمة الخدمات المصرفية
    document.getElementById("services").addEventListener("click", function(event) {
        event.preventDefault();
        let content = document.getElementById("mainContent");
        content.innerHTML = `
            <h2>خدمات بنك Saka 🏦</h2>
            <ul>
                <li>💳 فتح حساب جديد بسهولة عبر الإنترنت.</li>
                <li>💰 إدارة الحسابات، الودائع والتحويلات البنكية.</li>
                <li>📈 طلب القروض ومتابعة الاستثمارات المصرفية.</li>
                <li>🏦 خدمة تحويل الأموال داخليًا ودوليًا.</li>
                <li>🔐 تحديثات الأمان لحماية حسابك.</li>
            </ul>
        `;
    });

    // التأكد من تشغيل دالة تسجيل الدخول عند تقديم النموذج
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            login();
        });
    }
});

// دالة تسجيل الدخول
function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
        alert("🚀 تم تسجيل الدخول بنجاح!");

        // الانتقال إلى صفحة المشتركين بعد تسجيل الدخول
        window.location.href = "members.html";
    } else {
        document.getElementById("errorMessage").textContent = "❌ اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
}

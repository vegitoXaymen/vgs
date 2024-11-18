// عرض تفاصيل المقال عند الضغط على "المزيد"
const articles = document.querySelectorAll('.article');

articles.forEach(article => {
    const readMoreButton = article.querySelector('.read-more');
    const fullContent = article.querySelector('.article-full-content');
    const applyButton = article.querySelector('.apply-button'); // زر التقديم

    // إخفاء المحتوى الكامل في البداية
    fullContent.style.display = 'none';

    readMoreButton.addEventListener('click', function() {
        if (fullContent.style.display === 'none') {
            fullContent.style.display = 'block';
            readMoreButton.textContent = ' Hide details';
        } else {
            fullContent.style.display = 'none';
            readMoreButton.textContent = 'More details';
        }
    });

    // فتح نموذج التقديم عند الضغط على "التقديم على الوظيفة"
    applyButton.addEventListener('click', () => {
        const applicationFormContainer = document.getElementById('applicationForm');
        applicationFormContainer.style.display = 'flex'; // عرض الحاوية
        setTimeout(() => {
            applicationFormContainer.querySelector('.application-form').style.opacity = '1'; // إظهار النموذج
            applicationFormContainer.querySelector('.application-form').style.transform = 'scale(1)'; // تكبير الحجم التدريجي
        }, 10); // تأخير بسيط لتفعيل التحريك
    });
});

// إغلاق نموذج التقديم عند الضغط على "إلغاء"
document.getElementById('cancelButton').addEventListener('click', () => {
    const applicationFormContainer = document.getElementById('applicationForm');
    const applicationForm = applicationFormContainer.querySelector('.application-form');

    applicationForm.style.opacity = '0'; // إخفاء النموذج تدريجياً
    applicationForm.style.transform = 'scale(0.9)'; // تصغير الحجم
    setTimeout(() => {
        applicationFormContainer.style.display = 'none'; // إخفاء الحاوية بالكامل
    }, 300); // مطابقة وقت تأثير CSS
});

// إرسال الطلب عند الضغط على "إرسال الطلب"
document.querySelector('.form-buttons button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault(); // منع إرسال النموذج الافتراضي
    showSuccessMessage(); // عرض رسالة النجاح

    // إغلاق نموذج التقديم بعد الإرسال
    const applicationFormContainer = document.getElementById('applicationForm');
    const applicationForm = applicationFormContainer.querySelector('.application-form');

    applicationForm.style.opacity = '0'; // إخفاء النموذج تدريجياً
    applicationForm.style.transform = 'scale(0.9)'; // تصغير الحجم
    setTimeout(() => {
        applicationFormContainer.style.display = 'none'; // إخفاء الحاوية بالكامل
    }, 300); // مطابقة وقت تأثير CSS
});

// عرض رسالة النجاح بعد الإرسال
function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("show"); // إضافة فئة "show" لعرض الرسالة

    // إخفاء رسالة النجاح بعد 3 ثوانٍ
    setTimeout(() => {
        successMessage.classList.remove("show"); // إزالة الفئة لإخفاء الرسالة
    }, 4000); // 3 ثوانٍ
}

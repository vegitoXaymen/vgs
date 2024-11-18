const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// تقديم الملفات الثابتة
app.use(express.static(path.join(__dirname, "public")));

// التوجيه لصفحة تسجيل الدخول
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// التوجيه لصفحة المقالات
app.get("/articles", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "articles.html"));
});

// بدء السيرفر
app.listen(PORT, () => {
    console.log(`السيرفر يعمل على http://localhost:${PORT}`);
});

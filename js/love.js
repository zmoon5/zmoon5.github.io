// love.js

// 更新恋爱天数
function updateLoveDuration(startDate) {
    var now = new Date(); // 获取当前日期时间
    var start = new Date(startDate); // 获取开始日期时间
    var days = Math.floor((now - start) / (1000 * 60 * 60 * 24)); // 计算距今的天数
    document.getElementById("love-duration").innerHTML = "我们已经相恋了 " + days + " 天！"; // 更新显示内容
}

// 获取上次登录时间
function getLastLoginDate() {
    var lastLogin = localStorage.getItem("lastLogin");
    if (lastLogin) {
        return new Date(lastLogin);
    } else {
        return null;
    }
}

// 保存当前登录时间
function saveLoginDate() {
    var now = new Date();
    localStorage.setItem("lastLogin", now);
}

// 用户登录时更新恋爱天数
function userLogin() {
    updateLoveDuration("2022-11-08"); // 这里的日期应该是你们开始恋爱的日期
    saveLoginDate();
}

// 页面加载完成时执行初始化操作
window.onload = function() {
    userLogin(); // 页面加载完成时，执行用户登录操作
};

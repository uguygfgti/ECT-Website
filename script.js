// รอให้เว็บโหลดเสร็จ แล้วซ่อน loader
window.addEventListener("load", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.opacity = "0";
    setTimeout(() => {
        loaderWrapper.style.display = "none";
    }, 500); // ให้ค่อยๆจางหาย
});

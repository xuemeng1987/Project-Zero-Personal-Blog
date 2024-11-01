document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    function updateImage(newImagePath) {
        const updateImageElement = document.querySelector(".update-image");
        if (updateImageElement) {
            updateImageElement.src = newImagePath;
        } else {
            console.error("找不到更新示例圖片的元素！");
        }
    }

    function loadMoreUpdates() {
        alert("目前沒有更多更新內容！");
    }

    function changeToGif() {
        updateImage('images/update-image.gif');
    }

    const gifButton = document.querySelector("button");
    if (gifButton) {
        gifButton.addEventListener("click", changeToGif);
    } else {
        console.error("找不到觸發更換圖片的按鈕！");
    }
});
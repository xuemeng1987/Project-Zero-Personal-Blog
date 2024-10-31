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

document.querySelector("button").addEventListener("click", changeToGif);

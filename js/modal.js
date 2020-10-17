var modal_item = document.getElementById("modal-item");
var grid_item = document.getElementById("grid-item");
var grid_item_image = document.getElementsByClassName("grid-item-image");
var grid_item_title = document.getElementsByClassName("grid-item-title");
var modal_image = document.getElementById("modal-image");
var modal_desc = document.getElementById("modal-desc");

var close_modal = document.getElementById("close-modal");
close_modal.onclick = function () {
    modal_item.style.display = "none";
}

var showModal = function () {
    modal_item.style.display = "block";
    modal_image.src = this.src;
    modal_desc.innerHTML = this.alt;
}

for (var i = 0; i < grid_item_image.length; i++) {
    grid_item_image[i].addEventListener("click", showModal);
    grid_item_title[i].innerHTML = grid_item_image[i].alt
}


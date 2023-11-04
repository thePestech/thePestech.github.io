const selector = document.getElementById("selector");
const menu_items = document.getElementsByClassName("menu_items");

function select(id, pos){
    selector.style.left = pos;

    const selected = document.querySelector(".selected");
    selected.classList.remove("selected");

    const txt = document.querySelector(`#${id}`);
    txt.classList.add("selected");
}
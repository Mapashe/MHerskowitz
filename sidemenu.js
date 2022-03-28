function OCNav() {
    var nav = document.getElementById("plegable");
    var estado = nav.style.height;

    if (estado <= "0px") {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    document.getElementById("plegable").style.height = "100%";
    var items = document.getElementsByClassName("desp");
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        item.style.height = "100%";
        item.style.padding = "2% 10%";
        item.style.margin = "1% 0%";
        item.style.fontSize = "2rem";
    }
}

function closeNav() {
    document.getElementById("plegable").style.height = "0%";
    var items = document.getElementsByClassName("desp");
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        item.style.height = "0px";
        item.style.padding = "0%";
        item.style.margin = "0%";
        item.style.fontSize = "0";
    }
}

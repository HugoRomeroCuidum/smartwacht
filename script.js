let darkmode =document.querySelector('#darkmode');

darkmode.onclick =() => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon' , 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');

    
    }
}


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
};

window.conscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}



document.addEventListener("DOMContentLoaded", function() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    img1.addEventListener("click", function() {
        cambiarImagen("main1.png");
    });

    img2.addEventListener("click", function() {
        cambiarImagen("main2.png");
    });

    img3.addEventListener("click", function() {
        cambiarImagen("main1.png");
    });

    function cambiarImagen(nuevaImagen) {
        var img4 = document.getElementById("img4");
        img4.src = nuevaImagen;
    }
});

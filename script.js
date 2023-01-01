function navbg(){
    var navbar =document.getElementById('navbar');
    var srl = window.scrollY;
    if(srl < 530){
        navbar.classList.remove("bgcolor");
    }
    else{
        navbar.classList.add("bgcolor");
    }
}

window.addEventListener('scroll',navbg);
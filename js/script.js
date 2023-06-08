let nav = document.querySelector("nav");

window.onscroll = () =>{
    if(window.scrollY > 70){
       nav.classList.add("fixed");
       nav.classList.add("shadow-2xl");
    }
    else{   
        nav.classList.remove("fixed");
        nav.classList.remove("shadow-2xl");
    }
}
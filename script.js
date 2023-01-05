









var typed = new Typed(".typing", {
    strings : ["غسيل خزانات", "مكافحة حشرات", "تسليك المجارى", "تنظيفات عامه", "مقاولات عامه"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})


menuBtn = document.querySelector(".menu-btn"),
menu = document.querySelector(".menu"),
navbar = document.querySelector("nav"),
scrollBtn = document.querySelector(".scrollBtn"),
video = document.querySelector(".offers .offers-content .column video")




window.addEventListener("scroll", ()=>{
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    
    else{
        navbar.classList.remove("sticky");
    }
    
    if(window.scrollY > 500){
        scrollBtn.classList.add("active");
    }
    else{
        scrollBtn.classList.remove("active");
    }
    
    if(window.scrollY > 600){
        vidio.play();
    }
    
})


scrollBtn.addEventListener("click", ()=>{
    scrollTo({
        top : 0,
        behavior : "smooth"
    })
})





menuBtn.addEventListener("click", ()=>{

    menu.classList.toggle("active")
    
    if(navbar.classList.contains("sticky")){
    
    navbar.classList.remove("sticky")
    
    }
    
    if(menuBtn.children[0].classList[1] === "fa-bars"){
        
        menuBtn.innerHTML = `<i class="fas fa-times"></i>`
        
    }
    
    else if(menuBtn.children[0].classList[1] == "fa-times"){
        
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
        
    }
})


//Link Sections
let sections = document.querySelectorAll("section"),
    links = document.querySelectorAll("nav ul.menu li");
    
links.forEach(link =>{
    link.addEventListener("click", ()=>{
        document.querySelector("nav ul.menu").classList.remove("active");
        
        if(menuBtn.children[0].classList[1] === "fa-bars"){
        
            menuBtn.innerHTML = `<i class="fas fa-times"></i>`
            
        }
        
        else if(menuBtn.children[0].classList[1] == "fa-times"){
            
            menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
            
        }
        
        let target = link.dataset.arrive;
        sections.forEach(section =>{
            if(section.classList.contains(target)){
                section.scrollIntoView({
                    behavior : "smooth"
                })
            }
        })
    })
})

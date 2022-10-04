const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const header = document.getElementById('navul')
const btn = document.getElementsByClassName('li');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active','');
        this.className += ' active';
    })
}
document.addEventListener("DOMContentLoaded",()=>{


    const mob_ham = document.querySelector("nav .nav_container .mob_ham");
    const ham_dot = document.querySelectorAll("nav .nav_container .mob_ham div");
    const mob_nav_link = document.querySelector("nav .nav_container .mob_nav_links");

    mob_ham.addEventListener("click",()=>{
        mob_ham.classList.toggle("open");
        mob_nav_link.classList.toggle("open");
        ham_dot.forEach((ham) => {
            ham.classList.toggle("open");
        })
    })
})
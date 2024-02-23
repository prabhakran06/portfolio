/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('navclose')
      navLink = document.getElementById('navlink')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navLink) {
    navLink.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skillsactive')
            })

            target.classList.add('skillsactive')


            tabs.forEach(tab => {
                tab.classList.remove('skillsactive')
            })

            tab.classList.add('skillsactive')
        })
     })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.workcontainer', {
    selectors: {
        target: '.workcard'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkwork = document.querySelectorAll('.workitems')

function activeWork(){
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}


linkwork.forEach(l=> l.addEventListener("click", activeWork))



/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("workbutton")) {
        togglePortfolioPopup();
        portfolioitemdetails(e.target.parentElement);

    }
}) 

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioitemdetails(portfolioItem) {
    document.querySelector(".ppthumbnail img").src = portfolioItem.querySelector(".workimg").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".worktitle").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.servives_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalclick) {
    modalViews[modalclick].classList.add('active-modal')    
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
}
)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")
window.addEventListener("scroll", navHighlighter);
function navHighlighter()
{
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}
/*
let sections = document.querySelectorAll(".section[id]");
let navLinks = document.querySelectorAll(".navmenu a");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active-link");
                document.querySelector('.navmenu a[href*=' + id + ']').classList.add("active-link");
            });
        };
    });
}
*/







/*=============== SHOW SCROLL UP ===============*/

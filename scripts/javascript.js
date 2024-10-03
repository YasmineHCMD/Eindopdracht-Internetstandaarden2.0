console.log("Hello world!")

const promo_knop = document.getElementById("socialmedia_knop");
const promo_menu = document.getElementById("socialmedia_promo");

let stateMenu = false;

function menuToggle(){
    if(stateMenu == false){
        promo_menu.style.display = 'flex';
        stateMenu=true;
        promo_knop.textContent = 'Verberg ons promotiemateriaal via social media v';
    } else {
        promo_menu.style.display = 'none';
        stateMenu=false;
        promo_knop.textContent = 'Toon ons promotiemateriaal via social media ^'
    }
}

promo_knop.addEventListener('click',menuToggle);
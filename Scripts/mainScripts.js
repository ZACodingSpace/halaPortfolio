
//////////////////// Nav Section Start /////////////////////
let menu = document.querySelector(".menu");
let menu_icon = document.querySelector(".menu-icon");

menu_icon.addEventListener("click", ()=>{

    menu.classList.toggle("opened-menu");
})
//////////////////// Nav Section End /////////////////////

//////////////////// About Section Start /////////////////////
let tap_names = document.querySelectorAll(".tap-name");
let tap_contents = document.querySelectorAll(".tap-content");

function aboutTaps() {
    tap_names.forEach(tap => {
        tap.addEventListener("click", () => {

            tap_names.forEach(unclickedTap => {
                unclickedTap.classList.remove("clicked-tap");
            })

            tap.classList.add("clicked-tap")
            
            tap_contents.forEach(tap_content => {
                tap_content.classList.remove("clicked-tap-content");
            })
            
            let tap_type = tap.id;
            switch (tap_type) {
                case "informationTap":
                    tap_contents[0].classList.add("clicked-tap-content");
                    break;
                case "experiencesTap":
                    tap_contents[1].classList.add("clicked-tap-content");
                    break;
                case "certificationsTap":
                    tap_contents[2].classList.add("clicked-tap-content");
                    break;
            }
        })
    })
}

aboutTaps();
//////////////////// About Section End /////////////////////


//////////////////// Protfolio Section Start /////////////////////
//////////////////// Home Page /////////////////////

let cards = document.querySelectorAll(".portfolio-card");
let count = 1;

function showImg() {

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {

            let cardType = card.querySelector(".inside").getAttribute("content-type");
            switch (cardType) {

                case "certificate":
                    checkIfImageExists(`Images/Portfolio/certificate${count}.jpg`, card, "certificate");
                    break;

                case "cv":
                    checkIfImageExists(`Images/Portfolio/cv${count}.jpg`, card, "cv");
                    break;

                case "powerpoint":
                    checkIfImageExists(`Images/Portfolio/powerpoint${count}.jpg`, card, "powerpoint");
                    break;

                case "infographic":
                    checkIfImageExists(`Images/Portfolio/infographic${count}.jpg`, card, "infographic");
                    break;

                case "interactivePowerpoint":
                    checkIfImageExists(`Images/Portfolio/interactivePowerpoint${count}.jpg`, card, "interactivePowerpoint");
                    break;
            }
        })
    });
}

function checkIfImageExists(url, card, type) {
    const img = new Image();
    img.src = url;

    img.addEventListener("load", () => {
        card.querySelector(".inside").innerHTML = `<img src="Images/Portfolio/${type}${count}.jpg" alt="">`;
        count++;
    })
    img.addEventListener("error", () => {
        card.querySelector(".inside").innerHTML = `<img src="Images/Portfolio/${type}1.jpg" alt="">`;
        count = 1;
    })
}

showImg();

function redirectTo() {

    cards.forEach(card => {
        card.addEventListener("click", () => {
            localStorage.setItem("card_Type", card.id);
            localStorage.setItem("num_of_imgs", card.getAttribute('num-of-imgs'));
            window.location.href = "portfolio.html";
        });
    });
}

redirectTo();

//////////////////// Protfolio Section End /////////////////////


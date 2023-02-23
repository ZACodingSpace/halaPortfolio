
//////////////////// Nav Section Start /////////////////////
let nav_element_container = document.querySelector("#navContainer");

if (document.documentElement.scrollWidth > document.documentElement.clientWidth) {
    nav_element_container.classList.add("small");
}

function resizingScreen() {
    let screen_width = window.innerWidth;

    window.addEventListener("resize", () => {
        let new_screen_width = window.innerWidth;

        //Decrease
        if (screen_width > new_screen_width) {
            if (document.documentElement.scrollWidth > document.documentElement.clientWidth) {
                nav_element_container.classList.add("small");
            }
        } //Increase 
        else {
            nav_element_container.classList.remove("small");
            if (document.documentElement.scrollWidth > document.documentElement.clientWidth) {
                nav_element_container.classList.add("small");
            }
        }
        screen_width = window.innerWidth;
    })
}

resizingScreen();

let menu = document.querySelector(".menu");
let menu_icon = document.querySelector(".menu-icon");

menu_icon.addEventListener("click", () => {

    menu.classList.toggle("opened-menu");
})
//////////////////// Nav Section End /////////////////////

//////////////////// About Section Start /////////////////////
let tap_names = document.querySelectorAll(".tap-name");
let tap_contents = document.querySelectorAll(".tap-content");
let taps_stamp_container = document.querySelector(".taps-stamp-container");

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
            taps_stamp_container.classList.remove("appear");
            setTimeout(() => {
                taps_stamp_container.classList.add("appear");
            }, 100)
        })
    })
}

aboutTaps();
//////////////////// About Section End /////////////////////


//////////////////// Protfolio Section Start /////////////////////
//////////////////// Home Page /////////////////////

// let cards_holder = document.querySelectorAll(".portfolio-card");
let cards = document.querySelectorAll(".portfolio-card");
let cards_front_face = document.querySelectorAll(".front-face");
let cards_back_face = document.querySelectorAll(".back-face");

function flipCard() {

    cards_front_face.forEach(card_front_face => {
        card_front_face.addEventListener("click", () => {
            let card_type = card_front_face.id;
            let num_of_imgs = card_front_face.getAttribute('num-of-imgs');
            switch (card_type) {
                case "certificate":
                    cards[0].classList.add("flip");
                    showImg(num_of_imgs, "certificate", 0);
                    break;

                case "cv":
                    cards[1].classList.add("flip");
                    showImg(num_of_imgs, "cv", 1);
                    break;

                case "powerpoint":
                    cards[2].classList.add("flip");
                    showImg(num_of_imgs, "powerpoint", 2);
                    break;

                case "infographic":
                    cards[3].classList.add("flip");
                    showImg(num_of_imgs, "infographic", 3);
                    break;

                case "interactivePowerpoint":
                    cards[4].classList.add("flip");
                    showImg(num_of_imgs, "interactivePowerpoint", 4);
                    break;

                case "graphicDesign":
                    cards[5].classList.add("flip");
                    showImg(num_of_imgs, "graphicDesign", 5);
                    break;

                case "wordTemplate":
                    cards[6].classList.add("flip");
                    showImg(num_of_imgs, "wordTemplate", 6);
                    break;
            }
        })
    })
}

flipCard();

function reflipCard() {
    document.addEventListener("click", (element) => {
        if (element.target.classList[0] !== "front-face") {
            cards.forEach(card => {
                card.classList.remove("flip");
            })
        }
    })
}
reflipCard();

function showImg(num_of_imgs, img_type, card_num) {

    let img_counter = 2;
    if (img_counter <= num_of_imgs) {
        let handler = setInterval(() => {

            cards_back_face[card_num].innerHTML = `<img src="Images/Portfolio/${img_type}${img_counter}.jpg">`;
            img_counter++;
            if (img_counter > num_of_imgs) {
                img_counter = 1;
            }
            if (!cards[card_num].classList.contains("flip")) {
                clearInterval(handler);
            }
        }, 10000);
    }
}



// ///////////////////////////////

// let count = 1;

// function showImg() {

//     cards.forEach(card => {
//         card.addEventListener("mouseenter", () => {

//             let cardType = card.querySelector(".inside").getAttribute("content-type");
//             switch (cardType) {

//                 case "certificate":
//                     checkIfImageExists(`Images/Portfolio/certificate${count}.jpg`, card, "certificate");
//                     break;

//                 case "cv":
//                     checkIfImageExists(`Images/Portfolio/cv${count}.jpg`, card, "cv");
//                     break;

//                 case "powerpoint":
//                     checkIfImageExists(`Images/Portfolio/powerpoint${count}.jpg`, card, "powerpoint");
//                     break;

//                 case "infographic":
//                     checkIfImageExists(`Images/Portfolio/infographic${count}.jpg`, card, "infographic");
//                     break;

//                 case "interactivePowerpoint":
//                     checkIfImageExists(`Images/Portfolio/interactivePowerpoint${count}.jpg`, card, "interactivePowerpoint");
//                     break;

//                 case "graphicDesign":
//                     checkIfImageExists(`Images/Portfolio/graphicDesign${count}.jpg`, card, "graphicDesign");
//                     break;

//                 case "wordTemplate":
//                     checkIfImageExists(`Images/Portfolio/wordTemplate${count}.jpg`, card, "wordTemplate");
//                     break;
//             }
//         })
//     });
// }

// function checkIfImageExists(url, card, type) {
//     const img = new Image();
//     img.src = url;

//     img.addEventListener("load", () => {
//         card.querySelector(".inside").innerHTML = `<img src="Images/Portfolio/${type}${count}.jpg" alt="">`;
//         count++;
//     })
//     img.addEventListener("error", () => {
//         card.querySelector(".inside").innerHTML = `<img src="Images/Portfolio/${type}1.jpg" alt="">`;
//         count = 1;
//     })
// }

// showImg();

// function redirectTo() {

//     cards.forEach(card => {
//         card.addEventListener("click", () => {
//             localStorage.setItem("card_Type", card.id);
//             localStorage.setItem("num_of_imgs", card.getAttribute('num-of-imgs'));
//             window.location.href = "portfolio.html";
//         });
//     });
// }

// redirectTo();

//////////////////// Protfolio Section End /////////////////////

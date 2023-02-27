
////////////////////////////////////////////////////
// Loading the page content
let potrtfolio_container = document.querySelector("#portfolioContainer")
let book_container = document.querySelector("#bookContainer");
let samples_container = document.querySelector(".samples");

function loadElements(elementType, img_counter) {

    let content_type = "";
    let img_type = "";
    let video_type = "";
    let book_name = "";
    let index_num = img_counter; //For arranging pages
    let sample_direction = "";

    switch (elementType) {
        case "certificate":
            document.title = "الأعمال: شهادات"
            content_type = "img";
            img_type = "certificateEx";
            book_name = "شهادات";
            sample_direction = "horizontal";
            potrtfolio_container.classList.add("horizontal-container");
            book_container.classList.add("horizontal-book-container");
            break;

        case "cv":
            document.title = "الأعمال: سير ذاتية"
            content_type = "img";
            img_type = "cvEx";
            book_name = "سيرة ذاتية";
            sample_direction = "vertical";
            potrtfolio_container.classList.add("vertical-container");
            book_container.classList.add("vertical-book-container");
            break;

        case "powerpoint":
            document.title = "الأعمال: بوربوينت"
            content_type = "video";
            img_type = "powerpoint";
            video_type = "powerpointVideo";
            book_name = "بوربوينت";
            sample_direction = "horizontal";
            potrtfolio_container.classList.add("horizontal-container");
            book_container.classList.add("horizontal-book-container");
            break;

        case "infographic":
            document.title = "الأعمال: انفوجرافيك"
            content_type = "img";
            img_type = "infographicEx";
            book_name = "انفوجرافيك";
            sample_direction = "vertical";
            potrtfolio_container.classList.add("vertical-container");
            book_container.classList.add("vertical-book-container");
            break;

        case "interactivePowerpoint":
            document.title = "الأعمال: عروض تفاعلية"
            content_type = "video";
            img_type = "interactivePowerpoint";
            video_type = "interactivePowerpointVideo";
            book_name = "عروض تفاعلية";
            sample_direction = "horizontal";
            potrtfolio_container.classList.add("horizontal-container");
            book_container.classList.add("horizontal-book-container");
            break;

        case "graphicDesign":
            document.title = "الأعمال: تصاميم جرافيك"
            content_type = "img";
            img_type = "graphicDesign";
            book_name = "تصاميم جرافيك";
            sample_direction = "vertical";
            potrtfolio_container.classList.add("vertical-container");
            book_container.classList.add("vertical-book-container");
            break;

        case "wordTemplate":
            document.title = "الأعمال: قوالب وورد"
            content_type = "video";
            img_type = "wordTemplate";
            video_type = "wordTemplateVideo";
            book_name = "قوالب وورد";
            sample_direction = "horizontal";
            potrtfolio_container.classList.add("horizontal-container");
            book_container.classList.add("horizontal-book-container");
            break;
    }

    for (let i = 0; i <= img_counter; i++) {

        // Create a book
        let new_paper_front = document.createElement("div");
        new_paper_front.classList.add("front-page", "flex");
        let book_name_h3 = "";
        let paper_content = "";

        // Cover page
        if (i == 0) {
            book_name_h3 = document.createElement("h3");
            book_name_h3.classList.add("title");
            book_name_h3.style = `--content-variable: "${book_name}"`;
            book_name_h3.innerHTML = book_name;
            new_paper_front.appendChild(book_name_h3);

        } // Other pages 
        else {
            if (content_type == "img") {
                paper_content = `<img class="content" src="Images/Portfolio/${img_type}${i}.jpg" alt="">`;
                new_paper_front.innerHTML = paper_content;
            }
            else {
                paper_content = `<video class="content" autoplay loop muted>
                <source class="content" src="Images/Portfolio/${video_type}${i}.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>`;
                new_paper_front.innerHTML = paper_content;
            }
        }
        let new_paper_back = document.createElement("div");
        new_paper_back.classList.add("back-page");
        let new_paper = document.createElement("div");
        new_paper.id = `paper${i}`;
        new_paper.classList.add("paper");
        new_paper.appendChild(new_paper_front);
        new_paper.appendChild(new_paper_back);
        new_paper.style.zIndex = index_num--;
        book_container.appendChild(new_paper);

        // Pages samples
        if (i > 0) {
            let img2 = document.createElement("img");
            img2.id = `sample${i}`;
            img2.src = `Images/Portfolio/${img_type}${i}.jpg`;
            img2.classList.add("sample");
            if (sample_direction === "horizontal") {
                img2.classList.add("horizontal-img");
            } else {
                img2.classList.add("vertical-img");
            }
            samples_container.appendChild(img2);
        }
    }
    // Cover Page
    let new_back_cover = document.createElement("div");
    new_back_cover.classList.add("back-cover");
    new_back_cover.style.zIndex = -1;
    book_container.appendChild(new_back_cover);
}

let card_Type = localStorage.getItem("card_Type");
let num_of_imgs = localStorage.getItem("num_of_imgs")
loadElements(card_Type, num_of_imgs);

////////////////////////////////////////////////////
// Flipping pages by clicking the pages
let pages = document.querySelectorAll(".paper");
let cover_page = document.querySelector("#paper0");
let back_cover = document.querySelector(".back-cover");
let book_direction = document.querySelector("#bookContainer");
let papers_arrangement = [];

function flipPage() {

    pages.forEach(page => {
        page.addEventListener("click", () => {

            let z_index = page.id.substring(5);
            let last_z_index = getComputedStyle(page).getPropertyValue("z-index");

            if (page.classList.contains("flipped")) {
                page.classList.remove("flipped");
                page.style.zIndex = papers_arrangement[page.id.substring(5)];
                if (z_index == 1) {
                    cover_page.style.zIndex = papers_arrangement[0];
                }
                if (z_index == 0) {
                    pages.forEach(e => {
                        e.style.left = "0";
                        back_cover.style.left = "0";
                    })
                }
            } else {
                page.classList.add("flipped");
                if (book_direction.classList.contains("vertical-book-container")) {
                    pages.forEach(e => {
                        e.style.left = "-50%";
                        back_cover.style.left = "-50%";
                    })
                }
                papers_arrangement[z_index] = last_z_index;
                if (z_index != 0) {
                    page.style.zIndex = z_index;
                    if (z_index == 1) {
                        cover_page.style.zIndex = 0;
                    }
                }
            }
        });
    });
}

flipPage();

////////////////////////////////////////////////////
// Flipping pages by clicking the samples
let samples = document.querySelectorAll(".sample");

samples.forEach(sample => {

    sample.addEventListener("click", () => {
        let sample_id = sample.id.substring(6);
        let last_flipped_page = -1;

        pages.forEach(page => {
            if (page.classList.contains("flipped")) {
                last_flipped_page = page.id.substring(5);
            }
        })

        let page_num = Number(last_flipped_page);

        if (sample_id > last_flipped_page) {
            page_num++;
            if (page_num != sample_id) {
                let delay_counter = setInterval(() => {
                    flipForward(page_num);
                    page_num++;
                    if (page_num == sample_id) {
                        clearInterval(delay_counter);
                    }
                }, 500);
            }

        } else if (sample_id <= last_flipped_page) {
            let delay_counter = setInterval(() => {
                flipBackward(page_num);
                page_num--;
                if (page_num < sample_id) {
                    clearInterval(delay_counter);
                }
            }, 500);
        }
    });
})

function flipForward(page_Number) {

    pages[page_Number].classList.add("flipped");
    if (book_direction.classList.contains("vertical-book-container")) {
        pages.forEach(e => {
            e.style.left = "-50%";
            back_cover.style.left = "-50%";
        })
    }
    let z_index = pages[page_Number].id.substring(5);
    papers_arrangement[page_Number] = getComputedStyle(pages[page_Number]).getPropertyValue("z-index");
    if (z_index != 0) {
        pages[page_Number].style.zIndex = z_index;

        if (z_index == 1) {
            cover_page.style.zIndex = 0;
        }
    }
}

function flipBackward(page_Number) {

    pages[page_Number].classList.remove("flipped");
    let z_index = pages[page_Number].id.substring(5);
    pages[page_Number].style.zIndex = papers_arrangement[pages[page_Number].id.substring(5)];
    if (z_index == 1) {
        cover_page.style.zIndex = papers_arrangement[0];
    }
}


////////////////////////////////////////////////////
// Controlling the movement of the bottom bar
let samples_bar = document.querySelector(".samples");
let right_arrow = document.querySelector(".after-btn")
let left_arrow = document.querySelector(".before-btn")

left_arrow.addEventListener("click", () => {
    samples_bar.scrollBy(150, 0);
})
right_arrow.addEventListener("click", () => {
    samples_bar.scrollBy(-150, 0);
})


////////////////////////////////////////////////////
// Controlling the appearance of before and after buttons
let imgs_container = document.querySelector(".samples");
function beforeAndAfterBtns() {

    let imgs_container_CW = imgs_container.clientWidth;
    let imgs_container_SW = 0;
    //the delay to get the correct scroll width after uploading all document elements.
    setTimeout(() => {
        imgs_container_SW = imgs_container.scrollWidth;

        if(imgs_container_SW > imgs_container_CW){
            right_arrow.style.display = "block";
            left_arrow.style.display = "block";
        }else{
            right_arrow.style.display = "none";
            left_arrow.style.display = "none";
        }
    }, 300);

}
beforeAndAfterBtns();
window.addEventListener("resize", beforeAndAfterBtns);

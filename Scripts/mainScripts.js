// The Entry Animation for Elements Start
let sections_titles = document.querySelectorAll(".slide-up");
let contents_elements = document.querySelectorAll(".slide-in");
let appearing_way = {
    // threshhold: 1,
    rootMargin: "0px 0px -100px 0px"
};
let appear_on_scroll = new IntersectionObserver(function (elements, appear_on_scroll) {

    elements.forEach(element => {
        if (!element.isIntersecting) {
            return;
        } else {
            element.target.classList.add("appear");
            appear_on_scroll.unobserve(element.target);
        }
    })
}, appearing_way);

sections_titles.forEach(title => {
    appear_on_scroll.observe(title);
})
contents_elements.forEach(content_el => {
    appear_on_scroll.observe(content_el);
})
// The Entry Animation for Elements End



// Landing Section Scribts Start
const order_array = [1, 2, 3, 4, 5];
let accountant_div = document.querySelector(".accountant");
let architect_div = document.querySelector(".architect");
let lawyer_div = document.querySelector(".lawyer");
let workers_div = document.querySelector(".workers");
let delivery_div = document.querySelector(".delivery");

order_array.sort((a, b) => 0.5 - Math.random());

let count = 0;
setInterval(functio1, 2000);

function functio1() {

    display_state(order_array[count]);
    count++;

    if (count == 5) {
        count = 0;
    }
}

function display_state(new_state) {

    switch (new_state) {
        case 1:
            accountant_div.style.display = "block";
            architect_div.style.display = "none";
            lawyer_div.style.display = "none";
            workers_div.style.display = "none";
            delivery_div.style.display = "none";
            break;
        case 2:
            accountant_div.style.display = "none";
            architect_div.style.display = "block";
            lawyer_div.style.display = "none";
            workers_div.style.display = "none";
            delivery_div.style.display = "none";
            break;
        case 3:
            accountant_div.style.display = "none";
            architect_div.style.display = "none";
            lawyer_div.style.display = "block";
            workers_div.style.display = "none";
            delivery_div.style.display = "none";
            break;
        case 4:
            accountant_div.style.display = "none";
            architect_div.style.display = "none";
            lawyer_div.style.display = "none";
            workers_div.style.display = "block";
            delivery_div.style.display = "none";
            break;
        case 5:
            accountant_div.style.display = "none";
            architect_div.style.display = "none";
            lawyer_div.style.display = "none";
            workers_div.style.display = "none";
            delivery_div.style.display = "block";
            break;
    }
}
// Landing Section Scribts End


// Statistics Section Scribts Start
let elements = document.querySelectorAll(".statistics-section .stat-num");
let jobs_card = document.querySelector(".jobs");
let companies_card = document.querySelector(".companies");
let applies_card = document.querySelector(".applies");
let opportunities_card = document.querySelector(".opportunities");

window.onscroll = function () {

    if (window.scrollY >= (jobs_card.offsetTop - 350)) {
        counter(elements[0], 2);
    }
    if (window.scrollY >= (companies_card.offsetTop - 350)) {
        counter(elements[1], 20);

    }
    if (window.scrollY >= (applies_card.offsetTop - 350)) {
        counter(elements[2], 10);

    }
    if (window.scrollY >= (opportunities_card.offsetTop - 350)) {
        counter(elements[3], 1);
    }
};

function counter(element, increment) {

    let updateCount = () => {
        let data_goal = +element.getAttribute('data-goal');
        let num = +element.innerText;

        if (num < data_goal) {
            element.innerText = num + increment;

            setTimeout(updateCount, 100);
        } else {
            element.innerText = data_goal;
        }
    };

    updateCount();
}
// Statistics Section Scribts End

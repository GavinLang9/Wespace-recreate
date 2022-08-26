

let locations = ['Jogjakarta, Indonesia', 'California, USA', 'Paris, France', 'Berlin, Germany','Barcelona, Spain'];
let types = ['Private Office', 'Public Office', 'Shared Office'];
let currentDate = new Date();
let dates = [];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
for(let i = 0; i < 7; ++i) {
    dates.push(`${currentDate.getDate()+i} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`);

}


let selectLocation = document.getElementById('location');
let type = document.getElementById('type');
let date = document.getElementById('date');



function addOptions(dropdown, list) {
    for(let i = 0; i < list.length; ++i) {
        let option = document.createElement('option');
        option.value = list[i];
        option.text = list[i];
        dropdown.appendChild(option);
    }
}

addOptions(selectLocation, locations);
addOptions(type, types);
addOptions(date, dates);


// let hamburger = document.getElementById("hamburger");
// hamburger.addEventListener("click", () => {
//     if(hamburger.children[0].classList.contains("open-hamburger-top")) {
//         hamburger.children[0].classList.remove("open-hamburger-top");
//         hamburger.children[0].classList.add("close-hamburger-top");
//         hamburger.children[1].classList.remove("open-hamburger-bottom");
//         hamburger.children[1].classList.add("close-hamburger-bottom");
//         hamburger.children[2].classList.remove("open-hamburger-middle");
//         hamburger.children[2].classList.add("close-hamburger-middle");
//     } else if(hamburger.children[0].classList.contains("close-hamburger-top")) {
//         hamburger.children[0].classList.remove("close-hamburger-top");
//         hamburger.children[0].classList.add("open-hamburger-top");
//         hamburger.children[1].classList.remove("close-hamburger-bottom");
//         hamburger.children[1].classList.add("open-hamburger-bottom");
//         hamburger.children[2].classList.remove("close-hamburger-middle");
//         hamburger.children[2].classList.add("open-hamburger-middle");
//     } else {
//         hamburger.children[0].classList.add("open-hamburger-top");
//         hamburger.children[1].classList.add("open-hamburger-bottom");
//         hamburger.children[1].classList.add("open-hamburger-middle");

//     }
// })

var topLine = document.getElementsByClassName("line1")[0];
var middleLine = document.getElementsByClassName('line2')[0];
var bottomLine = document.getElementsByClassName('line3')[0];
var background = document.getElementsByClassName("hamburger-background")[0];
var box = document.getElementsByClassName('box')[0];
let li = document.getElementsByClassName("nav-item");
topLine.classList.remove('animation');
middleLine.classList.remove('animation');
bottomLine.classList.remove('animation');

box.addEventListener('click', turnOnAnimation);

// when box is clicked, the reverse animation can occur
// before, when the screen loaded, the reverse screen animation played automatically
function turnOnAnimation() {
    topLine.classList.add('animation');
    middleLine.classList.add('animation');
    bottomLine.classList.add('animation');
}

box.addEventListener("click", () => {
    if(background.classList.contains("background-open")) {
        background.classList.remove("background-open");
        background.classList.add("background-close");
        for(let i = 0; i < 4; ++i) {
            li[i].classList.remove("nav-open");
            li[i].classList.add("nav-close");
        }
    } else if(background.classList.contains("background-close")) {
        background.classList.remove("background-close");
        background.classList.add("background-open");
        for(let i = 0; i < 4; ++i) {
            li[i].classList.remove("nav-close");
            li[i].classList.add("nav-open");
        }
    } else {
        background.classList.add("background-open");
        for(let i = 0; i < 4; ++i) {
            li[i].classList.remove("nav-close");
            li[i].classList.add("nav-open");        }
    }
})

// creates a review element
function createReview() {
        let reviewObject = {
            p: "LeadEngine is a fully packed practical took of premium built and design.  Thus is great for rising undefined businesses looking for a specific customers market",
            author: {
                name: "Thomson Zarki",
                position: "Web Designer"
            }

        }
        let review = document.createElement("div");
        review.classList.add("review");
    
        let p = document.createElement("p");
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h5");

        p.textContent = reviewObject.p;
        h4.textContent = reviewObject.author.name;
        h5.textContent = reviewObject.author.position;
        review.appendChild(p);
        review.appendChild(h4);
        review.appendChild(h5);
        return review;

}

let reviews = document.getElementById("reviews");

for(let i = 0; i < 4; ++i) {
    reviews.appendChild(createReview());
}


let leftArrow = document.getElementsByClassName("move-left")[0];
let rightArrow = document.getElementsByClassName("move-right")[0];

let positionX = 0;
let translateHorizontal = 0;
let reviewWidth = reviews.children[0].clientWidth;

setInterval(updateReviewWidth, 1);

leftArrow.addEventListener("click", () => {
    if(positionX <= 2 && positionX > 0) {
        translateHorizontal += reviewWidth + 20;
        // moveReviewsLeft();
        reviews.style.transform = "translateX("+ translateHorizontal + "px)";
        --positionX;
    } 
    updateReviewOpacity();
})

rightArrow.addEventListener("click", () => {
    if(positionX >= 0 && positionX < 2) {
    translateHorizontal -= reviewWidth + 20;
    reviews.style.transform = "translateX("+ translateHorizontal + "px)";
    ++positionX;
    }
    updateReviewOpacity();
})
console.log(leftArrow.children[0].children);
console.log(positionX)
function updateReviewWidth() {
    reviewWidth = reviews.children[0].clientWidth;

}

function updateReviewOpacity() {
    if(positionX === 0) {
        reviews.children[0].style.opacity = '1';
        reviews.children[1].style.opacity = '1';
        reviews.children[2].style.opacity = '0';
        reviews.children[3].style.opacity = '0';
    } else if(positionX === 1) {
        reviews.children[0].style.opacity = '0';
        reviews.children[1].style.opacity = '1';
        reviews.children[2].style.opacity = '1';
        reviews.children[3].style.opacity = '0';
    } else if(positionX === 2) {
        reviews.children[0].style.opacity = '0';
        reviews.children[1].style.opacity = '0';
        reviews.children[2].style.opacity = '1';
        reviews.children[3].style.opacity = '1';
    }
}


// function updateReviewOpacity() {
//     if(positionX === 0) {
//         reviews.children[0].style.display = 'flex';
//         reviews.children[1].style.display = 'flex';
//         reviews.children[2].style.display = 'none';
//         reviews.children[3].style.display = 'none';
//     } else if(positionX === 1) {
//         reviews.children[0].style.display = 'none';
//         reviews.children[1].style.display = 'flex';
//         reviews.children[2].style.display = 'flex';
//         reviews.children[3].style.display = 'none';
//     } else if(positionX === 2) {
//         reviews.children[0].style.display = 'none';
//         reviews.children[1].style.display = 'none';
//         reviews.children[2].style.display = 'flex';
//         reviews.children[3].style.display = 'flex';
//     }
// }
// function moveReviewsLeft() {
//     if(positionX === 0) {
//         reviews.
//     }
// }
const container = document.getElementsByClassName("container")[0];
const textEl = document.getElementById("text");
const nameEl = document.getElementById("name");
const text = "Happy Birthday!";
const names = "whoever";

const colours = ['#FF3E9B', '#FF88BA', '#FFB2B2', '#87B6BC', '#519A66', '#261CC1', '#3A9AFF', '#FFC300', '#fff'];

const icons = [cakeSvg, heartSvg , heartSvg, heartSvg, heartSvg, heartSvg, heartSvg, hollowheart, star];
const downIcons = [heartSvg, circle, hollowCircle, star, fullStar, circle, hollowCircle, hollowheart];
const wishes = [
    'Wishing you health, happiness, and all the cake you can eat...',
    'Happy Birthday! You’re my favorite reason to smile.',
    `Happy Birthday ${names}!!`
];

for(let i=0; i<70; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const randIcon = Math.round(Math.random()*8);
    heart.innerHTML = icons[randIcon];

    const left = Math.round(Math.random() * window.innerWidth);
    const top = 50+Math.random() * 50;
    const duration = 3+ Math.random() * 7;
    const delay =  Math.random() * 10;
    const color = Math.round(Math.random() * colours.length+1);
    const size = Math.round(30+Math.random()*15);

    heart.style.left = left + 'px';
    heart.style.bottom = "-" + top + 'px';
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = delay + 's';
    heart.style.zIndex = 5;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.firstChild.style.animationDuration = duration + 's';
    heart.firstChild.style.fill = colours[color];

    container.appendChild(heart);
}

for(let i=0; i<30; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    const randIcon = Math.round(Math.random()*7);
    circle.innerHTML = downIcons[randIcon];

    const left = Math.round(Math.random() * window.innerWidth);
    const top = 50+Math.random() * 50;
    const duration = 3+ Math.random() * 7;
    const delay =  Math.random() * 10;
    const color = Math.round(Math.random() * colours.length+1);
    const size = Math.round(10+Math.random()*5);

    circle.style.left = left + 'px';
    circle.style.bottom = "-" + top + 'px';
    circle.style.animationDuration = duration + 's';
    circle.style.animationDelay = delay + 's';
    circle.style.zIndex = 5
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.firstChild.style.animationDuration = duration + 's';
    circle.firstChild.style.fill = colours[color];

    container.appendChild(circle);
}
for(let i=0; i<3; i++) {
    const wish = document.createElement('div');
    wish.classList.add(`wish`);
    wish.classList.add(`wish${i}`);
    wish.textContent = wishes[i];
    container.appendChild(wish);
}
text.split('').forEach((letter, index) => {
    setTimeout(() => {
        textEl.textContent += letter;
    }, index * 180);
});
setTimeout(() => {
        names.split('').forEach((letter, index) => {
    setTimeout(() => {
        nameEl.textContent += letter;
        }, index * 180);
    });
}, 3800);


console.log();
let messages = ['မုန့်ဝယ်ကျွေးရမယ်နော်','ပျော်ရွှင်စရာမွေးနေ့ဖြစ်ပါစေ' ];
let message = 'ပျော်ရွှင်စရာမွေးနေ့ဖြစ်ပါစေ';

const catMessage = document.getElementsByClassName("catMessage")[0];
const catDance = document.getElementById('catDance');
let isAnimating = false;

function catTalk (message) {
    if (isAnimating) return; // ignore clicks while animating
    isAnimating = true;

catMessage.style.backgroundColor = '';
catMessage.textContent = '';
catMessage.style.backgroundColor = 'rgba(180, 255, 220, 0.507)'
catMessage.style.boxShadow = '0 0 8px rgba(220, 220, 220, 0.5),0 0 12px rgba(255, 182, 193, 0.5)';
 
message.split('').forEach((letter, index) => {
    setTimeout(() => {
        catMessage.textContent += letter;
        if (index === message.length - 1) {
                isAnimating = false;
        }
    }, index * 180);
});
}

let cc = 0
catDance.addEventListener("click", () => {
    if (cc>1) {cc = 0;} 
    catTalk(messages[cc]);
    cc += 1;
})

setTimeout(() => {
    catTalk('click Me!!');
},1000);

setTimeout(() => {
    catTalk(message);    
},8000);


// flip book 
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


const book = document.getElementById("book");
const c = document.getElementsByClassName("c")[0];

const papers = document.querySelectorAll(".paper");

let isOpen = false;
book.addEventListener("click", () => {
    if (isOpen) {
        c.style.transform = 'scale(0.3)';
        c.style.marginTop = '500px';
        c.style.marginRight = '180px';
    } else {
        c.style.transform = 'scale(0.7)';
        c.style.marginTop = '-250px';
        c.style.marginRight = '0';
    }
    isOpen = !isOpen;
});

function showPhotos () {
    c.style.transform = 'scale(0.7)';
    c.style.zIndex = 100;

}

setTimeout(() => {
    showPhotos();
    c.style.marginTop = '-250px';
    c.style.marginRight = '0px';
    for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        nextBtn.click();
    }, i * 2000); 
    setTimeout(() => {
        c.style.marginTop = '500px';
        c.style.transform = 'scale(0.3)';
        c.style.marginRight = '180px';
    }, 4 * 2000);
}
}, 2300);

for(let i =0; i<papers.length; i++) {
    papers[i].style.zIndex = papers.length-1 - i;
}

let max = papers.length;
let count = 0
nextBtn.addEventListener("click", () => {    
    if (count<max) {
        prevBtn.style.display = 'block';
        if (count===0) {
            openBook()
        } 
        papers[count].classList.add("flipped");
        papers[count].style.zIndex = count+3;
        count++;
    }
    if (count == papers.length) {
            closeBook();
            nextBtn.style.display = 'none';
        }
    
})
prevBtn.addEventListener("click", () => {
    if (count > 0) {
        nextBtn.style.display = 'block';
        if (count === papers.length) {
            openBook();
        }
        count--;
        papers[count].classList.remove("flipped");
        papers[count].style.zIndex = papers.length - count;
    }
    if (count === 0) {
        prevBtn.style.display = 'none';
        closeBook(true)
    }
});
function openBook () {
    nextBtn.style.transform = 'translateX(100px)'
    book.style.transform = 'translateX(100px)'
    prevBtn.style.transform = 'translateX(-100px)';
    prevBtn.style.transition = '0.4s ease';
}
function closeBook (isBegin) {
    if (isBegin) {
        book.style.transform = 'translateX(0px)'
    } else {
        book.style.transform = 'translateX(200px)'
    }
    nextBtn.style.transform = 'translateX(0)'
    prevBtn.style.transform = 'translateX(0)';
    prevBtn.style.transition = '0.4s ease';
}

const music = document.getElementById("bgMusic");

catDance.addEventListener("click", () => {
    music.play();
}, { once: true });
//loading page
// window.addEventListener('load',
//     function(){
//         document.getElementById('maincontent').style.display = 'none';
// this.setTimeout(function(){
//     document.getElementById('loading').style.display = 'none';

//     document.getElementById('maincontent').style.display = 'block';
// },5000)
//     }
// )

//book
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
const book = document.querySelector(".book");
const paper1 = document.querySelector("#page1");
const paper2 = document.querySelector("#page2");
const paper3 = document.querySelector("#page3");
const paper4 = document.querySelector("#page4");
const paper5 = document.querySelector("#page5");

let currentPage = 1;
let numberOfPages = 5;
let maxNumberOfPages = numberOfPages + 1;

// event listener
prevbtn.addEventListener("click", prevpage);
nextbtn.addEventListener("click", nextpage);
book.addEventListener("click", openBook);

function openBook() {
    book.style.transform = "translateX(50%)";
    prevbtn.style.transform = "translateX(-180px)";
    nextbtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
        nextbtn.style.transform = "translateX(0px)";

    } else {
        book.style.transform = "translateX(100%)";
        nextbtn.style.transform = "translateX(360px)";

    }
    prevbtn.style.transform = "translateX(0px)";
    // nextbtn.style.transform = "translateX(360px)";
}

function nextpage() {
    if (currentPage < maxNumberOfPages) {
        switch (currentPage) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = '1';
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = '2';
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = '3';
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = '4';
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = '5';
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentPage++;
    }
}

function prevpage() {
    if (currentPage > 1) {
        currentPage--;
        switch (currentPage) {
            case 1:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = '5';
                closeBook(true);
                break;
            case 2:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = '4';
                break;
            case 3:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = '3';
                break;
            case 4:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = '2';
                break;
            case 5:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = '1';
                break;
            default:
                throw new Error("unknown state");
        }
    }
}

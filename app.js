let none1 = document.querySelector(".block1-none");
let none2 = document.querySelector(".block2-none");
let none3 = document.querySelector(".block3-none");
let none4 = document.querySelector(".block4-none");

let block1 = document.querySelector(".photo1");
let block2 = document.querySelector(".photo2");
let block3 = document.querySelector(".photo3");
let block4 = document.querySelector(".photo4");
let blockClose = document.querySelectorAll(".happy-clients-none")


block1.addEventListener("click", show1);
function show1() {
    none1.style.display = "block";
    none1.style.background = "gainsboro";
}

block2.addEventListener("click", show2);
function show2() {
    none2.style.display = "block";
    none2.style.background = "gainsboro";
}

block3.addEventListener("click", show3);
function show3() {
    none3.style.display = "block";
    none3.style.background = "gainsboro";
}

block4.addEventListener("click", show4);
function show4() {
    none4.style.display = "block";
    none4.style.background = "gainsboro";
}

blockClose.forEach((close) => {
    close.addEventListener('click', closeShow)
});
function closeShow() {
    none1.style.display = "none";
    none2.style.display = "none";
    none3.style.display = "none";
    none4.style.display = "none";
}

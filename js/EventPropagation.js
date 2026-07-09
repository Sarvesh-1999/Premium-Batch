const sectionTag = document.querySelector("section");
const articleTag = document.querySelector("article");
const divTag = document.querySelector("div");

sectionTag.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("section");
    sectionTag.style.backgroundColor = "red"
}, 1);


articleTag.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("article");
    articleTag.style.backgroundColor = "orange"
}, 1);


divTag.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("div");
    divTag.style.backgroundColor = "yellow"
}, 1);


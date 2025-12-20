const nav = document.querySelector(".nav");
const SearchIcon = document.querySelector("#searchIcon");
const navCloseBtn = document.querySelector(".navCloseBtn");
const navOpenBtn = document.querySelector(".navOpenBtn");


SearchIcon.addEventListener("click", ()=>{
nav.classList.toggle("OpenSearch")
 nav.classList.remove("openNav");

if(nav.classList.contains("OpenSearch"))

    {
     return   SearchIcon.classList.replace("uil-search", "uil-times")
    }
else
    return SearchIcon.classList.replace("uil-times", "uil-search")

});
navOpenBtn.addEventListener("click",()=>{
    nav.classList.add("openNav");
    nav.classList.remove("OpenSearch");
     
    SearchIcon.classList.replace("uil-times", "uil-search")
});
navCloseBtn.addEventListener("click",()=>{
    nav.classList.remove("openNav");
    if(nav.classList.contains("OpenSearch"))
    SearchIcon.classList.replace("uil-search", "uil-times")
});

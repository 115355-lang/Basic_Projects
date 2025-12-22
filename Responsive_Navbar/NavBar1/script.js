const nav = document.querySelector(".nav");
const SearchIcon = document.querySelector(".searchicon");
const navbar = document.querySelector(".nav-links");
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
SearchIcon.addEventListener("click", ()=>{
    nav.classList.toggle("Appear");
     nav.classList.remove("OpenNav"); // 🔥 force menu to close

//   SearchIcon.classList.replace("uil-search", "uil-times");
if(nav.classList.contains("Appear"))
{
    SearchIcon.classList.replace("uil-search",  "uil-times")
}
else{
    SearchIcon.classList.replace("uil-times",  "uil-search")
}
})
navClose.addEventListener("click", ()=>{
nav.classList.remove("OpenNav");


})
navOpen.addEventListener("click", ()=>{

    nav.classList.add("OpenNav");
    nav.classList.remove("Appear"); 
    SearchIcon.classList.replace("uil-times", "uil-search")
    // SearchIcon.classList.replace("uil-search", "uil-times");
    // if(nav.classList.contains("Appear"))
    // {
    //     nav.classList.remove("Appear");
    //     SearchIcon.classList.replace("uil-times",  "uil-search")

    // }
    // else if(nav.classList.contains("OpenNav"))
    // {
    //     if(SearchIcon.clicked)
    // {
    //     nav.classList.remove("OpenNav");
        

    // }
    // }
})
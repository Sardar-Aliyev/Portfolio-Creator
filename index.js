const overLay = document.getElementById("overlay")
const overContent = document.getElementById("overlay-content")
const btn = document.getElementById("closebtn")
const navBar = document.getElementById("bar")

navBar.addEventListener("click", Contentview)
btn.addEventListener("click", closeContent)

function Contentview() {
    overLay.style.width = "100%"
}
function closeContent() {
    overLay.style.width = "0"
}



AOS.init()





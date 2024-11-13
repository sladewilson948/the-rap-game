const savage = document.getElementById("21")
const carti = document.getElementById("carti")
const drake = document.getElementById("drake")
const lamar = document.getElementById("lamar")
const yachty = document.getElementById("yachty")
const pluto = document.getElementById("pluto")
const cole = document.getElementById("cole")
const baby = document.getElementById("baby")
const travis = document.getElementById("travis")
const body = document.body
const gotop = document.getElementById("gotop")




window.addEventListener("scroll", ()=> {
    if(window.scrollY<=100)
        {
            gotop.style.display = "none"
        }
    else{
        gotop.style.display = "block"
    }
})




savage.addEventListener("click", ()=> {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})
savage.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#3D2B56"
})
savage.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


carti.addEventListener("click", ()=> {
    window.scrollBy({
        top: 2*window.innerHeight,
        behavior: 'smooth'
    })
})
carti.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#7c0000"
})
carti.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


drake.addEventListener("click", ()=> {
    window.scrollBy({
        top: 3*window.innerHeight,
        behavior: "smooth"
    })
})
drake.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#2C3E50"
})
drake.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


lamar.addEventListener("click", ()=> {
    window.scrollBy({
        top: 4*window.innerHeight,
        behavior: "smooth"
    })
})
lamar.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#4B0000"
})
lamar.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


yachty.addEventListener("click", ()=> {
    window.scrollBy({
        top: 5*window.innerHeight,
        behavior: "smooth"
    })
})
yachty.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#FF7518"
})
yachty.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


pluto.addEventListener("click", ()=> {
    window.scrollBy({
        top: 6*window.innerHeight,
        behavior: "smooth"
    })
})
pluto.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor="#7DF9FF"
})
pluto.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


cole.addEventListener("click", ()=> {
    window.scrollBy({
        top: 7*window.innerHeight,
        behavior:"smooth"
    })
})
cole.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor="#3CB371"
})
cole.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})


baby.addEventListener("click", ()=> {
    window.scrollBy({
        top: 8*window.innerHeight,
        behavior: "smooth"
    })
})
baby.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#2C3E50"
})
baby.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})



travis.addEventListener("click", ()=> {
    window.scrollBy({
            top: 9*window.innerHeight,
            behavior: "smooth"
    })
})
travis.addEventListener("mouseenter", (e)=> {
    body.style.backgroundColor = "#654321"
})
travis.addEventListener("mouseleave", (e)=> {
    body.style.backgroundColor = "bisque"
})

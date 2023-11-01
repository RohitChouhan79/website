

gsap.to("nav",{
    top:"-12%",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -15%",
        scrub:true
    }
})

gsap.to(".flora1", {
    top:"-50%",
    scrollTrigger:{
        trigger:".flora1",
        scroller:"body",
        // markers:true,
        start:"top -6%",
        end:"top -100%",
        scrub:true
    }
})

let leftI = document.querySelector(".left")
let rightI = document.querySelector(".right")
let p3down = document.querySelector(".p3down")
let p3downMid = document.querySelector(".p3downMid")
let card = document.querySelector(".ca1")
let card2 = document.querySelector(".ca2")
let card3 = document.querySelector(".ca3")
let card4 = document.querySelector(".ca4")
let card5 = document.querySelector(".ca5")
let card6 = document.querySelector(".ca6")
let card7 = document.querySelector(".ca7")
let card8 = document.querySelector(".ca8")
let card9 = document.querySelector(".ca9")
let card10 = document.querySelector(".ca10")

let scrol = 0;

let maxScrol = (card.clientWidth*6)

leftI.addEventListener("click", function(){
    if(scrol < maxScrol){

        scrol += card.clientWidth
        p3down.scrollTo({
            top: 100,
            left: scrol,
            behavior: "smooth",
          })
        card.style.animation = "rotL 0.3s linear 1 alternate"
        card2.style.animation = "rotL 0.3s linear 1 alternate"
        card3.style.animation = "rotL 0.3s linear 1 alternate"
        card4.style.animation = "rotL 0.3s linear 1 alternate"
        card5.style.animation = "rotL 0.3s linear 1 alternate"
        card6.style.animation = "rotL 0.3s linear 1 alternate"
        card7.style.animation = "rotL 0.3s linear 1 alternate"
        card8.style.animation = "rotL 0.3s linear 1 alternate"
        card9.style.animation = "rotL 0.3s linear 1 alternate"
        card10.style.animation = "rotL 0.3s linear 1 alternate"
        setTimeout(() => {
            card.style.animation = "none"
            card2.style.animation = "none"
            card3.style.animation = "none"
            card4.style.animation = "none"
            card5.style.animation = "none"
            card6.style.animation = "none"
            card7.style.animation = "none"
            card8.style.animation = "none"
            card9.style.animation = "none"
            card10.style.animation = "none"            
        }, 300);
    }
    
    
})
rightI.addEventListener("click", function(){
    if(scrol > 0){
        scrol -= card.clientWidth
        p3down.scrollTo({
            top: 100,
            left: scrol,
            behavior: "smooth",
          })
          card.style.animation = "rotR 0.3s linear 1 alternate"
        card2.style.animation = "rotR 0.3s linear 1 alternate"
        card3.style.animation = "rotR 0.3s linear 1 alternate"
        card4.style.animation = "rotR 0.3s linear 1 alternate"
        card5.style.animation = "rotR 0.3s linear 1 alternate"
        card6.style.animation = "rotR 0.3s linear 1 alternate"
        card7.style.animation = "rotR 0.3s linear 1 alternate"
        card8.style.animation = "rotR 0.3s linear 1 alternate"
        card9.style.animation = "rotR 0.3s linear 1 alternate"
        card10.style.animation = "rotR 0.3s linear 1 alternate"
        setTimeout(() => {
            card.style.animation = "none"
            card2.style.animation = "none"
            card3.style.animation = "none"
            card4.style.animation = "none"
            card5.style.animation = "none"
            card6.style.animation = "none"
            card7.style.animation = "none"
            card8.style.animation = "none"
            card9.style.animation = "none"
            card10.style.animation = "none"            
        }, 300);
    }
    
})

let menuOp1 = document.querySelector(".menuOp")
let menuOp2 = document.querySelector(".mop2")
let menuOp3 = document.querySelector(".mop3")
let menuOp4 = document.querySelector(".mop4")
let hi1 = document.querySelector(".hi1")
let hi2 = document.querySelector(".hi2")
let hi3 = document.querySelector(".hi3")
let hi4 = document.querySelector(".hi4")
let showImg = document.querySelector(".showimg")


menuOp1.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    hi1.style.visibility = "visible"
    hi1.style.left = dets.x + 10 + "px"
    hi1.style.top = dets.y + 10 + "px"
    showImg.setAttribute("src","https://images.unsplash.com/photo-1608656218680-e8be81ce71d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZsb3dlciUyMGluJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
})
menuOp2.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    hi2.style.visibility = "visible"
    hi2.style.left = dets.x +10 + "px"
    hi2.style.top = dets.y + 10 + "px"
    showImg.setAttribute("src","https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlciUyMGluJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
})
menuOp3.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    hi3.style.visibility = "visible"
    hi3.style.left = dets.x +10 + "px"
    hi3.style.top = dets.y + 10 + "px"
    showImg.setAttribute("src","https://images.unsplash.com/photo-1590998853966-e8f8d58aa24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlciUyMGluJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
})
menuOp4.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    hi4.style.visibility = "visible"
    hi4.style.left = dets.x + 10 + "px"
    hi4.style.top = dets.y + 10 + "px"
    showImg.setAttribute("src","https://plus.unsplash.com/premium_photo-1664543258886-32c158e63813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlciUyMGluJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
})

menuOp1.addEventListener("mouseleave",function(){
    hi1.style.visibility = "hidden"
})
menuOp2.addEventListener("mouseleave",function(){
    hi2.style.visibility = "hidden"
})
menuOp3.addEventListener("mouseleave",function(){
    hi3.style.visibility = "hidden"
})
menuOp4.addEventListener("mouseleave",function(){
    hi4.style.visibility = "hidden"
})

hi4.addEventListener("mouseenter",function(){
    hi4.style.visibility = "hidden"
})


let menuBtn = document.querySelector(".navh2-1");
let menuDiv = document.querySelector("menu");

let menuBtnFlag = 0;

menuBtn.addEventListener("click", function(){
    if(menuBtnFlag === 0 ){
        menuBtn.innerHTML = `<i class="ri-close-fill menu"></i>`
        menuBtnFlag = 1;
        menuDiv.style.top = "0%"

    } else {
        menuBtn.innerHTML = `<i class="ri-menu-line menu"></i>`
        menuBtnFlag = 0;
        menuDiv.style.top = "-110vh"
    }
})
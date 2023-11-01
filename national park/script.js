var tl = gsap.timeline()

tl.from("#nav",{
    opacity:0,delay:0.5
})
tl.from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity:0,
    duration:0.9,
    stagger:0.3
})
tl.from("#left h1,#left #box",{
    x:-400,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

tl.from("#right",{
    scale:2,
    opacity:0,
    duration:0.5
})

tl.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        // start:"top 60%"
    }
})
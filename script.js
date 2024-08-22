gsap.from("#page1 #box",{
    scale:0,
    delay:0,
    duration:1,
    rotate:360,
    // scrollTrigger:"#page1 #box"
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 40%"
    }
})
gsap.from("#page2 #box",{
    scale:0,
    delay:0,
    duration:1,
    rotate:360,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }

})
gsap.from("#page3 #box",{
    scale:0,
    delay:0,
    duration:1,
    rotate:360,
    // scrollTrigger:"#page3 #box"
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
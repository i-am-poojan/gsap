gsap.to('#page2 h1',{
    transform:"translateX(-75%)",
    scrollTrigger:{
        trigger:"#page2", //here always select parents which thing you can try to pin
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -120%",
        scrub:2,
        pin:true
    }

})
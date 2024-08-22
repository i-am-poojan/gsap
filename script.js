gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    scale: 0.5,
    // repeat:1,  here once time going to forward and backward
    repeat: -1, //here perform infinite time 
    yoyo: true, 
})
gsap.from("#box2", {
    x: 1200,
    duration: 2,
    delay: 1.5
})
gsap.from("h1", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    stagger: 1
})
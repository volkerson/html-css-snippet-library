gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".srcoll-container", 3, {x:-window.innerWidth});
tl.to(".srcoll-container", 3, {x:-window.innerWidth * 2});

ScrollTrigger.create({
    animation: tl,
    trigger: ".srcoll-container",
    start: "center center",
    end: "+=3000",
    scrub: true,
    pin: true
});
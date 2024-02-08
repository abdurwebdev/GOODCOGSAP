const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let viu=document.querySelector('#products4');
let crsr2=document.querySelector('#cursor2');
viu.addEventListener("mouseenter",
function()
{
    gsap.to(crsr2,
        {
            opacity: 0.5,
            scale: 1,
        })
})
viu.addEventListener("mouseleave",
function()
{
    gsap.to(crsr2,
        {
            opacity:0,
            scale:0,
        })
})
viu.addEventListener("mousemove",
function(dets)
{
    gsap.to(crsr2,
        {
            x:dets.clientX-75,
            y:dets.clientY-50,
        })
})
let viu2=document.querySelector('#products5');
let crsr3=document.querySelector('#cursor3');
viu2.addEventListener("mouseenter",
function()
{
    gsap.to(crsr3,
        {
            opacity: 0.5,
            scale: 1,
        })
})
viu2.addEventListener("mouseleave",
function()
{
    gsap.to(crsr3,
        {
            opacity:0,
            scale:0,
        })
})
viu2.addEventListener("mousemove",
function(dets)
{
    gsap.to(crsr3,
        {
            x:dets.clientX-75,
            y:dets.clientY-50,
        })
})
let crsr=document.querySelector('#videocon');
let btn=document.querySelector('#cursor');
crsr.addEventListener("mouseenter",
function()
{
    gsap.to(btn,
        {
            opacity: 1,
            scale: 1,
        })
})
crsr.addEventListener("mouseleave",
function()
{
    gsap.to(btn,
        {
            opacity: 0,
            scale: 0,
        })
})
crsr.addEventListener("mousemove",
function(dets)
{
    gsap.to(btn,{
     x:dets.clientX,
     y:dets.clientY,
        
    }
     )
   
})


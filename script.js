// loading window
var tl = gsap.timeline();
tl
.to("#load1",{
    width: "20px",
    height: "20px",
    backgroundColor : "#dadada",
    ease: Power1.easeInOut,
    duration: .5
})
.to("#load2",{
    width: "80px",
    height: "80px",
    backgroundColor : "#dadada6d",
    ease: Power1.easeInOut,
    duration: .5
})
.to("#loading",{
    top: "-100%",
    backgroundColor : "#dadada6d",
    duration: 1,
    opacity: 0,
})


//smcircle window
function smcircle(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#smcircle").style.top = `${dets.clientY}px`;
        document.querySelector("#smcircle").style.left = `${dets.clientX}px`;
    });
}
window.requestAnimationFrame(smcircle);

//textillate H1
$('.mtxt h1').textillate({initialDelay: 800, in: { effect: 'fadeInUp', delay: 10, delayScale: 5} });
$('.mtxt h2').textillate({initialDelay: 800, in: { effect: 'fadeInUp', delay: 100, delayScale: 100, duration: 5} });

//Menu open animation and hover
var flag =0;
document.querySelector("#nav i").addEventListener("click", function(){
    if(flag===0){
        document.querySelector("#nav i").style.border = "2px solid black";
        document.querySelector(".menu").style.display = "flex";
        // document.querySelector(".menu").style.width = "15%";
        gsap.from(".menu",{
            width: 0,
            duration: 1,
            ease: "Expo.easeOut"
        })
        document.querySelector("#nav i").style.backgroundColor = "white";
        document.querySelector("#nav i").style.color = "black";
        flag=1;
    }
    else if(flag===1){
        document.querySelector("#nav i").style.border = "initial";
        document.querySelector(".menu").style.display = "none";
        // document.querySelector(".menu").style.width = "initial";
        document.querySelector("#nav i").style.backgroundColor = "initial";
        document.querySelector("#nav i").style.color = "initial";
        flag=0;
    }
});
//menu hover animation
document.querySelectorAll(".menu").forEach(function(elm){
    elm.addEventListener("mousemove", function(){
        document.querySelector("#smcircle").style.border = "2px solid white";
        document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
    elm.addEventListener("mouseleave", function(){
        document.querySelector("#smcircle").style.border = "2px solid black";
        document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
});

//simple border to white cursor
document.querySelectorAll(".white").forEach(function(elm){
    elm.addEventListener("mousemove", function(){
        document.querySelector("#smcircle").style.border = "2px solid white";
        document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
    elm.addEventListener("mouseleave", function(){
        document.querySelector("#smcircle").style.border = "2px solid black";
        document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
});

//Enlarge cursor
document.querySelectorAll(".enlarge").forEach(function(elm){
    elm.addEventListener("mousemove", function(){
        document.querySelector("#smcircle").style.border = "2px solid white";
        document.querySelector("#smcircle").style.width = "60px";
        document.querySelector("#smcircle").style.height = "60px";
        document.querySelector("#smcircle").style.backgroundColor = "white";
        document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
    elm.addEventListener("mouseleave", function(){
        document.querySelector("#smcircle").style.border = "2px solid black";
        document.querySelector("#smcircle").style.width = "15px";
        document.querySelector("#smcircle").style.height = "15px";
        document.querySelector("#smcircle").style.backgroundColor = "transparent";
        document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
});

//Email Circle hover
document.querySelector(".circle").addEventListener("mousemove", function(){
    document.querySelector("#smcircle").style.border = "2px solid white";
    document.querySelector("#smcircle").style.width = "60px";
    document.querySelector("#smcircle").style.height = "60px";
    document.querySelector("#smcircle").style.backgroundColor = "white";
    document.querySelector("#smcircle").style.mixBlendMode = "difference";
});
document.querySelector(".circle").addEventListener("mouseleave", function(){
    document.querySelector("#smcircle").style.border = "2px solid black";
    document.querySelector("#smcircle").style.width = "15px";
    document.querySelector("#smcircle").style.height = "15px";
    document.querySelector("#smcircle").style.backgroundColor = "transparent";
    document.querySelector("#smcircle").style.mixBlendMode = "initial";
});

//image hover cursor
document.querySelectorAll(".insider").forEach(function(elm){
    elm.addEventListener("mousemove", function(dets){
        document.querySelector("#smcircle").style.display = "none";
        function imgcursor(){
            gsap.to("#imgcursor",{
                width:"130px",
                height:"130px",
                opacity:10,
                duration:.5,
                ease: "Power1.easeOut"
            });
            document.querySelector("#imgcursor").style.display = "initial";
            document.querySelector("#imgcursor").style.top = `${dets.clientY}px`;
            document.querySelector("#imgcursor").style.left = `${dets.clientX}px`;
            document.querySelector("#imgcursor").style.mixBlendMode = "difference";
        }
        window.requestAnimationFrame(imgcursor);
        window.requestAnimationFrame(smcircle);
        document.querySelector("#main").style.backgroundColor = dets.target.dataset.color;
    })
    
    elm.addEventListener("mouseleave", function(){
        document.querySelector("#smcircle").style.display = "initial";
        function imgcursor(){
            document.querySelector("#imgcursor").style.display = "none";
            document.querySelector("#imgcursor").style.top = "initial";
            document.querySelector("#imgcursor").style.left = "initial";
            document.querySelector("#imgcursor").style.mixBlendMode = "initial";        
            gsap.to("#imgcursor",{
                    width:"20px",
                    height:"20px",
                    opacity:0,
                    duration:.05,
                    ease: "Power1.easeIn"
                });
        }
        window.requestAnimationFrame(imgcursor);
        window.requestAnimationFrame(smcircle);
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
    })
})

// email wobbe
document.querySelector(".circle").addEventListener("mousemove", function(dets){
    document.querySelector(".circle").style.transform = `translate(${dets.clientX*.05}px, ${dets.clientY*.05}px)`;
})
document.querySelector(".circle").addEventListener("mouseleave", function(){
    document.querySelector(".circle").style.transform = `initial`;
})


// var tl = gsap.timeline();
// document.querySelectorAll(".txt").forEach(function(elm){
//     gsap.from(".txt h4",{
//         scrollTrigger:{
//             trigger: elm,
//             start: "10% 50%",
//             end: "40% 35%",
//             scrub: true,
//             markers: true
//         },
//         y: "-30%",
//         opacity: 0,
//         ease: "Power1.easeInOut",
//         duration: 2
//     });
//     gsap.from(".txt p",{
//         scrollTrigger:{
//             trigger: elm,
//             start: "10% 50%",
//             end: "40% 35%",
//             scrub: true,
//             markers: true
//         },
//         y: "30%",
//         opacity: 0,
//         ease: "Power1.easeInOut",
//         duration: 2
//     });
// })

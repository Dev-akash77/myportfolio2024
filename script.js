var typed = new Typed('.typing', {
    strings: ["Web Developer","Youtuber","Freelancer","Teacher"],
    typeSpeed: 50,
    backSpeed:50,
    loop:true,
})

// sticky nav bar
let header=document.querySelector('#header_main');
let skill=document.querySelector('#skill_main');
let about=document.querySelector('#about_main');

// let showInput=new IntersectionObserver((entries)=>{
//  const entry=entries[0];
//  if (entry.isIntersecting===false) {
//     header.classList.add('sticky') 
//  } else {
//     header.classList.remove('sticky'); 
//  }
// },{
//     root:null,
//     threshold:0
// })
// showInput.observe(skill)


let all_c_n=document.querySelectorAll('.counter_number');
let main_counter=document.querySelector('#counter_number_main');
let sped=200;

let showcount=new IntersectionObserver((entries)=>{
  let entry=entries[0];
  if (entry.isIntersecting==true) {
    all_c_n.forEach((curElem)=>{
        const showNumber=()=>{
        const target=+(curElem.dataset.number);
        const counter=parseInt(curElem.innerHTML);
         const devide=Math.floor(target/sped);
         if (target>counter) {
            curElem.innerHTML=counter+devide+' +';
            setTimeout(showNumber,10);
         }
        }
    showNumber()
    })
  } else {
    all_c_n.forEach((curElem)=>{
        curElem.innerHTML=0;
    })
  }
},{
    root:null,
    threshold:0
})
showcount.observe(main_counter)



// let submitBtn=document.querySelector('.submit_from')
//   submitBtn.onclick=(event)=>{
//     event.preventDefault()
// }

let herosec=document.querySelector("#hero_main")
let home=document.querySelector(".home")
let hero= new IntersectionObserver((entries)=>{
    let arr=entries[0];
    if (arr.isIntersecting===true) {
        home.classList.add("active")
    } else {
        home.classList.remove("active")
    }
},{
  threshold:0,
  root:null
})
hero.observe(herosec)


let sabout=document.querySelector(".about")
let aboutm= new IntersectionObserver((entries)=>{
    let arr=entries[0];
    if (arr.isIntersecting===true) {
        sabout.classList.add("active")
    } else {
        sabout.classList.remove("active")
    }
},{
  threshold:0,
  root:null
})
aboutm.observe(about)


let servicessec=document.querySelector("#counter_number_main")
let ser=document.querySelector(".services")
let services= new IntersectionObserver((entries)=>{
    let arr=entries[0];
    if (arr.isIntersecting===true) {
        ser.classList.add("active")
    } else {
        ser.classList.remove("active")
    }
},{
  threshold:0,
  root:null
})
services.observe(servicessec)

let portfoliosec=document.querySelector("#work_main")
let portfolio=document.querySelector(".portfolio")
let port= new IntersectionObserver((entries)=>{
    let arr=entries[0];
    if (arr.isIntersecting===true) {
        portfolio.classList.add("active")
    } else {
        portfolio.classList.remove("active")
    }
},{
  threshold:0,
  root:null
})
port.observe(portfoliosec)



let testimonialsec=document.querySelector("#contact_main")
let testimonial=document.querySelector(".testimonial")
let test= new IntersectionObserver((entries)=>{
    let arr=entries[0];
    if (arr.isIntersecting===true) {
        testimonial.classList.add("active")
    } else {
        testimonial.classList.remove("active")
    }
},{
  threshold:0,
  root:null
})
test.observe(testimonialsec)

 // hambarger menue starat
let bar=document.querySelector(".fa-bars-staggered")
let menue=document.querySelector("nav")
let close=document.querySelector(".fa-xmark")
let html=document.querySelector("html")
let body=document.querySelector("body")
let ancor=document.querySelectorAll("nav a")
let container=document.querySelector('.container')
bar.onclick=(e)=>{
    menue.classList.add("hamberger");
    close.style.display="block";
    bar.style.display="none";
    html.style.overflowY="hidden"
    body.style.overflowY="hidden"
}
close.onclick=()=>{
    menue.classList.remove("hamberger");
    close.style.display="none";
    bar.style.display="block";
    html.style.overflowY="auto"
    body.style.overflowY="auto"
}
menue.onclick=(e)=>{
 ancor.forEach((curElem)=>{
    curElem.onclick=()=>{
        menue.classList.remove("hamberger");
        close.style.display="none";
        bar.style.display="block";
        html.style.overflowY="auto"
        body.style.overflowY="auto"
    }
 })
}
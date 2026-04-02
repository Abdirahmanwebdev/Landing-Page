// NAV TOGGLE
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});

// SCROLL ANIMATION
ScrollReveal().reveal('.section', {
    delay:200,
    distance:'50px',
    origin:'bottom'
});

// EMAILJS
(function(){
emailjs.init("YOUR_PUBLIC_KEY"); // 🔴 HALKAN KU BADAL
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
e.preventDefault();

emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
name:this.name.value,
email:this.email.value,
message:this.message.value
}).then(()=>{
alert("Message Sent ✅");
});
});

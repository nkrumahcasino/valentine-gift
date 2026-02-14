const correctKey = "iloveyou";

// Slides can be images or videos
const slides = [
    {type:"image", src:"images/eunice1.jpeg"},
    {type:"image", src:"images/eunice2.jpeg"},
    {type:"image", src:"images/eunice3.jpeg"},
    {type:"video", src:"videos/date1.mp4"}
];
let currentSlide = 0;

function decryptAccess() {
    const input = document.getElementById("password").value;

    if (btoa(input) === btoa(correctKey)) {

        document.getElementById("loginPage").style.display = "none";
        const lovePage = document.getElementById("lovePage");
        lovePage.style.display = "block";

        // Show main video
        lovePage.classList.add("showVideo");

        startTypewriter();
        startHearts();
        startCountdown();
    } else {
        document.getElementById("error").innerText = "Decryption Failed ❌";
    }
}

// Typewriter
const message = "Secure connection established. Even across distance, your signal is the strongest in my life. I choose you, always.";
let index = 0;
function startTypewriter() {
    if (index < message.length) {
        document.getElementById("typedMessage").innerHTML += message.charAt(index);
        index++;
        setTimeout(startTypewriter,40);
    }
}

// Hearts
function startHearts() {
    setInterval(()=>{
        let heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"vw";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),6000);
    },300);
}

// Music
function toggleMusic(){
    let music=document.getElementById("bgMusic");
    if(music.paused){ music.play().catch(()=>alert("Click page first, then press play"));}
    else{ music.pause();}
}

// Video sound toggle
function toggleVideoSound(){
    const bgVideo = document.getElementById("bgVideo");
    bgVideo.muted = !bgVideo.muted;
    alert(bgVideo.muted ? "Video muted" : "Video unmuted");
}

// Countdown
function startCountdown() {
    const meetDate=new Date("June 1, 2026 00:00:00").getTime();
    setInterval(()=>{
        const now=new Date().getTime();
        const distance=meetDate-now;
        const days=Math.floor(distance/(1000*60*60*24));
        document.getElementById("countdown").innerHTML="Days until we close the distance: "+days+" ❤️";
    },1000);
}

// LOVE MESSAGE (valentine's day cinematic)
const paragraphs = [
    "Happy Valentine’s Day, my love ❤️",
    "Even though we are miles apart, every beat of my heart reaches you.",
    "Your smile lights up my world, your laugh is my favorite song, and thinking of you makes every day feel like magic ✨.",
    "Today, I want you to know that distance can’t weaken what we have. I choose you — in every moment, in every heartbeat, always 💌.",
    "So close your eyes, imagine I’m right there with you, and feel my love wrapping around you like the sweetest melody 💖.",
    "Forever yours,\n[CASINO]"
];

let paraIndex = 0;
let charIndex = 0;

function startTypewriter() {
    if (paraIndex < paragraphs.length) {
        const currentPara = paragraphs[paraIndex];
        const typedMessage = document.getElementById("typedMessage");

        if (charIndex < currentPara.length) {
            typedMessage.innerHTML += currentPara.charAt(charIndex);
            charIndex++;
            setTimeout(startTypewriter, 40); // typing speed
        } else {
            typedMessage.innerHTML += "<br><br>"; // paragraph spacing
            paraIndex++;
            charIndex = 0;
            setTimeout(startTypewriter, 600); // pause between paragraphs
        }
    }
}


// Slider
function updateSlide(){
    const slideImg=document.getElementById("slideImg");
    const slideVideo=document.getElementById("slideVideo");
    const current=slides[currentSlide];

    if(current.type==="image"){
        slideVideo.style.display="none";
        slideVideo.pause();
        slideImg.src=current.src;
        slideImg.style.display="block";
    } else {
        slideImg.style.display="none";
        slideVideo.src=current.src;
        slideVideo.style.display="block";
        slideVideo.muted=true;
        slideVideo.play();
    }
}

function nextSlide(){
    currentSlide=(currentSlide+1)%slides.length;
    updateSlide();
}

function prevSlide(){
    currentSlide=(currentSlide-1+slides.length)%slides.length;
    updateSlide();
}

// Initialize first slide
updateSlide();

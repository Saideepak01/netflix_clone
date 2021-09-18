const main = document.querySelector(".topMain")
main.innerHTML = `
<div class="bgimg">
    <div class="navi">
        <div class="logo">
            <img class="flixLogo" src="netflix-logo-history-png-33.png" alt="netflixLogo">
        </div>
        <nav class="rightSide">
            <form>
                <select class="language">
                    <option value="en">English</option>
                    <option value="hn">हिंदी</option>
                </select>
                <button type="submit" class="signin">Sign In</button>
            </form>
        </nav>
    </div>
    <div class="text">
        <p class="bold">Unlimited movies, TV shows and more.</p>
        <p class="normal">Watch anywhere. Cancel anytime.</p>
        <p class="normal">Ready to watch? Enter your email to create or restart your membership.</p>
    </div>
    <form class="topSignIn">
        <input class="emid" type="text" placeholder="Email Address">
        <button type="submit" class="start">Get Started <i class="fas fa-chevron-right"></i></button>
    </form>
</div>
`;

const tv = document.querySelector(".tvScreen");
tv.innerHTML = `
<div class="btm">
    <p class="bold">Enjoy on your TV.</p>
    <p class="normal">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
    <img class="tele" src="tv.png" alt="Television">
</div>
`;

const phone = document.querySelector(".phScreen");
phone.innerHTML = `
<div class="btm">
    <p class="bold">Download your shows to watch offline.</p>
    <p class="normal">Save your favourites easily and always have something to watch.</p>
    <img class="mob" src="mobile-0819.jpg" alt="Television">
    <div class="downloadingAni">
        <img src="boxshot.png" alt="st3" class="boximg">
        <p class="smallwhite">Stranger things <br/> Downloading...</p>
        <img src="download-icon.gif" alt="gif" class="gifs">
    </div>
</div>
`;

const macScreen = document.querySelector(".watchEverywhere");
macScreen.innerHTML = `
<div class="btm">
    <p class="bold">Watch everywhere.</p>
    <p class="normal">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    <img class="devices" src="device-pile-in.png" alt="devices">
</div>
`;

const profile = document.querySelector(".childernProfile");
profile.innerHTML = `
<div class="btm">
    <p class="bold">Create profiles for children.</p>
    <p class="normal">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
    <img class="profile" src="kids.png" alt="devices">
</div>
`;

const questions = document.querySelector(".faq");
questions.innerHTML = `
<p class="normal">Frequently Asked Questions</p>
<p class="que">What is Netflix?</p>
<div class="panel">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>

<p class="que">How much does Netflix cost?</p>
<div class="panel">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts</div>

<p class="que">Where can I watch?</p>
<div class="panel">Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>

<p class="que">How do I cancel?</p>
<div class="panel">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>

<p class="que">What can I watch on Netflix?</p>
<div class="panel">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>

<p class="que">Is Netflix good for kids?</p>
<div class="panel">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br/> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>

<p class="normal">Ready to watch? Enter your email to create or restart your membership.</p>
<form class="signIn">
    <input class="emid1" type="text" placeholder="Email Address">
    <button type="submit" class="start">Get Started <i class="fas fa-chevron-right"></i></button>
</form>
`;

document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("que");
    var panel = document.getElementsByClassName('panel');
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');
    
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
    
    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
});

const bottom = document.querySelector(".footer");
bottom.innerHTML = `
<p class="normal">Questions? Call 000-800-040-1843</p>
<ul class="links smallwhite">
    <li>FAQ</li>
    <li>Media center</li>
    <li>Ways to watch</li>
    <li>Cookie Preferences</li>
    <li>Speed Test</li>
    <li>Help center</li>
    <li>Investor Relations</li>
    <li>Terms of Use</li>
    <li>Corporation Information</li>
    <li>Legal Notices</li>
    <li>Account</li>
    <li>Jobs</li>
    <li>Privacy</li>
    <li>Contact Us</li>
    <li>Only on Netflix</li>
</ul>
<form class="listings">
    <select class="language">
        <option value="en">English</option>
        <option value="hn">हिंदी</option>
    </select>
</form>
<p class="smallwhite">Netflix India</p>
`;



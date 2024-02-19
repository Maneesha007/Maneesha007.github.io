const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 250,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

document.getElementById('download-resume').addEventListener('click', function(event) {
    // Prevent the default link behavior (i.e., navigating to the resume.pdf)
    event.preventDefault();

    // Get the URL of the resume file
    var resumeUrl = this.getAttribute('href');

    // Create an anchor element to trigger the download
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'resume.pdf'; // Specify the filename for download
    downloadLink.click();
});

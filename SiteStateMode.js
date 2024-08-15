var sole = 'images/SunLightMode.svg';
var luna = 'images/MoonDarkMode.svg';
var emojiCorrente = sole;

$(document).ready(function() {
    
    var emojiElement = document.getElementById('SiteButtonStateMode');
    var logoImage = document.getElementById('logo');
    var IssueButton = document.getElementById('issuebutton');
    var github = document.getElementById('github');

    emojiElement.addEventListener('touchstart' in window ? 'touchstart' : 'mousedown', function() {

        if (event.button === 0){
            var htmlElement = document.documentElement;
        
            if (emojiCorrente == sole) {
        
                emojiCorrente = luna;
                htmlElement.setAttribute('data-bs-theme', 'dark');
                logoImage.src = 'images/LogoDarkMode.svg';
                IssueButton.src='images/IssueButtonDarkMode.svg';
                github.src='images/github-markDarkMode.svg';
            }
            else {
            
                emojiCorrente = sole;
                htmlElement.setAttribute('data-bs-theme', 'light');
                logoImage.src = 'images/Logo.svg';
                IssueButton.src='images/IssueButton.svg';
                github.src= 'images/github-mark.svg';
            
            }

            emojiElement.src = emojiCorrente;

        }
        
    });
});

var sole = '☀️';
var luna = '🌙';
var emojiCorrente = sole;

$(document).ready(function() {
    
    var emojiElement = document.getElementById('SiteButtonStateMode');
    var logoImage = document.getElementById('logo');
    var IssueButton = document.getElementById('issuebutton');
    var github = document.getElementById('github');

    emojiElement.addEventListener('touchstart' in window ? 'touchstart' : 'mousedown', function() {
        
        var htmlElement = document.documentElement;
        
        if (emojiCorrente == sole) {
        
            emojiCorrente = luna;
            htmlElement.setAttribute('data-bs-theme', 'dark');
            logoImage.src = 'imagessvg/LogoDarkMode.svg';
            IssueButton.src='imagessvg/IssueButtonDarkMode.svg';
            github.src='imagessvg/github-markDarkMode.svg';
        }
        else {
            
            emojiCorrente = sole;
            htmlElement.setAttribute('data-bs-theme', 'light');
            logoImage.src = 'imagessvg/Logo.svg';
            IssueButton.src='imagessvg/IssueButton.svg';
            github.src= 'imagessvg/github-mark.svg';
            
        }

        emojiElement.textContent = emojiCorrente;
        
    });
});
var audio = null;
var suonoriproduzione = false;
var RandomIndex = 0;

$(document).ready(function() {
    
    var count = 0;
    
    $("#MainButton").on('mousedown', function(event) {
        $(this).addClass('clicked');
    });

    $("#MainButton").on('mouseup', function(event) {
        $(this).removeClass('clicked');
        count++;
        $("#counter").text("Counter: " + count);

        if (count % 50 === 0) {
            
            if(suonoriproduzione == true){
                
                audio.pause();
                $("#stopButton").removeClass('clicked').removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__bounceOut');
                
            }
            CreateIndex();
            playRandomSound();
            $("#stopButton").show().removeClass('animate__animated animate__bounceOut').addClass('animate__animated animate__bounceIn');
        }
    });

    $("#MainButton").on('touchstart', function(event) {
        $(this).addClass('clicked');
    });

    $("#MainButton").on('touchend', function(event) {
        event.preventDefault();
        $(this).removeClass('clicked');
        count++;
        $("#counter").text("Counter: " + count);

        if (count % 50 === 0) {
            
            if(suonoriproduzione == true){
                
                audio.pause();
                
            }
            CreateIndex();
            playRandomSound();
            $("#stopButton").show().removeClass('clicked').removeClass('animate__animated animate__bounceOut').addClass('animate__animated animate__bounceIn');
        
        }
    });
    
    $("#stopButton").hide().click(function() {
        
            if(suonoriproduzione == true){
                
                audio.pause();
                $("#stopButton").addClass('clicked').removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__bounceOut');
                $("#EmojiSound").removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__bounceOut');
            }
        });
    });


var sounds = [
    
    'sounds/audience-clapping.mp3',
    'sounds/belligol.mp3',
    'sounds/elprimosoundeffect.mp3',
    'sounds/gnomo-ascia.mp3',
    'sounds/Goes-Cristiano.mp3',
    'sounds/imjosemourinho.mp3',
    'sounds/its-broken.mp3',
    'sounds/jojos-golden-wind.mp3',
    'sounds/jonhcena.mp3',
    'sounds/metal-pipe.mp3',
    'sounds/outrosong.mp3',
    'sounds/quack.mp3',
    'sounds/royal-laugh.mp3',
    'sounds/siu.mp3',
    'sounds/spiderman-meme.mp3',
    'sounds/spongebobsquarepants.mp3',
    'sounds/this-is-elon-musk.mp3',
    'sounds/wtf-is-a-kilometer.mp3',
    'sounds/fbi-open-up.mp3',
    'sounds/french-meme-song.mp3',
    'sounds/lightskin-rizz.mp3',
    'sounds/spongebob-squarepants-zoo.mp3',
    'sounds/fail-sound.mp3',
    'sounds/deja-vu.mp3',
    'sounds/they-ask-you.mp3',
    'sounds/directed-by.mp3',
    
];
function CreateIndex(){
    
    RandomIndex = Math.floor(Math.random() * sounds.length);
    
}

function playRandomSound() {
    
    audio = new Audio(sounds[RandomIndex]);
    audio.addEventListener('ended', function() {
            
            $("#stopButton").removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__bounceOut');
            $("#EmojiSound").removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__bounceOut');
    });
    audio.play();
    suonoriproduzione = true;
    EmojiDisplayer();
}
function EmojiDisplayer() {
    
    var images = [
        
        'emoji/clappinghands.png',
        'emoji/ukflag.png',
        'emoji/mexicoflag.png',
        'emoji/pistol.png',
        'emoji/soccerball.png',
        'emoji/portugalflag.png',
        'emoji/orangecircle.png',
        'emoji/crystalball.png',
        'emoji/handjonh.png',
        'emoji/wrench.png',
        'emoji/salutingface.png',
        'emoji/duck.png',
        'emoji/facesmilingtears.png',
        'emoji/goat.png',
        'emoji/spiderweb.png',
        'emoji/sponge.png',
        'emoji/brain.png',
        'emoji/unitedstatesflag.png',
        'emoji/redlight.png',
        'emoji/franceflag.png',
        'emoji/moai.png',
        'emoji/jellyfish.png',
        'emoji/failmark.png',
        'emoji/dashingaway.png',
        'emoji/pleadingface.png',
        'emoji/clapperboard.png'
        
    ];
    
     var Emoji = images[RandomIndex];
    $("#EmojiSound").attr("src", Emoji).removeClass('animate__animated animate__bounceOut').addClass('animate__animated animate__bounceIn');
    
    
}


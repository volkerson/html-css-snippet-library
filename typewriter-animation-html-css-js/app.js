// save typewrite text in a string
const typewriterText = document.getElementById("typewriter-animation").innerText;

// add the current height of the text as inline style so following elements don't change their position
const typewriterHeight = document.getElementById("typewriter-animation").clientHeight;
const elementHeight = document.querySelector(".typewriter");
elementHeight.style.height = typewriterHeight + 'px';

// create arr and add all chars
const animationArr = [];
for(let i = 0; i < typewriterText.length; i++) {
    i === 0 ? 
    animationArr.push('<span class="invisible cursorPosition">' + typewriterText[i] + '</span>')
    : animationArr.push('<span class="invisible">' + typewriterText[i] + '</span>')
}

// empty div to prevent unexpected behaviour of the ansync function
document.getElementById("typewriter-animation").innerText = "";


for(let int = 0; int < typewriterText.length; int++) {
    setTimeout( () => {
        // make current character visible
        animationArr[int] = '<span class="visible">' + typewriterText[int] + '</span>';
        // move to the border to the next character
        if( (int + 1) < typewriterText.length - 1) {
            animationArr[int + 1] = '<span class="invisible cursorPosition">' + typewriterText[int + 1] + '</span>';
        }       
        animationStr = animationArr.join("");
        document.getElementById("typewriter-animation").innerHTML = animationStr;
    }, 200 * (int + 1))
    
}









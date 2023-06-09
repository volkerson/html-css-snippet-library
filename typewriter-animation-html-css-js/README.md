# Typewriter Animation

## Challenge
I wanted to create a simple typewriter animation with HTML, CSS and Java Script. I found other approaches that work with increasing the width until the whole text is visible. But since not every character has the same width, that solutions is not the best.

Add any text you want in the tag with the id typewriter-animation.
```
<h1 id="typewriter-animation">Add the text you want to animate here.</h1> 
```

If you change the id, you need to change the id in app.js
```
const typeWriter = document.getElementById("typewriter-animation");
```

If you want to change the symbol for the cursor position, make changes in the class .cursorPosition
```
.cursorPosition {
    border-left: 1px solid whitesmoke;
}
```
To get rid of the cursor position completely, make changes in the for-loops.
```
for(let i = 0; i < typewriterText.length; i++) {
    i === 0 ? 
    animationArr.push('<span class="invisible cursorPosition">' + typewriterText[i] + '</span>')
    : animationArr.push('<span class="invisible">' + typewriterText[i] + '</span>')
}
```
```
for(let int = 0; int < typewriterText.length; int++) {
    setTimeout( () => {
        ...
        if( (int + 1) < typewriterText.length - 1) {
            animationArr[int + 1] = '<span class="invisible cursorPosition">' + typewriterText[int + 1] + '</span>';
        }       
        ...
    }, 200 * (int + 1))
    
}
```
You can change the time in the setTimeout-function
```
for(let int = 0; int < typewriterText.length; int++) {
    setTimeout( () => {    
        ...
    }, 200 * (int + 1))
    
}
```

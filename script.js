var myBody = document.querySelector("body");

function generateRandomHexColor() {
    var hexCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexCharacters.length);
        color = color + hexCharacters[randomIndex];
    }
    
    return color;
}

function changeBackground() {
    var nextColor = generateRandomHexColor();
    myBody.style.backgroundColor = nextColor;
}

window.onload = function() {
    changeBackground();
    
    setInterval(changeBackground, 1000);
};
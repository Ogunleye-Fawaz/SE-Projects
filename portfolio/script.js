let i = 0;
let text = "Hello there, I am fawaz! Travel through my portfolio";
let speed = 50;

function typeWriter() {
    if(i < text.length) {
        document.getElementById('introduction').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
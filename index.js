
btn = document.querySelectorAll('.drum')
for (let i = 0; i< btn.length;i++){
    btn[i].addEventListener('click', function() {
        makeSound(this.innerHTML)

    })
}
function makeSound(key) {
    let element = {}
        element = document.querySelector('.' + key)
    let soundSource = 'sounds/' + element.id +'.mp3';
    let sound = new Audio(soundSource);
    sound.play();
    animateButton(key);
}
function animateButton(currentKey) {
let element = document.querySelector('.' + currentKey)
    element.classList.toggle('pressed')
    setTimeout(function () {
        element.classList.toggle('pressed')
    },100)
}

// Keyboard Buttons

document.addEventListener("keydown", function (e) {
    makeSound(e.key)
});


document.addEventListener("DOMContentLoaded", function() {
    const min = 1
    const max = 2
    const button = document.getElementById("btn")
    const text = document.getElementById("headerh1")
    const text2 = document.getElementById("headerh2")

    let rando

    button.onclick = function() {
        rando = Math.floor(Math.random() * max) + min
        text.textContent = rando
}
})



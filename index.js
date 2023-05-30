let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increase() {  
    count += 1
    countEl.textContent = count
}
function save() {
    saveEl.textContent += count + " - "
    count = 0
}
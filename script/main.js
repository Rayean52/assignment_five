function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

const buttons = document.getElementsByClassName('card-btn');
for (const btn of buttons) {
    btn.addEventListener('click', function () {
        alert("Board Updated successfully");

        let taskDecrement = document.getElementById('task-decrement').innerText;
        let convertedTaskDecrement = parseInt(taskDecrement);
        let decrementResult = convertedTaskDecrement - 1;
        document.getElementById('task-decrement').innerText = decrementResult;

        let taskIncrement = document.getElementById('task-increment').innerText;
        let convertedTaskIncrement = parseInt(taskIncrement);
        let incrementResult = convertedTaskIncrement + 1;
        document.getElementById('task-increment').innerText = incrementResult;
        
        btn.setAttribute('disabled', true);


    })
}

document.getElementById('clear-history')
    .addEventListener('click', function () {
        document.getElementById('add-activity').innerHTML = "";
    })

document.getElementById('btn-theme').addEventListener('click', function(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color
})
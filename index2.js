const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const idea = document.querySelector('#idea')
const quiz = document.querySelector('#quiz')
const notifications = document.querySelector('#notif')

if (btn1) {
    btn1.addEventListener('click', (e) => {
        e.preventDefault()
        const link = document.createElement("a");
        const content = idea.textContent
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "idea.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    })
}


if (btn2) {
    btn2.addEventListener('click', (e) => {
        e.preventDefault()
        const link = document.createElement("a");
        const content = quiz.textContent
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "quiz.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    })
}


if (btn3) {
    btn3.addEventListener('click', (e) => {
        e.preventDefault()
        const link = document.createElement("a");
        const content = notifications.textContent
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "notif.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    })
}




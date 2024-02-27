const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const idea = document.querySelector('#idea')
const quiz = document.querySelector('#quiz')

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
        console.log("Hello");
        const link = document.createElement("a");
        const content = quiz.textContent
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "quiz.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    })
}



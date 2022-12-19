// Form submit using onSubmit method
// Toolbar button click using onToolbarClick method

const body = document.querySelector('body')
const menuBtn = document.getElementById('hamburger')
const contactForm = document.getElementById('contactForm');
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

menuBtn.addEventListener('click', () => {
    body.classList.toggle('is-active')
})

class contact {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    onSubmit(name, email, subject, message) {
        let result = `Thank you for contact us. The following message has been sent successfully.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
        alert(result);
    }

    btnClick(name, email, subject, message) {
        let result = `You've clicked this button. Here's the message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
        alert(result);
    }
}

let form = new contact();

contactForm.addEventListener('submit', (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    form.onSubmit(name, email, subject, message);
})

btn1.addEventListener('click', (e) => {
    form.btnClick('Steven', 'steven@email.com', 'Web Dev', 'Hello World');
})

btn2.addEventListener('click', (e) => {
    form.btnClick('Tracy', 'tracy@email.com', 'Bill Statement', 'Double check with last statement.');
})

btn3.addEventListener('click', (e) => {
    form.btnClick('Santa', 'santa@email.com', 'Time of the Year', 'It is now XMAS');
})

btn4.addEventListener('click', (e) => {
    form.btnClick('Bill', 'bill@email.com', 'Software', 'Microsoft');
})
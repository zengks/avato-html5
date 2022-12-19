// Form submit using onSubmit method
// Toolbar button click using onToolbarClick method

const body = document.querySelector('body');
const menuBtn = document.getElementById('hamburger');
const contactForm = document.getElementById('contactForm');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// Hide/Unhide the navbar items when clicking on the hamburger menu icon
menuBtn.addEventListener('click', () => {
    body.classList.toggle('is-active');
})

class contact {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.onSubmit = this.onSubmit.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }

    onSubmit() {
        let result = `Thank you for contacting us. The following message has been sent successfully.\n\nName: ${this.name}\nEmail: ${this.email}\nSubject: ${this.subject}\nMessage: ${this.message}`;
        alert(result);
    }

    btnClick() {
        let result = `You've clicked this button. Here's the message:\n\nName: ${this.name}\nEmail: ${this.email}\nSubject: ${this.subject}\nMessage: ${this.message}`;
        alert(result);
    }
}

contactForm.addEventListener('submit', (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    let form = new contact(name, email, subject, message);
    form.onSubmit();
})

btn1.addEventListener('click', () => {
    let form = new contact('Steven', 'steven@email.com', 'Web Dev', 'Hello World');
    form.btnClick();
})

btn2.addEventListener('click', () => {
    let form = new contact('Tracy', 'tracy@email.com', 'Bill Statement', 'Double check with last statement.');
    form.btnClick();
})

btn3.addEventListener('click', () => {
    let form = new contact('Santa', 'santa@email.com', 'Time of the Year', 'It is now XMAS');
    form.btnClick();
})

btn4.addEventListener('click', () => {
    let form = new contact('Bill', 'bill@email.com', 'Software', 'Microsoft');
    form.btnClick();
})
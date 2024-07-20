const navbtn = document.querySelector('#nav-btn');
navbtn.addEventListener('click', () => {
    const navbar = document.querySelector(".navbar-nav");
    navbar.classList.toggle('show-navbar');
});
const projectbtn = document.querySelector('.project-btn');
projectbtn.addEventListener('click', () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.add('modal-visible');
});
const modalbtn = document.querySelector('#modal-close');
modalbtn.addEventListener('click', () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove('modal-visible');
});
const modalcards = document.querySelectorAll('.modal-card');
modalcards.forEach((modalcard) => {
    modalcard.addEventListener('click', () => {
        const check = modalcard.querySelector(".mcard-inputcheck");
        if (!check.hasAttribute('disabled'))
            check.checked = true;
    })
});
const showModal = (op) => {
    const modal = document.querySelector(".modal-container");
    modal.classList.add('modal-visible');
    let checkbox = '';
    checkbox = (op == 'bamboo') ? 'mcard-bamboo-checkbox' : 'mcard-black-checkbox';
    const checkboxElem = document.getElementById(checkbox);
    checkboxElem.closest('.modal-card').scrollIntoView({ block: "center" });
    checkboxElem.checked = true;
}
const mcardsbtnContinue = document.querySelectorAll(".mcard-f-btn");
mcardsbtnContinue.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const modal = document.querySelector(".modal-container");
        modal.classList.remove('modal-visible');
        const msg = document.querySelector('.msg-container');
        msg.classList.add('modal-visible');
    });
});
const msgbtn = document.querySelector(".msg-btn");
msgbtn.addEventListener('click',()=>{
        const msg = document.querySelector('.msg-container');
        msg.classList.remove('modal-visible');
});

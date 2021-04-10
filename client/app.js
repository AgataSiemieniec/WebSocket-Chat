
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('message-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

let userName = '';

const login = (e) => {
    e.preventDefault();
    if(!userNameInput.value){
        alert('Sign in, please!');
    } else {
        userName = userNameInput.value;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    };
};

const sendMessage = (e) => {
    e.preventDefault();
    if(!messageContentInpute.value){
        alert('Wright a message, please!');
    } else {
        addMessage(userName, messageContentInput.value);
        messageContentInpute.value = '';
    };    
};

const addMessage = (author, content) => {
    const message = document.createElement('li');
    message.classList.add('message, message--received');
    if(author === userName){
        message.classList.add('message--self');
    };
    message.innerHTML =`
    <h3 class="message__author">${userName  === author ? 'You' : author}</h3>;
    <div class="message__content">${content}</div>;
    `;
    messagesList.appendChild(message);
};

loginForm.addEventListener('submit', e => {
    login(e);
  });
  
addMessageForm.addEventListener('submit', e => {
    sendMessage(e);
});
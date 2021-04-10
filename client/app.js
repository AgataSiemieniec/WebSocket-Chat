
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

const socket = io();

let userName = '';

socket.on('message', ({ author, content }) => addMessage(author, content));

const login = event => {
    event.preventDefault();
    if(!userNameInput.value){
        alert('Sign in, please!');
    } else {
        userNameInput.value = userName;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
};

const sendMessage = e => {
    e.preventDefault();

    let messageContent = messageContentInput.value;

    if(!messageContent ){
        alert('Wright a message, please!');
    } else {
        addMessage(userName, messageContent);
        socket.emit('message', { author: userName, content: messageContent });
        messageContentInput.value = '';
    } 
};

const addMessage = (author, content) => {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName) message.classList.add('message--self');
    message.innerHTML = `
      <h3 class="message__author">${userName === author ? 'You' : author }</h3>
      <div class="message__content">
      userName
      </div>
    `;
    messagesList.appendChild(message);
};

loginForm.addEventListener('submit', event => {
    login(event);
  });
  
addMessageForm.addEventListener('submit', event => {
    sendMessage(event);
});
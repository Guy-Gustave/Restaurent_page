function home() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const containerh = document.createElement('div');
  const bookButton = document.createElement('button');
  containerh.setAttribute('id', 'home-container');
  bookButton.setAttribute('id', 'reserve-button');
  const message = document.createElement('p');
  message.setAttribute('id', 'accuei-message');
  message.textContent = 'the restaurent that cares yur choice, the food of al season ';
  containerh.appendChild(message);
  bookButton.textContent = 'order your favourite dish';

  content.appendChild(containerh);
  content.appendChild(bookButton);
}

export default { home };

function home() {
  let content =  document.getElementById('content');
  content.innerHTML= "";
  let containerh =  document.createElement('div');
  let bookButton = document.createElement('button');
  containerh.setAttribute("id", "home-container");
  bookButton.setAttribute('id', 'reserve-button');

  let message = document.createElement('p');
  message.setAttribute('id', 'accuei-message');
  message.textContent = 'the restaurent that cares yur choice, the food of al season ';
  containerh.appendChild(message);
  bookButton.textContent= 'order your favourite dish'

  content.appendChild(containerh);
  content.appendChild(bookButton);

  
};

export {home};

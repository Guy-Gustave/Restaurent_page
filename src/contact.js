const contact = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const contactBox = document.createElement('div');
  const contactUs = document.createElement('em');
  const phone = document.createElement('p');
  const email = document.createElement('m');
  const address = document.createElement('p');

  contactUs.classList.add('info-h');
  phone.classList.add('info');
  email.classList.add('info');
  address.classList.add('info');
  contactBox.setAttribute('id', 'contact-box');
  content.appendChild(contactBox);
  contactBox.appendChild(contactUs);
  contactBox.appendChild(phone);
  contactBox.appendChild(email);
  contactBox.appendChild(address);
  contactUs.textContent = 'Contact Us';
  phone.textContent = 'Telephone : +257 79 171532';
  email.textContent = 'Email  :guymoustapha@gmail.com';
  address.textContent = 'Our Address';
  address.textContent = 'Adress :bujumbura, avenue du commerce, 03';
};

export default { contact };
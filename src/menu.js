function menu() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const menucontent = document.createElement('div');
  const menutitle = document.createElement('div');
  const menuText = document.createElement('p');
  menucontent.setAttribute('id', 'menu-container');
  menutitle.id = 'menu-header';
  menuText.id = 'menu-text';
  menuText.textContent = `Star Food has The best food from all Galaxies 
  Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, 
  dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos. 
`;
  content.appendChild(menucontent);
  content.appendChild(menutitle);
  content.appendChild(menuText);

  for (let i = 0; i < 4; i + 1) {
    const menuItem = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('em');
    const descriptio = document.createElement('p');

    menuItem.classList.add('menu-item');
    image.classList.add('item-image');
    name.classList.add('item-name');
    descriptio.classList.add('item-desc');
    image.setAttribute('src', 'https://www.hotelclubdulac.com/wp-content/uploads/2016/11/IMG_1821-T-768x512.jpg');
    name.textContent = 'delicious dishes';
    descriptio.textContent = 'les mets delicieux, ne manquez pas de souper';

    menuItem.appendChild(image);
    menuItem.appendChild(name);
    menuItem.appendChild(descriptio);
    menucontent.appendChild(menuItem);
  }
}
export default { menu };
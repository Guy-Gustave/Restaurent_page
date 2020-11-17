function menu() {
  let content = document.getElementById('content');
  content.innerHTML= "";
  console.log('i am clicked')
  
  let menucontent = document.createElement('div');
  let menutitle = document.createElement('div');
  let menuText = document.createElement('p')

  menucontent.setAttribute("id", "menu-container");
  menutitle.id = "menu-header";
  menuText.id = "menu-text";

  menuText.textContent = `Star Food has The best food from all Galaxies 
  Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, 
  dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos. 
`

  content.appendChild(menucontent);
  content.appendChild(menutitle);
  content.appendChild(menuText)

  for (let i = 0; i< 4; i++) {
    let menuItem = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('em');
    let descriptio = document.createElement('p');

    menuItem.classList.add('menu-item');
    image.classList.add('item-image');
    name.classList.add('item-name');
    descriptio.classList.add('item-desc');
    image.setAttribute('src','https://www.hotelclubdulac.com/wp-content/uploads/2016/11/IMG_1821-T-768x512.jpg');
    name.textContent = 'delicious dishes'
    descriptio.textContent= 'les mets delicieux, ne manquez pas de souper'

    menuItem.appendChild(image);
    menuItem.appendChild(name);
    menuItem.appendChild(descriptio)
    menucontent.appendChild(menuItem);
  }
  
}
export {menu};
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

openMenu.addEventListener('click', () => {
  mobileMenu.style.width = '100%';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.width = '0';
});

const artists = [
  {
    name: 'Kendrick Lamar',
    role: 'Headline Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/kendrick.jpg',
  },
  {
    name: 'Rihanna',
    role: 'Headline Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/rihanna.jpg',
  },
  {
    name: 'Skepta',
    role: 'Headline Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/skepta.jpg',
  },
  {
    name: 'Santino Le Saint',
    role: 'Support Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/santino.jpg',
  },
  {
    name: 'Mustapha the Poet',
    role: 'Support Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/mustapha.jpg',
  },
  {
    name: 'Unknown T',
    role: 'Support Artist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod',
    image: 'assets/jpg/unknownt.jpg',
  },
];

artists.forEach((element) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  const hr = document.createElement('hr');
  const h6 = document.createElement('h6');
  li.setAttribute('class', 'artist-li');
  img.setAttribute('class', 'artist-img');
  div.setAttribute('class', 'artist-info');
  h4.setAttribute('class', 'artist-h4');
  h5.setAttribute('class', 'artist-h5');
  hr.setAttribute('class', 'hr-neutral');
  hr.setAttribute('align', 'left');
  h6.setAttribute('class', 'artist-h6');
  img.setAttribute('src', `${element.image}`);
  h4.innerHTML = `${element.name}`;
  h5.innerHTML = `${element.role}`;
  h6.innerHTML = `${element.desc}`;
  div.innerHTML += h4.outerHTML + h5.outerHTML + hr.outerHTML + h6.outerHTML;
  li.innerHTML += img.outerHTML + div.outerHTML;
  document.querySelector('.artists-ul').appendChild(li);
});

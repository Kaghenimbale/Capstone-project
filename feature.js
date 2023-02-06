const speakerid = document.getElementById('speaker-id');
const moreBtn = document.querySelector('.feature-btn');
let lastIndex = 2;

const Speakers = [
  {
    id: 'speakers1',
    name: 'Dario Kasuku',
    profession: 'Owner of Pjb (Promo Jeune Basket), and Promoter of Kivu International school',
    Profil: {
      src: 'image/Dario.jpeg',
      alt: 'Dariokasuku',
    },
    about: 'He is trying to provide world wide opportunity to young children of the Republic Democratic of Congo throught Basketball',
    background: {
      src: 'image/square.jpg',
      alt: 'sqaure',
    },
  },

  {
    id: 'speakers2',
    name: 'Innoss B',
    profession: 'The youngest Musician in the republic Democratic of Congo. Who was born in Goma the capital of North Kivu province',
    Profil: {
      src: 'image/InnossB.jpg',
      alt: 'Dariokasuku',
    },
    about: 'He is always here for people of his Hometown, displaced of war in coming from Others territory of North Kivu.',
    background: {
      src: 'image/square.jpg',
      alt: 'sqaure',
    },
  },

  {
    id: 'speakers3',
    name: 'Camille Ntoto',
    profession: 'Owner of UJN (Un jour Nouveau.), and Promoter of Africa New day school',
    Profil: {
      src: 'image/Ntoto.jpeg',
      alt: 'Dariokasuku',
    },
    about: 'He is trying to provide world wide opportunity to young children of the Republic Democratic of Congo. And Help young people with non ability to study by providing them Scholarship.',
    background: {
      src: 'image/square.jpg',
      alt: 'sqaure',
    },
  },

  {
    id: 'speakers4',
    name: 'Fally Ipupa',
    profession: 'The best Music Artist in the Republic Democratic of Congo. Influencer of young Music Artist.',
    Profil: {
      src: 'image/Fally-ipupa.jpeg',
      alt: 'Dariokasuku',
    },
    about: 'He is an congolese Artist living in France. Named Eagle, and Daddy of 6 childreen and Married to Nana Ketchup.',
    background: {
      src: 'image/square.jpg',
      alt: 'sqaure',
    },
  },
];

const renderItems = (Speakers) => {
  speakerid.innerHTML = '';
  Speakers.forEach((speaker) => {
    const featureSpeaker = `
  <div class="profil">
  <div class="speakerprofile"><img src="${speaker.Profil.src}" alt="${speaker.Profil.alt}"></div>
  <div class='background'><img src="${speaker.background.src}" alt="${speaker.background.alt}"></div>
  </div>
  <div class='about-speaker'>
  <h3>${speaker.name}</h3>
  <p class="background-speaker">${speaker.profession}</p>
  <div class="line-speaker"></div>
  <p class="about">${speaker.about}</p>
  </div>
  `;

    const speakerdiv = document.createElement('div');
    speakerdiv.className = 'User';
    speakerdiv.innerHTML = featureSpeaker;
    speakerid.appendChild(speakerdiv);
  });
};

renderItems(Speakers.slice(0, lastIndex));

moreBtn.addEventListener('click', () => {
  renderItems(Speakers.slice(0, lastIndex + 2));
});

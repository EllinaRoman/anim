import heartSrc from '../png/heart.png';

class Like {
  constructor() {
    this.button = document.querySelector('.like-container');
  }

  init() {
    this.button.addEventListener('click', () => {
      const rect = this.button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const heart = document.createElement('img');
      heart.src = heartSrc;
      heart.style.position = 'fixed';
      const heartSize = 30;
      heart.style.left = centerX - heartSize / 2 + 'px';
      heart.style.top = centerY - heartSize / 2 + 'px';
      document.body.append(heart);

      const way = [
        [0, -1, 0, 1, 0],
        [0, 0, 1, -1, 0],
        [0, 0, -1, 1, 0],
        [0, 1, 0, -1, 0],
      ];

      const myWay = way[Math.floor(Math.random() * 4)];
      const finalWay = myWay.map((el) => el * Math.floor(Math.random() * 50 + 1));

      const animation = heart.animate(
        [
          { transform: `translate(${finalWay[0]}px, 0px)`, opacity: 1 },
          { transform: `translate(${finalWay[1]}px, -20px)` },
          { transform: `translate(${finalWay[2]}px, -40px)` },
          { transform: `translate(${finalWay[3]}px, -100px)` },
          { transform: `translate(${finalWay[4]}px, -200px)`, opacity: 0 },
        ],
        {
          duration: 1000,
          easing: 'ease-out',
        },
      );

      animation.onfinish = () => {
        heart.remove();
      };
    });
  }
}

const like = new Like();
like.init();

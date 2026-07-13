class Callback {
  constructor() {
    this.form = document.querySelector('form');
    this.button = document.querySelector('.form-button');
    this.close = document.querySelector('.close')
    this.isOpen = false;
  }

  init() {
    this.button.addEventListener('click', () => {
        if (this.isOpen === false) {
            this.button.classList.add('hidden');
            this.form.classList.add('visible')
            this.isOpen = true;
        }
    })

    this.close.addEventListener('click', () => {
        if (this.isOpen === true) {
            this.button.classList.remove('hidden');
            this.form.classList.remove('visible')
            this.isOpen = false;
        }
    })
  }
}

const callback = new Callback();
callback.init();
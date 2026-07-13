class Collapse {
  constructor() {
    this.widget = document.querySelector('.collapse-text');
    this.isOpen = false;
    this.button = document.querySelector('.collapse-button');
  }

  init() {
    this.button.addEventListener('click', () => {
      if (this.isOpen === false) {
        const height = this.widget.scrollHeight;

        this.widget.style.maxHeight = height + 'px';
        this.isOpen = true;
      } else {
        this.widget.style.maxHeight = 0;
        this.isOpen = false;
      }
    });
  }
}

const collapse = new Collapse();
collapse.init();

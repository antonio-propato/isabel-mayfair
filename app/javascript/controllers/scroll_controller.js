import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  connect() {
    this.scrollHandler = this.scroll.bind(this);
    window.addEventListener('scroll', this.scrollHandler);
  }

  disconnect() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scroll() {
    console.log('scrolling');
    if (window.scrollY === 0) {
      this.element.classList.add('black-background');
      setTimeout(() => {
        this.element.classList.remove('black-background');
      }, 800);
    } else {
      this.element.classList.remove('black-background');
    }
    this.element.style.transition = 'background-color 1s ease-out';
  }

}

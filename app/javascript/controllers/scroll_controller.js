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
    this.element.classList.add('black-background');
  }
}

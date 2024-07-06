export class App {
  constructor({ container }) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = "<div>Vanilla JS Application</div>";
  }
}

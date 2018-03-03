class Home {
  constructor() {
    this.name = 'Home';
  }

  getName() {
    return this.name;
  }
}

const home = new Home();
console.log(home.getName());

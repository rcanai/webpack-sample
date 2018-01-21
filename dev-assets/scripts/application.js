class Hoge {

  constructor () {
    this.name = 'Hoge';
  }

  getName () {
    return this.name;
  }
}

const hoge = new Hoge();
console.log(hoge.getName());

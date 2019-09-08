export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel-=4;console.log(this.foodLevel);
    }, 1000);

  }
}

import imgGame from '../img/goblin.png'

export class gameClass {
  constructor() {
    this.dead = document.getElementById('dead');
    this.lost = document.getElementById("lost");
    this.fields = document.querySelectorAll(".fields");
    this.img = document.createElement("img");
    this.number = 0;
  }
  init() {
    this.img.src = imgGame;
    this.fields[this.number].append(this.img);
    this.fields.forEach((el) => el.addEventListener("click", () => {
      let imgGoblin = document.querySelector("img");
      if (el.contains(imgGoblin)) {
        this.dead.textContent++;
        if (Number(this.dead.textContent) === 10) {
          alert("Вы победили");
          this.dead.textContent = 0;
          this.lost.textContent = 0;
        }
      } else {
        this.lost.textContent++;
        if (Number(this.lost.textContent) === 5) {
          alert("вы проиграли");
          this.lost.textContent = 0;
          this.dead.textContent = 0;
        }
      }
    }))
  }
  start() {
    let max = this.fields.length;
    let getRandom = () => {
      let randomA = Math.floor(Math.random() * max);
      while (randomA === this.number) {
        randomA = Math.floor(Math.random() * max);
      }
      this.number = randomA;
      this.fields[this.number].append(this.img);
    }
     let interval = setInterval(getRandom, 1000);
  } 
}





































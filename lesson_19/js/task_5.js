class Tanks {
  constructor(tanksNumber) {
    this.tanksNumber = tanksNumber
    this.tanks = []
    this.tankImg = `./img/tank.png`
    this.fire = `./img/boom.png`
  }

  getTanks() {
    for (let i = 0; i < this.tanksNumber; i++) {
      let randomBottom = Math.floor(Math.random() * 25)
      let tankDiv = document.createElement(`div`)
      tankDiv.className = "tank"
      let tankImg = document.createElement("img")
      tankImg.src = this.tankImg
      tankImg.className = `tank-img`
      let boomImg = document.createElement("img")
      boomImg.src = this.fire
      boomImg.className = `boom-img`

      tankDiv.append(tankImg)
      tankDiv.append(boomImg)
      tankDiv.style.cssText = `bottom: ${randomBottom}%; animation-delay: ${i}.5s; display: flex;`

      this.tanks.push(tankDiv)
      tankDiv.onclick = this.boom.bind(this, [this.tanks[i], tankImg, boomImg])
    }
  }

  boom([tank, img1, img2]) {
    img1.style.display = `none`
    img2.style.display = `flex`
    tank.style.animationPlayState = `paused`
    setTimeout(() => {
      tank.style.display = `none`
    }, 2000)
  }
  render() {
    let tankContainer = document.querySelector(".tank-container")
    tankContainer.innerHTML = ``
    this.tanks = []
    this.getTanks()
    for (const tank of this.tanks) {
      tankContainer.append(tank)
    }
  }
}
let t = new Tanks(10)
window.onload = () => {
  t.render()
  setTimeout(function timeout() {
    t.render()
    setTimeout(timeout, 20000)
  }, 20000)
}

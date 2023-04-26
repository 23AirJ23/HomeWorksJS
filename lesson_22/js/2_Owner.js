class Owner {
  constructor(coordinateX, coordinateY, src, updateInterval) {
    this.coordinateX = coordinateX
    this.coordinateY = coordinateY
    this.src = src
    this.updateInterval = updateInterval
    this.el = this.createElement()
  }

  createElement() {
    this.div = document.createElement("div")
    this.div.className = "image"
    this.div.style.cssText = `top: ${this.coordinateY}%; left: ${this.coordinateX}%;`
    this.img = document.createElement("img")
    this.img.src = this.src
    this.div.append(this.img)
    return this.div
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render(targetElement) {
    let container = document.querySelector(targetElement)
    container.append(this.el)
  }
}

class House extends Owner {
  constructor(coordinateX, coordinateY, src, updateInterval) {
    super(coordinateX, coordinateY, src, updateInterval)
  }

  renewal() {
    this.img.style.cssText = `transform: scale(2)`
  }
}

class Dog extends Owner {
  constructor(coordinateX, coordinateY, src, updateInterval) {
    super(coordinateX, coordinateY, src, updateInterval)
  }
  renewal() {
    this.div.style.cssText = `top: ${this.coordinateY}%; left:${this.getRandom(1, 100)}px`
  }
}

class Bird extends Owner {
  constructor(coordinateX, coordinateY, src, updateInterval) {
    super(coordinateX, coordinateY, src, updateInterval)
  }

  renewal() {
    let ways = ["left", "right", "bottom", "top"]
    for (let i = 0; i < 1; i++) {
      let randomInd = this.getRandom(0, 3)
      this.div.style.cssText = `${ways[randomInd]}: ${this.getRandom(1, 100)}%; ${ways[randomInd]}: ${this.getRandom(
        1,
        100
      )}%;`
    }
  }
}

window.onload = function () {
  let house = new House(20, 20, `./img/house.png`, 5)
  let dog = new Dog(40, 40, `./img/dog.png`, 4)
  let bird = new Bird(60, 60, `./img/bird.png`, 6)
  house.render(".images")
  setTimeout(() => {
    house.renewal()
  }, house.updateInterval * 1000)
  dog.render(".images")
  setTimeout(() => {
    dog.renewal()
  }, dog.updateInterval * 1000)
  bird.render(".images")
  setTimeout(() => {
    bird.renewal()
  }, bird.updateInterval * 1000)
}

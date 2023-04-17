class Stars {
  constructor(stars) {
    this.starsNumber = stars
    this.stars = ``
  }
  getStars() {
    for (let i = 0; i < this.starsNumber; i++) {
      let randomAnimate = Math.floor(Math.random() * 10 + 2)
      let randomLeft = Math.floor(Math.random() * 98 + 2)
      let randomTop = Math.floor(Math.random() * 20 + 2)
      this.stars += `
			<div class="star" style="left:${randomLeft}%; top:${randomTop}%; animation-duration: ${randomAnimate}s; animation-delay: 1.${randomAnimate}s"></div>
		`
    }
  }

  render() {
    let starsContainer = document.querySelector(".stars-container")
    starsContainer.innerHTML = ``
    this.stars = ``
    this.getStars()
    starsContainer.innerHTML = this.stars
  }
}

let stars = new Stars(50)
window.onload = () => {
  stars.render()
  setTimeout(function timeout() {
    stars.render()
    setTimeout(timeout, 11000)
  }, 11000)
}

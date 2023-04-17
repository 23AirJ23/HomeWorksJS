function snow() {
  let snowContainer = document.querySelector(".snow")
  let snowflakes = ``

  for (let i = 0; i < 100; i++) {
    let randomAnimate = Math.floor(Math.random() * 10 + 2)
    let randomВottom = Math.floor(Math.random() * 4 + 2)

    snowflakes += `
			<div class="snowflake" style="left: ${i}%; bottom: ${
      randomВottom + 100
    }%; animation-delay: 0.${randomAnimate}s;animation-duration: 1.1${randomAnimate}s;">
				<div class="stem" style="
				animation-delay: 0.${randomAnimate}s;
				animation-duration: 1.${randomAnimate}s;"></div>
				</div>
		`
  }

  snowContainer.innerHTML = snowflakes
}
window.onload = function () {
  snow()
}

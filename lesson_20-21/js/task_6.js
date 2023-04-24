document.addEventListener("input", function (event) {
  let inpValue = event.target.value
  let inputs = document.getElementsByTagName("input")
  const index = Array.from(inputs).indexOf(event.target)

  for (let i = 0; i < inputs.length; i++) {
    if (i < index || i > index) inputs[i].value = inpValue - (index - i)
  }
})

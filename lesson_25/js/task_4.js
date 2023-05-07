// const allBreadlists = {
//   allBreadList: `https://dog.ceo/api/breeds/list/all`,
//   getBreeadByName: breedName => `https://dog.ceo/api/breed/${breedName}/images/random`,
// }

// async function getBreedsList() {
//   let url = allBreadlists.allBreadList
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => data.message)
//       .then(breedObject => resolve(Object.keys(breedObject)))
//       .catch(err => console.log(err))
//   })
// }

// function randomImg(list) {
//   let randIndex = Math.floor(Math.random() * list.length)
//   return list[randIndex]
// }

// async function LoadBreedImage(breedName) {
//   let url = allBreadlists.getBreeadByName(breedName)
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => data.message)
//       .then(imgLink => resolve(imgLink))
//       .catch(err => console.log(err))
//   })
// }

// function createImg(imgSrc) {
//   let img = document.createElement("img")
//   img.src = imgSrc
//   return img
// }

// async function go() {
//   let breadList = await getBreedsList()
//   let randomName = randomImg(breadList)
//   let imgLink = await LoadBreedImage(randomName)
//   document.body.append(createImg(imgLink))
// }

// window.onload = function () {
//   go()
// }

const pokeLink = index => `https://pokeapi.co/api/v2/pokemon/${index}`
function randomIndex() {
  return Math.floor(Math.random() * 20)
}
async function getPokemonLink(index) {
  return new Promise((resolve, reject) => {
    fetch(pokeLink(index))
      .then(response => response.json())
      .then(data => data.sprites.front_shiny)
      .then(imgLink => resolve(imgLink))
      .catch(err => reject(err))
  })
}

function createImg(link) {
  let img = document.createElement("img")
  img.src = link
  img.style.cssText = `width:150px; height: 150px`
  return img
}

async function go() {
  let link = await getPokemonLink(randomIndex())
  let img = createImg(link)
  document.body.append(img)
}
window.onload = function () {
  go()
}

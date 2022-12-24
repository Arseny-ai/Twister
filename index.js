const players = []
const limbs = ["Левая нога", "Правая нога", "Левая рука", "Правая рука"]
const colors = ["#BE1F35", "#558A33", "#4470EA", "#F9CB0F"]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function addPlayer () {
  const input = document.querySelector('#getPlayer')
  players.push(input.value)
  input.value = ""
}

let index = 0

const nextMove = () => {
  const game = document.querySelector('#game')
  const player = document.querySelector('#player')
  const limb = document.querySelector('#limb')
  
  game.style.backgroundColor = colors[random(0, colors.length)]
  index === players.length - 1 ? index = 0 : index++
  player.innerHTML = players[index]
  limb.innerHTML = limbs[random(0, limbs.length-1)]
}
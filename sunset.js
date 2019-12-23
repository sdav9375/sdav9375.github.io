const sun = document.querySelector('.sun')
const sea = document.querySelector('.sea')
const sky = document.querySelector('.sky')

function sunSet() {
  sun.style.top = '176px'
  sun.style.left = '260px'
  sky.style.background = '#ff5722'

}

function day() {
  sun.style.top = '40px'
  sun.style.left = '40px'
  sky.style.background = '#61D2D6'
}
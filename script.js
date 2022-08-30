const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')
const counter = document.querySelector('#counter').innerText = '00:00:00'

let hours = 0
let minutes = 0
let seconds = 0

const mileseconds = 10 // quantos milesimos equivalem 1 segundo
let chronometer

start.onclick = () => {
  chronometer = setInterval(() => {
    timer()
  }, mileseconds)
}

pause.onclick = () => {
  clearInterval(chronometer)
}

stop.onclick = () => {
  clearInterval(chronometer)
  hours = 0
  minutes = 0
  seconds = 0

  document.querySelector('#counter').innerText = '00:00:00'
}

const timer = () => {
  seconds++

  if (seconds === 60) {
    seconds = 00
    minutes++

    if (minutes === 60) {
      minutes = 00
      hours++
    }
  }
  let format = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  document.querySelector('#counter').innerText = format
}
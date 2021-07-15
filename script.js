"use strict"

const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')

let hh = 0
let mm = 0
let ss = 0

const tempo = 10 // quantos milesimos equivalem 1 segundo
let cron

start.onclick = function start() {
    cron = setInterval(() => {
        timer()
    }, tempo)
}

pause.onclick = function pause() {
    clearInterval(cron)
}

stop.onclick = function stop() {
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.querySelector('#counter').innerText = '00:00:00'
}

function timer() {
    ss++

    if (ss == 60) {
        ss = 0
        mm++

        if (mm == 60) {
            mm = 0
            hh++
        }
    }
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.querySelector('#counter').innerText = format
}
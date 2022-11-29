const items = document.querySelectorAll('.countdown-item > h4')

let countdownDate = new Date(2025, 10, 29, 19, 11, 0).getTime()

function getCountdownTime() {
  const nowTime = new Date().getTime()

  const distance = countdownDate - nowTime

  //1c = 1000 мс
  //1m = 60c
  //1h = 60m
  //1d = 24h

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(distance / oneDay)
  let hours = Math.floor((distance % oneDay) / oneHour)
  let minutes = Math.floor((distance % oneHour) / oneMinute)
  let seconds = Math.floor((distance % oneMinute) / 1000)

  const values = [days, hours, minutes, seconds]

  items.forEach((item, i) => {
    item.textContent = values[i]
  })

  if (distance < 1) {
    clearInterval(countdown)
  }
}

getCountdownTime()

let countdown = setInterval(getCountdownTime, 1000)

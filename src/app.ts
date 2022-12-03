const counter = document.querySelector('#counter')
let i = 0

const n = 3

const increment = (e: Event) => {
  i++
  const span = counter?.querySelector('span')
  if (span) {
    span.innerText = i.toString()
  }
}

counter?.addEventListener('click', increment)
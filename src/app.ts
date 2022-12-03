const counter = document.querySelector('#counter')
let i = 0

const n = 3

const increment = (e: Event) => {
  i++
  const span = counter?.querySelector('span')

  // Type narrowing: if span => condition qui écarte les types null ou undefined
  if (span) {
    span.innerText = i.toString()
  }
}

counter?.addEventListener('click', increment)
// D'après la doc "querySelector" prend déjà un generic "Element" par défaut. On peut le modifier pour être plus précis
const counter = document.querySelector<HTMLButtonElement>('#counter')
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

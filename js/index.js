const hamburger = document.getElementById('ham')
const dropdown = document.getElementById('menu')

hamburger.addEventListener('click', () => {
  dropdown.classList.toggle('flex')
  dropdown.classList.toggle('hidden')
})
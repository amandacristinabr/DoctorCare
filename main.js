// String (textos)
// Number (número)
//Boolean (true | false)

function onScroll() {
  if (scrolly > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function ScrollReveal() {
  var options = {
    reveal: function () {}
  }

  return options
}

ScrollReveal().reveal('#home')

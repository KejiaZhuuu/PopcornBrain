// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-stack img")
  let currentImageIndex = 0

  //   Function to switch images
  const switchImage = () => {
    images.forEach((img, index) => {
      img.style.opacity = index === currentImageIndex ? "1" : "0"
    })
    currentImageIndex = (currentImageIndex + 1) % images.length
  }

  //   Automatically switch images every 3 seconds
  //   setInterval(switchImage, 3000)
})
const popcornDom = document.getElementById("popcorn")
const niblet = document.getElementById("niblet")
const explode = document.getElementById("explode")
const popAudio = document.getElementById('popAudio')

console.log(popcornDom)
let mover = false
popcornDom.onmouseout = (e) => {
  if (mover) {
    popcornDom.style.display = "none"
    niblet.style.display = "block"
  }
}
niblet.onmouseover = (e) => {
  mover = true
  popcornDom.style.display = "block"
  niblet.style.display = "none"
}
popcornDom.onclick = (e) => {
  mover = false
  explode.style.display = "flex"
  popAudio.play()
  setTimeout(() => {
    window.location.href = 'bucket.html'
  }, 500)
}

const issue = document.getElementById("issue")
const tooltip = document.getElementById("tooltip")

issue.onclick = (e) => {
  console.log(tooltip.style.display)
  if (!tooltip.style.display || tooltip.style.display == "none") {
    tooltip.style.display = "block"
  } else {
    tooltip.style.display = "none"
  }
}

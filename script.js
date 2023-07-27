const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('.text p')

const sizeUp = () => {
	const computedStyle = window.getComputedStyle(text)
	const fontSize = computedStyle.getPropertyValue('font-size')
	let fZ = parseInt(fontSize.slice(0, -2))
	if (fZ <= 60) {
		fZ += 5
		text.style.fontSize = `${fZ}px`
	}
}

const sizeDown = () => {
	const computedStyle = window.getComputedStyle(text)
	const fontSize = computedStyle.getPropertyValue('font-size')
	let fZ = parseInt(fontSize.slice(0, -2))
	if (fZ >= 18) {
		fZ -= 5
		text.style.fontSize = `${fZ}px`
	}
}

const colorHandle = () => {
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)

	text.style.color = `rgb(${r},${g}, ${b})`
}

sizeUpBtn.addEventListener('click', sizeUp)
sizeDownBtn.addEventListener('click', sizeDown)
colorBtn.addEventListener('click', colorHandle)

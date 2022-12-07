function getElem($el) {
	let elem = document.querySelector($el)
	return elem
}

getElem(".window__button").addEventListener("click", e => {
	let color = ["#"]
	let obj = {
		10: "A",
		"11": "B",
		"12": "C",
		"13": "D",
		"14": "E",
		"15": "F",
	}
	for(let i = 0; i < 6; i++) {
		let c = Math.round(Math.random() * 16)
		let res = obj[c] ? obj[c] : c
		console.log(obj[c])
		color.push(res)
	}
	console.log(color)
	document.body.style.backgroundColor = `${color.join("")}`
	getElem(".window__wrapper").style.backgroundColor = `${color.join("")}`
	getElem(".window__wrapper-color").textContent = color.join('')
})
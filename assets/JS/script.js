// Variablen
let button = document.querySelector("button");
let zahlenreihe = document.getElementById("zahlenreihe");
let counter = 0;
button.addEventListener("click", function zahlen(e) {


/* 	for (let i = 0; i < 100; i++) { */

		let p = document.createElement("p");
		p.textContent = counter;

		if ((counter) % 10 == 0) {
			p.style.backgroundColor = "red";
			p.style.color = "white";
			p.style.borderRadius = "50%";
		}

		zahlenreihe.appendChild(p);
		counter++
	
});

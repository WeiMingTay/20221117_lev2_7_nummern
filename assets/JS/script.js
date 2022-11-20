// Variablen
let button = document.querySelector("#button1");
let entfernen = document.querySelector("#button2");
let zahlenreihe = document.getElementById("zahlenreihe");
let counter = 0;
button.addEventListener("click", function zahlen(e) {
	/* 	for (let i = 0; i < 100; i++) { */

	let p = document.createElement("p");
	p.textContent = counter;

	if (counter % 10 == 0) {
		p.classList.add("firstNumber");
		/* p.style.backgroundColor = "red";
			p.style.color = "white";
			p.style.borderRadius = "50%";
			p.style.boxShadow="0 0 15px 2px red" */
	}

	zahlenreihe.appendChild(p);
	counter++;
});
entfernen.addEventListener("click", (e) => {
	let ps = document.querySelectorAll("p");
	let psLength = ps.length;

	if (ps.length - 1 > 0) {
		zahlenreihe.removeChild(ps[ps.length - 1]);
	} else {
		window.location.reload();
	}
});

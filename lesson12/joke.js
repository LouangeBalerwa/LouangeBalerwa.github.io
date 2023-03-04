"use strict";

function displayJoke(joke){
	const p = document.getElementById("joke");
	if (joke.type == "single"){
		p.textContent = joke.joke;
	} else if (joke.type == "twopart"){
		p.innerHTML = joke.setup + "<br>" + joke.delivery;
	}
}

async function fetchData() {
    const requestURL = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
	if(response.ok) {
		const data = await response.json();
		displayJoke(data);
	} else {
		const p = document.getElementById("summary");
		p.textContent = "ERROR LOADING DATA: " + response.status;
	}

	return response.status;
}

window.onload = function(){
	const btn = document.getElementById("btn");
	btn.onclick = (e) => {
		const promise = fetchData();
		console.log("Called fetch");
		promise.then( (status) => {
			console.log("FINISHED FETCH: " + status);
		});
	};
};


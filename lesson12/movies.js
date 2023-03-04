"use strict";

const API_KEY = "5e16aa5a";

async function fetchSearchResults(query) {
	const encodedQuery = encodeURIComponent(query);
	const apiURL = `http://www.omdbapi.com/?s=${encodedQuery}&type=movie&apikey=${API_KEY}`

	const response = await fetch(apiURL)
	if (!response.ok) {
		throw new Error(`Response Error: ${response.status}`);
	}

	const data = await response.json();
	console.log(data);
	return data.Search;
}

function makeMovieCard(parent, info) {
	const card = document.createElement("div");
	card.classList.add("movie-card");

	const year = document.createElement("h3");
	year.textContent = info.Year;
	card.appendChild(year);

	const poster = document.createElement("div");
	poster.classList.add("poster");
	const img = document.createElement("img");
	img.src = info.Poster;
	poster.appendChild(img);
	card.appendChild(poster);

	const title = document.createElement("h2");
	title.textContent = info.Title;
	card.appendChild(title);
	
	parent.appendChild(card);
}

async function doSearch(query) {
	const results = await fetchSearchResults(query);

	console.log(results);
	
	const section = document.getElementById("results");
	section.innerHTML = "";

	for (const result of results) {
		makeMovieCard(section, result);
	}
}

window.onload = function(){
	const searchForm = document.querySelector("form");
	searchForm.onsubmit = (e) => {
		const data = new FormData(searchForm);
		const query = data.get("q");

		console.log(query);
		if (query !== ""){
			doSearch(query);
		}

		e.preventDefault();
	};

};


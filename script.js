const allEpisodes = getAllEpisodes();
function setup() {
  makePageForEpisode(allEpisodes);
}

const searchTerm = document.getElementById("q");
searchTerm.addEventListener("input", render);
function render() {
  
  let filteredEpisode = allEpisodes.filter((episode) => {
    return episode.name.includes(searchTerm.value);
  });
  clearCard();
  makePageForEpisode(filteredEpisode);
 
}

function clearCard() {
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
}

function createFilmCard(template, episode) {
const cardNode = template.content.cloneNode(true);
cardNode.querySelector("h3").textContent = episode.name;
cardNode.querySelector("img").src = episode.image.medium;
cardNode.querySelector("p").innerHTML = episode.summary;
return cardNode;
}

function makePageForEpisode(allEpisodes) {
  
  const rootElm = document.getElementById("root");
  const template = document.getElementById("film-card");

  allEpisodes.forEach((episode) => {
    const card = createFilmCard(template, episode);
    rootElm.appendChild(card);
  });

}



window.onload = setup;


//You can edit ALL of the code here


function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log(allEpisodes);
  makePageForEpisode(allEpisodes);
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
    // create card is the completing template
    const card = createFilmCard(template, episode);
    // add to page
    rootElm.appendChild(card);
  });

}


window.onload = setup;


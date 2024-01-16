//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerhtml=""; 
  episodeList.forEach((episode) => {
    // console.log(episode.name);
    console.log(episode.summery);
    const titleElem = document.createElement("h2");
    titleElem.textContent = `${episode.name}`
    rootElem.appendChild(titleElem);
    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", episode.image.medium);
    rootElem.appendChild(imageElem);
    // const descriptionElm = document.createElement("p");
    // descriptionElm.textContent = `${episode.summery}`;
    // rootElem.appendChild(descriptionElm);
    const descriptionElm = document.createElement("p");
    descriptionElm.textContent = `${episode.summary}`;
    rootElem.appendChild(descriptionElm);
  });
}

// episodeList.forEach((episode) => {
//   const episodeList = document.createElement("div");
//   episodeElem = classList.add("episode");

//   const titleElem = document.createElement("h2");
//   titleElem.textContent = `${episode.name} - S${episode.season}E${episode.number}`
// });

window.onload = setup();


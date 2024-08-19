export const searchData = (data, initMarkers, map) => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResultsContainer = document.getElementById("searchResults");

  let markers = [];

  const searchData = () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredData = data
      .filter((item) => item.facltNm.toLowerCase().includes(query))
      .slice(0, 30);

    searchResultsContainer.style.display = "block";

    searchResultsContainer.innerHTML = `
      <ul>${filteredData
        .map(
          (item, index) => `
          <li class="searchResults_list" data-index="${index}">
            <div>${item.facltNm}</div>
            <div>주소: ${item.addr1}</div>
            <div>오픈요일: ${item.operDeCl}</div>
            <div style="color: ${getTextColor(item.animalCmgCl)}">
              애완견: ${item.animalCmgCl}
            </div>
          </li>`
        )
        .join("")}
      </ul>`;

    markers = initMarkers(filteredData);

    const propagation = (event) => {
      let target = event.target;

      while (target && target !== searchResultsContainer) {
        if (target.tagName === "LI") {
          handleListItem(target);
          return;
        }
        target = target.parentElement;
      }
    };

    searchResultsContainer.addEventListener("click", propagation);
  };

  const handleListItem = (listItem) => {
    const index = listItem.getAttribute("data-index");
    const selectedMarker = markers[index];

    if (selectedMarker) {
      const position = selectedMarker.getPosition();
      if (position) {
        map.panTo(new kakao.maps.LatLng(position.getLat(), position.getLng()));

        kakao.maps.event.trigger(selectedMarker, "click");
      } else {
        console.error("overlay 좌표가 똑바로 없다. ./search.js 확인");
      }
    } else {
      console.error("selectedMarker 정보 제대로 안 들어옴. ./search.js 확인");
    }
  };

  searchButton.addEventListener("click", searchData);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchData();
    }
  });
};

function getTextColor(animalCmgCl) {
  return animalCmgCl.includes("불") ? "red" : "green";
}

import { hideLoadingType, showLoadingType } from "./components/index.js";
import { basedListUrl, campingData } from "./network/index.js";
import {
  createOverlay,
  initializeMap,
  searchData,
  initClosedMarkers,
} from "./services/map/index.js";
import { getLocation, findClosestMarker } from "./util/index.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    showLoadingType();

    let { latitude, longitude } = await getLocation();
    const { map, cluster } = await initializeMap(latitude, longitude);
    const data = await campingData.getData(basedListUrl);
    const closestMarkerData = findClosestMarker(latitude, longitude, data);

    const initMarkers = (filteredData) => {
      cluster.clear();

      const markersArr = filteredData.map((item) => {
        const position = new kakao.maps.LatLng(item.mapY, item.mapX);
        return createOverlay(map, position, item.facltNm, item);
      });

      cluster.addMarkers(markersArr);
      return markersArr;
    };

    const markers = initMarkers(data);

    initClosedMarkers(data, markers, closestMarkerData);
    searchData(data, initMarkers, map);
  } catch (error) {
    console.error("initMap", error);
  } finally {
    hideLoadingType();
  }
});

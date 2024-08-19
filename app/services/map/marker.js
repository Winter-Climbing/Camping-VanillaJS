import { createOverlay } from "./overlay.js";

export const initMarkers = (filteredData, map, cluster) => {
  cluster.clear();

  const markersArr = filteredData.map((item) => {
    const position = new kakao.maps.LatLng(item.mapY, item.mapX);
    return createOverlay(map, position, item.facltNm, item);
  });

  cluster.addMarkers(markersArr);
  return markersArr;
};

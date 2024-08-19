export const initClosedMarkers = (data, markers, closestMarkerData) => {
  if (closestMarkerData) {
    const closestMarkerIndex = data.findIndex(
      (item) =>
        item.mapY === closestMarkerData.mapY &&
        item.mapX === closestMarkerData.mapX
    );

    if (closestMarkerIndex >= 0) {
      const closestMarker = markers[closestMarkerIndex];
      if (closestMarker) {
        kakao.maps.event.trigger(closestMarker, "click");
      }
    }
  }
};

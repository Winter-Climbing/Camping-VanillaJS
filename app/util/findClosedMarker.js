export const findClosestMarker = (latitude, longitude, data) => {
  let minDistance = Number.MAX_VALUE;
  let closestMarker = null;

  data.forEach((item) => {
    const distance = getDistance(latitude, longitude, item.mapY, item.mapX);
    if (distance < minDistance) {
      minDistance = distance;
      closestMarker = item;
    }
  });

  return closestMarker;
};

// 지구 반지름에 기인하여 distance 재기
function getDistance(lat1, lng1, lat2, lng2) {
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLng = (lng2 - lng1) * rad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); //
}

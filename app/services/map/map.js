export const initializeMap = (lat, lng) => {
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 8,
    maxLevel: 11,
  };
  const map = new kakao.maps.Map(mapContainer, mapOption);

  const cluster = new kakao.maps.MarkerClusterer({
    map,
    averageCenter: true,
    minLevel: 10,
  });

  return { map, cluster };
};

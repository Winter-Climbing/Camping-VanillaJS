const options = {
  enableHighAccuracy: true,
  maximumAge: Infinity,
  timeout: 5000,
};

export const getLocation = () => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error(`위치 정보를 얻을 수 없습니다. ${error.message}`);
        },
        options
      );
    } else {
      console.error(`이 브라우저는 Geolocation을 지원하지 않습니다`);
    }
  });
};

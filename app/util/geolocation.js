const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 15000,
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
        options
      );
    } else {
      reject(new Error("Geolocation Error"));
    }
  });
};

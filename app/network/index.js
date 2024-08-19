import HttpClient from "./http.js";
import CampingService from "./campingData.js";

const apiKey = import.meta.env.VITE_GO_CAMPING_API_KEY;
const apiUrl = `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=3600&MobileOS=etc&MobileApp=a&serviceKey=${encodeURIComponent(
  apiKey
)}&_type=json`;

const http = new HttpClient(apiUrl);

export const campingData = new CampingService(http);

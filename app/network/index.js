import HttpClient from "./http.js";
import CampingService from "./campingData.js";

const apiKey = import.meta.env.VITE_GO_CAMPING_API_KEY;

export const baseUrl = "https://apis.data.go.kr/B551011/GoCamping/";
export const basedListUrl = `basedList?numOfRows=3000&MobileOS=etc&MobileApp=a&serviceKey=${encodeURIComponent(
  apiKey
)}&_type=json`;

const http = new HttpClient(baseUrl);

export const campingData = new CampingService(http);

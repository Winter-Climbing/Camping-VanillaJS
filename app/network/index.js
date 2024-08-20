import HttpClient from "./http.js";
import CampingService from "./campingData.js";

const apiKey = import.meta.env.VITE_GO_CAMPING_API_KEY;
const baseUrl = "https://apis.data.go.kr/B551011/GoCamping/";

const http = new HttpClient(baseUrl);

export const campingData = new CampingService(http);

export const basedListUrl = `basedList?numOfRows=3000&MobileOS=etc&MobileApp=a&serviceKey=${encodeURIComponent(
  apiKey
)}&_type=json`;
export const searchListUrl = `searchList?MobileOS=ETC&serviceKey=${encodeURIComponent(
  apiKey
)}&_type=json&MobileApp=App&keyword=`;

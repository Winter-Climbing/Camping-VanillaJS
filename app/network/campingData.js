export default class CampingService {
  constructor(http) {
    this.http = http;
  }

  async getData(basedList) {
    try {
      const data = await this.http.fetch(basedList);
      return data.response.body.items.item;
    } catch (error) {
      throw new Error("Camping 데이터 가져오기 실패:", error);
    }
  }
}

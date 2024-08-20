export default class CampingService {
  constructor(http) {
    this.http = http;
  }

  async getData(basedList) {
    const response = await this.http.fetch(basedList, { method: "GET" });

    return response.response.body.items.item;
  }

  async getSearchData(searchList, keyword) {
    const query = keyword ? `${searchList}${encodeURIComponent(keyword)}` : "";
    const response = await this.http.fetch(query, { method: "GET" });

    return response.response.body.items.item;
  }
}

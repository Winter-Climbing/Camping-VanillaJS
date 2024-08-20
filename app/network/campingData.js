export default class CampingService {
  constructor(http) {
    this.http = http;
  }

  async getData(basedList) {
    const response = await this.http.fetch(basedList);

    return response.response.body.items.item;
  }

  async getSearchData(searchList, keyword) {
    const query = keyword ? `${searchList}${encodeURIComponent(keyword)}` : "";
    const response = await this.http.fetch(query);

    return response.response.body.items.item;
  }
}

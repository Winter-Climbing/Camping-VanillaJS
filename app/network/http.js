export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    console.log(`${this.baseURL}${url}`);
    const res = await fetch(`${this.baseURL}${url}`, {
      method: "GET",
    });

    let data;

    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : "백엔드 놈들아 뭐하냐";
      throw new Error(message);
    }

    return data;
  }
}

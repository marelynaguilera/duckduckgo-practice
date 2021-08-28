const axios = require("axios");

class SimpsonsAPI {
  async getResponse() {
    const response = axios.get(
      "https://api.duckduckgo.com/?q=simpsons%20characters&format=json&pretty=1"
    );
    return response;
  }

  async getData() {
    const response = await this.getResponse();
    return response.data;
  }
}

module.exports = new SimpsonsAPI();

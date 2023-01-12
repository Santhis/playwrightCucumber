const { test,expect} = require("@playwright/test");


class basepage {
  urlvalue;
  constructor(url) {
      this.urlvalue = url;
      console.log('url value'+url);
    }

    get area() {
        return this.calcArea();
      }
      // Method
      calcArea() {
        return this.height * this.width;
      }
    }
    module.exports = { basepage }
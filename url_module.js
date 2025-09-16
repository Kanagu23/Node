const { URL } = require("url");

const myURL = new URL("http://example.com:8080/docs/page.html?id=100&status=active#top");

console.log(myURL.href);        // full URL
console.log(myURL.origin);      // https://example.com:8080
console.log(myURL.protocol);    // https:
console.log(myURL.hostname);    // example.com
console.log(myURL.port);        // 8080
console.log(myURL.pathname);    // /docs/page.html
console.log(myURL.search);      // ?id=100&status=active
console.log(myURL.searchParams.get("status")); // 100
console.log(myURL.hash);        // #top

myURL.searchParams.append("lang", "en");
console.log(myURL.toString()); 
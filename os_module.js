const os = require("os");

// console.log(os.arch());         // x64, arm, etc.
// console.log(os.platform());     // darwin, win32, linux
// console.log(os.type());         // Linux, Darwin, Windows_NT
// console.log(os.version());      // OS version

// console.log(os.cpus());         // CPU info
console.log(os.totalmem());     // total memory in bytes
console.log(os.freemem());      // free memory in bytes

console.log(os.hostname());     // computer hostname
// console.log(os.networkInterfaces()); // IP, MAC addresses

console.log(os.homedir());      // home directory
console.log(os.tmpdir());       // temp directory
console.log(os.uptime());       // system uptime in seconds

console.log(os.userInfo());     // { username, homedir, shell }
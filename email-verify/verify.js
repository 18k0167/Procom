const express = require('express')
const Verifier = require("email-verifier");
// const url = 'https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_dMgMKN0VAwEDPiyuZuadJsANHXPUt&emailAddress=support@whoisxmlapi.com'
let verifier = new Verifier("k180167", "Qwt5HGf2", {
  checkCatchAll: false,
  checkDisposable: false,
  checkFree: false,
  validateDNS: false,
  validateSMTP: false
});
verifier.verify("ahmedzulfiqar326@gmail.com", (err, data) => {
  if (err) throw err;
  console.log(data);
});
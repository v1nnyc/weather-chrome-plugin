// TODO: background script
// chrome.runtime.onInstalled.addListener(() => {
//   // TODO: on installed function
// });
console.log("background");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg, sender);

  sendResponse("from background script");
});

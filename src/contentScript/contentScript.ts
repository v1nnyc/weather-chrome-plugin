// TODO: content script
console.log("content script");

chrome.runtime.sendMessage("test message frm content script", (response) => {
  console.log(response);
});

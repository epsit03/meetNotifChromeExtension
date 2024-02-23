function checkJoinees(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        // A child node was added or removed.
        if (document.querySelector('div.U04fid') && document.querySelector('div.U04fid').childElementCount > 0) {
          // div.U04fid has at least one child element.
          sendMessage();
        }
      }
    }
    return false;
}

const observer = new MutationObserver(checkJoinees);
observer.observe(document.body, {
  childList: true,
  delay: 1000
});

function sendMessage() {
    chrome.runtime.sendMessage({
        txt: "A user has joined the call!",
        action: "people_joined"
    });
}
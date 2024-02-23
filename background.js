chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "people_joined") {
      sendNotification("notif-id", message.txt);
    }
  });
  

function sendNotification(notificationId, message) {
    chrome.notifications.create(notificationId, {
      type: "basic",
      title: "A user joined the call",
      message: message,
      iconUrl: "./success.png"
    });
}
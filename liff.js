window.onload = () => {
  liff
    .init({
      liffId: "1653761116-WZxeVvO7" // use own liffId
    })
    .then(() => {
      initializeApp();
      // Start to use liff's api
    })
    .catch(err => {
      // Error happens during initialization
      console.log(err.code, err.message);
    });
};

function initializeApp() {
  if (!liff.isInClient()) {
    document.getElementById("openExternal").remove();
  } else {
    openExternal();
    sendMessage();
  }
}

function openExternal() {
  document.getElementById("openExternal").addEventListener("click", () => {
    liff.openWindow({
      url: "https://funfactid.herokuapp.com/",
      external: true
    });
  });
}

function sendMessage() {
  document.getElementById("factButton").addEventListener("click", () => {
    liff
      .sendMessages([
        {
          type: "text",
          text:
            "Dosis fakta-fakta lucu dan menarik buatmu hari ini. Keep calm and stay curious."
        }
      ])
      .then(function() {
        console.log("Message sent");
      })
      .catch(function(error) {
        console.log("Error sending message: " + error);
      });
  });
}

window.onload = function() {
  const useNodeJS = false;
  const defaultLiffId = "1653761116-WZxeVvO7";
  let myLiffId = "";

  if (useNodeJS) {
    fetch("/send-id")
      .then(function(reqResponse) {
        return reqResponse.json();
      })
      .then(function(jsonResponse) {
        myLiffId = jsonResponse.id;
        initializeLiffNode(myLiffId);
      })
      .catch(function(error) {
        console.log(
          "Unable to receive the LIFF ID as an environment variable.",
          error
        );
      });
  } else {
    myLiffId = defaultLiffId;
    initializeLiffNode(myLiffId);
  }
};

function initializeLiffNode(myLiffId) {
  if (!myLiffId) {
    console.log("LiffId is needed for LINE browser");
  } else {
    initializeLiff(myLiffId);
  }
}

function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      initializeApp();
    })
    .catch(err => {
      console.log("Something went wrong with LIFF initialization.", err);
    });
}

function initializeApp() {
  if (liff.isInClient()) {
    alert("Yuk cari tau fakta-fakta menarik disini.");
    document.getElementById("closeLine").classList.remove("invisible");
  }
}

function closeWindow() {
  liff.closeWindow();
}

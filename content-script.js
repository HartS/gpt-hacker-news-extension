console.log("Current URL: ", window.location.href);

var currentURL = window.location.href;

if (currentURL.indexOf("item?id=") !== -1) {
  console.log("URL is a comment thread on Hacker News");

  var threadID = currentURL.split("=")[1];

  if (localStorage.getItem(threadID) === null) {
    console.log("User has not visited the thread before");

    localStorage.setItem(threadID, Date.now());
  } else {
    console.log("User has visited the thread before. Last visit: ", localStorage.getItem(threadID));

    var lastVisit = localStorage.getItem(threadID);
  }

  var comments = document.querySelectorAll(".comment-tree .comtr");

  for (var i = 0; i < comments.length; i++) {
    var commentTime = new Date(comments[i].querySelector(".age a").getAttribute("title")).getTime();

    if (commentTime > lastVisit) {
      console.log("Comment was posted after the user's last visit. Highlighting comment.");

      comments[i].style.backgroundColor = "yellow";
    }
  }
}


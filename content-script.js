// Get the current URL of the page
var currentURL = window.location.href;

// Check if the current URL is a comment thread on Hacker News
if (currentURL.indexOf("item?id=") !== -1) {
  // Get the ID of the comment thread from the URL
  var threadID = currentURL.split("=")[1];

  // Check if the user has already visited this thread
  if (localStorage.getItem(threadID) === null) {
    // If not, set the local storage item for this thread to the current date
    localStorage.setItem(threadID, Date.now());
  } else {
    // If the user has visited the thread before, get the timestamp of the last visit
    var lastVisit = localStorage.getItem(threadID);

    // Loop through all the comments on the page
    var comments = document.querySelect

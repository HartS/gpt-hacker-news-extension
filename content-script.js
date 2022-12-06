// Get the current URL of the page
console.log("Current URL: ", window.location.href);

var currentURL = window.location.href;

// Check if the current URL is a comment thread on Hacker News
if (currentURL.indexOf("item?id=") !== -1) {
  console.log("URL is a comment thread on Hacker News");

  // Get the ID of the comment thread from the URL
  var threadID = currentURL.split("=")[1];

  // Check if the user has already visited this thread
  if (localStorage.getItem(threadID) === null) {
    console.log("User has not visited the thread before");

    // If not, set the local storage item for this thread to the current date
    localStorage.setItem(threadID, Date.now());
  } else {
    console.log("User has visited the thread before. Last visit: ", localStorage.getItem(threadID));

    // If the user has visited the thread before, get the timestamp of the last visit
    var lastVisit


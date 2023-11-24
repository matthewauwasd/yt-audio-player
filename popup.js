let enteredLink = "";


function submitLink(event) {
    // assigns value passed in from link field in popup.html
    enteredLink = document.getElementById("link").value;
    // DEBUG, printing out value of enteredLink
    console.log(enteredLink);
    // prevents button press to send to new page
    event.preventDefault();
    // resets link field to empty string
    document.getElementById("link").value = "";
}

// DEBUG, printing out value of enteredLink every second
setInterval(() => {console.log(enteredLink)}, 1000);


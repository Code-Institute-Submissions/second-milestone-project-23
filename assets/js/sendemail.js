/* Function adapted from CI tutorial for emailjs in mini-project walkthrough */
function sendMail(contactModal) {
    emailjs.send("perez", "ci-ms2", {
            "from_firstname": contactModal.firstname.value,
            "from_lastname": contactModal.lastname.value,
            "from_email": contactModal.email.value,
            "from_enquiry": contactModal.enquiry.value,
            "request_message": contactModal.message.value,
            "subscribe": contactModal.subscribe.value
        })
        .then(
            /* Change button text to green and display 'sent' message */
            function() {
                let sentButton = document.getElementById('submit-btn');
                sentButton.style.backgroundColor = "green";
                sentButton.innerHTML = "Sent!";
            },
            /* On error, using standard browser alert */
            function(error) {
                alert("Sorry, there seems to be an issue. Please fill out the form and Submit again", error);
            });
    /* Clear form after submission */
    document.getElementById('contactModal').reset();
    return false;
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1.5,
        center: {
            lat: 10.00,
            lng: 10.00
        }
    });
}

fetch("../assets/data/activities.json").then((result) => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
        case "/india.html":

            const indiaActivities = result.india;

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

            break;

        default:
            break;
    }
})

fetch("../assets/data/activities.json").then((result) => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
        case "/russia.html":

            const russiaActivities = result.russia;

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }



            // Randeomized the array 
            // build list of html 
            // Append in to the bottom pf the page


            break;

        default:
            break;
    }
})




// Fetch activities Data 
// CHECK WHICH COUNTRY USER IS BROWSING window.location.pathname.endsWith("russia.html")
// Switch case , India then 
// get the list of activities for india Build list of activities
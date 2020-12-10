const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//CREDIT: Function by Traversy Media's Google Maps JavaScript API Tutorial<a href="https://www.youtube.com/watch?v=Zxf1mnP5zcw"></a>
function initMap() {

    var options = {
        zoom: 2,
        center: {
            lat: 26.8206,
            lng: 30.8025
        },
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    var markers = [{
            coords: {
                lat: 23.1136,
                lng: -82.3666,
            },
            content: '<h3>Havana, Cuba</h3>'
        },
        {
            coords: {
                lat: 58.0092,
                lng: 56.2270,
            },
            content: '<h3>Perm, Russia</h3>'
        },
        {
            coords: {
                lat: 16.8409,
                lng: 96.1735
            },
            content: '<h3>Yangon, Myanmar</h3>'
        },
        {
            coords: {
                lat: 22.5726,
                lng: 88.3639
            },
            content: '<h3>Kolkata, India</h3>'
        }
    ]

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}
//--- END CREDIT ---

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
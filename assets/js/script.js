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

//CREDIT: Validation function implemented with the help from Online Tutorials <a href="https://www.youtube.com/watch?v=HzJngc-Se9Q"></a>

function validate() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid.";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#00ff00";
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}
// --- END CREDIT ---//
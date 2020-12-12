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
//Validation for subscribe form
//CREDIT: Validation function implemented with the help from Coding Nepal's tutorial<a href="https://www.youtube.com/watch?v=qGzJtVbXPhY"></a>

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if (email.value.match(regExp)) {
        email.style.borderColor = "#27ae60";
        email.style.background = "#eafaf1";
        icon1.style.display = "none";
        icon2.style.display = "block";
        error.style.display = "none";
        btn.style.display = "block";
    } else {
        email.style.borderColor = "#e74c3c";
        email.style.background = "#fceae9";
        icon1.style.display = "block";
        icon2.style.display = "none";
        error.style.display = "block";
        btn.style.display = "none";
    }
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        email.style.background = "#fff";
        icon1.style.display = "none";
        icon2.style.display = "none";
        error.style.display = "none";
        btn.style.display = "none";
    }
}

// --- END CREDIT ---//
let inputs = document.querySelectorAll("input");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.textContent = "Subscribed!";

    inputs.forEach(input => input.value = "");
})
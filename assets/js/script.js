const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function initMap(){
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 1.5,
            center: {lat: 10.00, lng: 10.00}
            });
        }
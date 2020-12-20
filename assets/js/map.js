//CREDIT: Function by Traversy Media's Google Maps JavaScript API Tutorial ("https://www.youtube.com/watch?v=Zxf1mnP5zcw")

function initMap() {

    var options = {
        zoom: 2,
        center: {
            lat: 38.9637,
            lng: 35.2433
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
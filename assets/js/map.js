//Latitude/longitude addresses for Havana, Cuba
/*
Havana Cathedral: Coordinates . lat:23.14146918394431, lng:-82.35193049694475
The Malecón: Coordinates - lat:23.141754, lng:-82.370809
Old Square: Coordinates - lat:23.1360, lng:82.3500
Vintage Car Tours: Avenue 43, La Habana, Cuba - lat:23.122025987385317, lng:-82.41340179591334
San Cristobal Paladar: lat:23.136274114570345, lng:-82.36625930244043
*/

//CREDIT: Function by Traversy Media's Google Maps JavaScript API Tutorial<a href="https://www.youtube.com/watch?v=Zxf1mnP5zcw"></a>

//--- END CREDIT ---
function initMap() {

    var mapOptionsCU = {
        zoom: 13,
        center: {
            lat: 23.13159071188936,
            lng: -82.37934500217703
        },
    }
    var map = new google.maps.Map(document.getElementById('map-CU'), mapOptionsCU);

    var markers = [{
            coords: {
                lat: 23.14146918394431,
                lng: -82.35193049694475
            },
            content: '<h5>Havana Cathedral</h5>'
        },
        {
            coords: {
                lat: 23.141754,
                lng: -82.370809
            },
            content: '<h5>The Malecón</h5>'
        },
        {
            coords: {
                lat: 23.1360,
                lng: 82.3500
            },
            content: '<h5>Old Square</h5>'
        },
        {
            coords: {
                lat: 23.122025987385317,
                lng: -82.41340179591334
            },
            content: '<h5>Havana Vintage Car Tours</h5>'
        },
        {
            coords: {
                lat: 23.136274114570345,
                lng: -82.36625930244043
            },
            content: '<h5>San Cristóbal Paladar</h5>'
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
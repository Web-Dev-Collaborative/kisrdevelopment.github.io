/**
 * Created by abdulrahmanalotaibi on 5/14/15.
 */
var map;
function initialize() {
    var kisr = new google.maps.LatLng(29.336822, 47.906306);
    var mapOptions = {
        zoom: 14,
        center: kisr
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        title: "KISR HQ",
        position: kisr
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

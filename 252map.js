/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery( document ).ready( function( $ ){
    var api = google.maps,
        mapOptions = {
            center: new google.maps.LatLng(38.0345, -78.8728),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP },
        map = new api.Map($('#gmap')[0], mapOptions);
    
    $.get( 'cords.csv' )
    .done( function( coordinates ) {
        coordinates = coordinates.split( /\r\n|\n/ );
   
        for ( i = 0; i < coordinates.length; i+=2){
            var marker = new api.Marker({
                position: new api.LatLng(coordinates[i], coordinates[i+1]),
                map: map
            });
        };        
    });
});
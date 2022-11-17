
import React, { useEffect, useState } from 'react';

const { kakao } = window;

export default function Map() {

    // var center = map.getCenter(); 
    // var level = map.getLevel();
    // var mapTypeId = map.getMapTypeId(); 
    // var bounds = map.getBounds();
    // var swLatLng = bounds.getSouthWest(); 
    // var neLatLng = bounds.getNorthEast(); 
    // var boundsStr = bounds.toString();

    const [mapState, setMapState] = useState(() => {
        return {
            mapX: 33.450701,
            mapY: 126.570667,
            mapZ: 3,
        }
    });
    
    useEffect(() => {

        var container = document.getElementById('map'); 
        var options = {          
            center: new kakao.maps.LatLng(mapState.mapX, mapState.mapY),
            level: mapState.mapZ 
        };        
        var map = new kakao.maps.Map(container, options); 

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            var latlng = mouseEvent.latLng;
            var mapX = latlng.getLat();
            var mapY = latlng.getLng();

            var message = 'X=' + mapX + ', Y=' + mapY;
            console.log(message);
        });
        
    }, [])

    const mapClick = (e) => {

        console.log('map was clicked')  

    }

    return (
        <div id='map' onClick={mapClick} style={{width:"100vw",height:"100vh"}}></div>
    );
}
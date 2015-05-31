// =require underscore
// =require gmaps/google

window.onload = function(){
    handler = Gmaps.build('Google');
    handler.buildMap(
        { 
            provider: 
            {
                disableDefaultUI: true
                // pass in other Google Maps API options here
            }, 
            internal: 
            {
                id: 'map'
            }
        }, 
        function()
        {
            markers = handler.addMarkers([
                {
                    "lat": 37.864677,
                    "lng": -122.256738,
                    // "picture": {
                    //     "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
                    //     "width": 36,
                    //     "height": 36
                    // },
                    "infowindow": "hello!"
                }
            ]);
            handler.bounds.extendWith(markers);
            handler.fitMapToBounds();
        }
    );
}
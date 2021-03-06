import React from 'react';

import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps';

function Map(){
    return(
    <GoogleMap defaultZoom={10} 
    defaultCenter={{lat:30.733315, lng:76.779419}}
    />
    );
  }
  const WrappedMap=withScriptjs(withGoogleMap(Map));

 function Agent(){
     return(
 
          <div style={{width:'100vw',height:'100vh'}}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB0ZljktG34E7AfpCV3fss6gYRw1Gp9MH0`}
    loadingElement={<div style={{height:"100%"}}/>}
    containerElement={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height:"100%"}}/>}
    />
    </div>
     )
 }

 export default Agent;
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

import './dianamaria.css';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const LyftMap = ({model}) => {
	return (<section className="container" id="map-section">
        <div className="row">
          <div
className="col-md-12 col-sm-12"
id="map"
width="120%">
            {/* Aqui ira nuestro mapa */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <div
id="findMe"
className="btn btn-danger person">
<i className="fa fa-user" aria-hidden="true" />
</div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="btn btn-danger gift">
<i className="fa fa-gift" aria-hidden="true" />
</div>
          </div>
          <div className="col-md-3 col-sm-3 text-center">
            <img
className="logo"
src="assets/img/lyft-logo.png" />
          </div>
        </div>
        <div className="row inputs" id="dolar">
        </div>
        <div className="row inputs" id="inputs">
          <div className="row">
            <div id="close" className="btn btn-danger person">
<i className="fa fa-close" aria-hidden="true" />
</div>
            <i
className="glyphicon glyphicon-remove-circle menu "
aria-hidden="true" />
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="form-group">
              <label htmlFor="origin">Origen:</label>
              <input
type="text"
id="origin"
name="origin"
placeholder="Introduce una ubicación"
className="form-control" />
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="form-group">
              <label htmlFor="destiny">Destino:</label>
              <input
type="text"
id="destiny"
name="destiny"
placeholder="Introduce una ubicación"
className="form-control" />
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <button id="route" className="btn btn-danger">
<i className="fa fa-car" aria-hidden="true" /> Set pickup
</button>
          </div>
        </div>
      </section>
);
}


export default LyftMap;
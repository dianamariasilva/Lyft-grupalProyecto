import React, {Component} from 'react';
import './estherUp.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class SignUp extends Component {
	
		constructor (props) {
			super (props);
			this.state = {
				goFordward : false
			}
		}


	render () {

          return(  <div id="contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3">
                            <a href="index.html"><span className="glyphicon glyphicon-chevron-left" /></a>
                        </div>
                        <div className="col-md-9">
                            <h2 className="Sign1">Sign Up</h2>
                        </div>
                        <div className="col-md-12">
                            <h5>Join now for tree ride Credit</h5>
                        </div>
                        
                        <div className="row vacio">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                        <button type="button " className="btn btn-default dropdown-toggle inpt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paises<span className="caret" /></button>
                
                                    </div>
                                    <input type="number" className="form-control " required/>
                                </div>
                                <h5> We'll send a text to verity your phone</h5>
                            </div>
                        </div>
                        <div className="col-md-12">
						 	<NavLink to={"/signup-form"}
							
						 	         className="btn btn-lyft btn-lg btn-block">
						 		Next
						 	</NavLink>                        
							 </div>
                    </div>
                </div>
			</div>
	
	)
}
}

export default SignUp;
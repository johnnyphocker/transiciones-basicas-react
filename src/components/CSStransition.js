import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

import '../css/App.css';

class Fade extends Component{

	state = {
		show: true
	}

	showDiv = () => {
		this.setState({
			show: !this.state.show ? true : false
		})
	}



    render(){
        return(
            <div>
                <CSSTransition
                	in={this.state.show}
                	timeout={5000}
                	classNames='square'
                	>
                	<div>
	                	Hello
	                </div>
                </CSSTransition>
                <div className="showDiv" onClick={this.showDiv}>
                	Click
                </div>
            </div>
        )
    }
}


export default Fade;
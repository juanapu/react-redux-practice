import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component{
	render(){
		return (

				<div>{this.props.activeBook.title}</div>
			)
	}
}


function mapStateToProps(state){
	return {
		activeBook: state.activeBook
	}
}

export default connect(mapStateToProps)(ActiveBook);
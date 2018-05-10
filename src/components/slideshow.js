import React from 'react';
import $ from 'jquery';

class Slideshow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"src": "../images/slideshow/slide1.jpg"};
	}
	// These methods are called “lifecycle hooks”.
	componentDidMount() {
		let slideImageSrcArray = [];
		let slideText1Array = [];
		let slideText2Array = [];
		$.getJSON( "../files/slideshow.json", function( data ) {
			$.each(data, function (key, value) {
				slideImageSrcArray.push(value.src);
				slideText1Array.push(value.text1);
				slideText2Array.push(value.text2);
			});
		});
		// initialize image tag at first
		$('#imagesList').find('img').attr('src', this.state.src);
		var i = 0;
		this.cycle = setInterval(function() {
			if(i >= slideImageSrcArray.length) {
				i = 0;
			} else {
				var src = (slideImageSrcArray[i]) ? slideImageSrcArray[i] : null;
				$('#imagesList').find('img').attr('src', src);
				
				// if(slideText1Array[i]) {
				// 	$('#imagesList').find('div').text(slideText1Array[i]);
				// 	$('#imagesList').find('div').css({"display": "block"});
				// } else {
				// 	$('#imagesList').find('div').css({"display": "none"});
				// }
				// if (slideText2Array[i]) {
				// 	$('#imagesList').find('span').text(slideText2Array[i]);
				// 	$('#imagesList').find('span').css({"display": "block"});
				// } else {
				// 	$('#imagesList').find('span').css({"display": "none"});
				// }
				i++;
			}
		}, 2000);
	}
	componentWillUnmount() {
		clearInterval(this.cycle);
	}
	render() {
		return (
			<div id="imagesList" >
				<img src="" className="col-lg-12" alt="DarkStore" />
			</div>
		);
	}
}

export default Slideshow;
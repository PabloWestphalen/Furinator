"use strict";

function initializeCamera() {
	let mediaSettings = {
		video: {
			facingMode: {
				ideal: "environment"
			}
		}
	}

	window.navigator.mediaDevices.getUserMedia(mediaSettings).then(function(stream) {
		const video = document.getElementById('camera-input');
		video.srcObject = stream;
		video.onloadedmetadata = function(e) {
			video.play();
		};
	}).catch(function(error) {
		console.log('got this error: ', error);
		alert(error.name + (error.message.length ? ': ' + error.message : ''));

	});
}

(function() {
	initializeCamera();
}());
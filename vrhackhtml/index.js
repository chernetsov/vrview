var vrView = 0
window.addEventListener('load', onVrViewLoad)
        function onVrViewLoad() {
            	vrView = new VRView.Player('#vrview', {
                video: 'http://192.168.1.253:9000/video/1.mp4',
                is_stereo: false,
                width: 800,
                height: 600,

            });
        }

function GrabObjects() {
	document.getElementById("text").innerText = "Got a string about Objects"
}

function PauseVideo(el) {
	if(el.getAttribute('videoPlaying')=="true"){
		vrView.pause();
		el.setAttribute('videoPlaying',"false");
		el.innerHTML = 'Play'
	} else {
		vrView.play();
		el.setAttribute('videoPlaying',"true");
		el.innerHTML = 'Pause'
	}
	
	console.log(el.attributes);
	
}

function PlayWords(str){


}
var vrView = 0
var text = "Read it"
var player = 0

window.addEventListener('load', setUponLoad)
function setUponLoad(){
	onVrViewLoad();
	player = document.querySelector('audio#player');
	console.log('player setup',player);
	player.onended = readEnded;
}
        function onVrViewLoad() {
            	vrView = new VRView.Player('#vrview', {
                video: 'http://192.168.1.253:9000/video/1.mp4',
                is_stereo: false,
                width: 800,
                height: 600,

            });
        }

function GrabObjects() {

	document.getElementById("text").innerText = text
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

function readEnded(){
	console.log("reading ended");
	var el = document.getElementById("voice");
	el.setAttribute('reading','false');
	el.innerHTML = 'Read'
}
function PlayWords(el){
	
	if(el.getAttribute('reading')=='false'){
		player.src = 'https://getpronounce.com/api/text-to-speech?text=' + encodeURIComponent(text);	
		el.setAttribute('reading','true');
		el.innerHTML = 'Stop'
	} else {
		player.pause();
		el.setAttribute('reading','false');
		el.innerHTML = 'Read'
	}
	

}
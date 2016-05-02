var newKirby = (function(){
	// Format: Hebrew
	const dirRight = "(>'.')>";
	const dirCenter = "<('.')>";
	const dirLeft = "<('.'<)";
	
	var danceOrder = [0,1,2,1,0,2,0,1,2,1,0,2],
		danceEnd = danceOrder.length - 1;

	return newKirby;
	
	function newKirby(){
		return new Kirby();
	}
	
	function Kirby(){
		var d = document.createElement("div"),
			p = document.createElement("p"),
			next = 0,
			dancing = false;
		
		p.style.fontFamily = '"Courier New", Courier, monospace';
		p.style.fontWeight = 700;
		d.appendChild(p);
		
		this.element = d;
		this.dance = function(){ dancing = true; dance(); };
		this.takeOverAndDance = takeOverAndDance;
		this.stop = stop;
		this.close = close;
		
		function dance(){
			var n = "";
			
			switch(danceOrder[next]){
				case 0:
					n = dirRight;
					break;
				case 1:
					n = dirCenter;
					break;
				case 2:
					n = dirLeft;
					break;
			}
			
			p.textContent = n;
			
			if (next === danceEnd) {
				next = 0;
			} else {
				next++;
			}

			if(!dancing){
				return
			}
			
			setTimeout(dance, 600);
		}
		
		function stop(){
			dancing = false;
		}
		
		function close(){
			dancing = false;
		}
		
		function takeOverAndDance(){
			document.body.innerHTML = "";
			document.body.appendChild(d);
			
			dancing = true;
			dance();
		}
	}
})();
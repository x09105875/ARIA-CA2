//JS function for converting cm to inches

	function cmConverter(){
	document.converter.inch.value = document.converter.cm.value / 2.54;
	}

//JS function for converting cm to inches

	function inchConverter(){
	document.converter.cm.value = document.converter.inch.value * 2.54;
	}

//JS function for converting centigrade to farenheit

	function convertToC() {
	        var fTempVal = parseFloat(document.getElementById('fTemp').value);
	        var cTempVal = (fTempVal - 32) * (5 / 9);
			
			if(fTempVal <= -459.4){
			alert("All Values entered should be greater than -459.4 Farenheit to be converted");
			}
			else{
	        document.getElementById('cTemp').value = cTempVal;
	        return false;
			}
	    }

//JS function for converting farenheit to centigrade 

	function convertToF() {
	        var cTempVal = parseFloat(document.getElementById('cTemp').value);
	        var fTempVal = (cTempVal * (9 / 5)) + 32;
			
			if(cTempVal <= -273){
			alert("All Values entered should be greater than -273 Centigrade to be converted");
			}
			else{	
	        console.log(fTempVal);
	        document.getElementById('fTemp').value = fTempVal;
	        return false;
			}
	    }

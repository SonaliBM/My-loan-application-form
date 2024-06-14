
     //value inport from indexjs.html using localstorage
    document.getElementById('name3').innerHTML = localStorage.getItem("NAME");
    document.getElementById('email3').innerHTML = localStorage.getItem("EMAIL");
    let count=0;


   //function for opt validation
    function otpvrf(){
    	var otp=document.getElementById("otp").value;
    	//random created otp=1234
    	var sotp="1234";
    	console.log(sotp);
    	//if otp is valid then its redirect to the shipping details page
    	if(otp==sotp){
    		console.log(sotp);
    		 document.getElementById('dsp').innerHTML = "Valid";
    		 //window.open("");
    		 return true;
    	}else{//if otp is not valid its redirect to 404 error page
    		 count++;
    		 console.log(count);
    		 document.getElementById('dsp').innerHTML = "InValid Please Re-Enter OTP";
    		 while(count==3){
    			 document.getElementById('dsp').innerHTML = "Validation Failed!'";
    			 window.open("https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png");
    		 count++;
    		 }
    		 return false;
    		 }
    		 
    	} 
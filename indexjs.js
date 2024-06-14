 function validation(){
	 //get a value from form using id
	 var user=document.getElementById('name').value;
	 var email=document.getElementById('email').value;
	 var pan=document.getElementById('pan').value;
	 var amt=document.getElementById('amt').value;
	 const form=document.getElementById('form').value;
	 //store value in local storage for a Export to another page
	 localStorage.setItem("NAME", user);
	 localStorage.setItem("EMAIL", email);
	 //Pattern for pan validation
	 var patt=/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
	 //Pattern for Name validation
	 var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	 var vemail= /^[A-Za-z\._\-0-9]*[@][A-Za-z]+[0-9]*[\.][a-z]{2,4}$/;
	 //if user NaN
	 if(user==""){
		 document.getElementById('username').innerHTML="Please Enter Full Name";
		 return false;
	 }
	 //if username less than 2 char
	 if(user.length <=2){
		 document.getElementById('username').innerHTML="Please Enter Name more than 2 digit";
		 return false;
		 //User validation
	 }else if(!regName.test(user)){
		 document.getElementById('username').innerHTML="Please Enter name like a John Smith";
		 return false;
	 }
	 //validation user is not a Num
	 if(!isNaN(user)){
		 document.getElementById('username').innerHTML="Only Character is allowed";
		 return false;
	 }
	 //email validation if its empty
	if(email==""){
		 document.getElementById('email2').innerHTML="Please Enter Email";
		 return false;
	}
	if(!email.match(vemail)){
		 document.getElementById('email2').innerHTML="Invalid Please Enter Valid mail id";
		 return false;
	 }
	 //pan validation if empty
	 if(pan==""){
		 document.getElementById('pan2').innerHTML="Please Enter PanNo";
		 return false;
	 }
	 //pan validation digit of pan <10
	 if(pan.length!=10){
		 document.getElementById('pan2').innerHTML="Please Enter 10 Digit Pan Number";
		 return false;
	 }
	 if(!pan.match(patt)){
		 document.getElementById('pan2').innerHTML="Invalid Pan Number Please Enter Valid Pan Card Number Like a ABCDE1234F";
		 return false;
	 }
	 if(amt==""){
		 document.getElementById('amt2').innerHTML="Please Enter Amount";
		 return false;
		 //Validation regarding amount is less than 10
	 }else {
		 return true;
	 }
	  
	   
 }
 function myname() {
	 var regName = /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var user=document.getElementById('name').value;
	 if(user==""){
		 document.getElementById('username').innerHTML="Please Enter Full Name";
		 return false;
	 }
	 //if username less than 2 char
	 if(user.length <=2){
		 document.getElementById('username').innerHTML="Please Enter Name more than 2 digit";
		 return false;
		 //User validation
	 }else if(!regName.test(user)){
		 document.getElementById('username').innerHTML="Please Enter name like a John Smith";
		 return false;
	 }
	 //validation user is not a Num
	 if(!isNaN(user)){
		 document.getElementById('username').innerHTML="Only Character is allowed";
		 return false;
 }
 }
 function myemail() {
	 document.getElementById('username').innerHTML=" ";
	 var email=document.getElementById('email').value;
	 var vemail= /^[A-Za-z\._\-0-9]*[@][A-Za-z]+[0-9]*[\.][a-z]{2,4}$/;
		if(email==""){
			 document.getElementById('email2').innerHTML="Please Enter Email";
			 return false;
		}
		if(!email.match(vemail)){
			 document.getElementById('email2').innerHTML="Invalid Please Enter Valid mail id";
			 return false;
		 }else{
			 document.getElementById('email2').innerHTML=" ";
		 }
 }
  function mypan(){
	 // document.getElementById('email2').innerHTML=" ";
	  var pan=document.getElementById('pan').value;  
	  var patt=/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
		 //pan validation digit of pan <10
		 if(pan.length!=10){
			 document.getElementById('pan2').innerHTML="Please Enter 10 Digit Pan Number";
			 return false;
		 }
		 if(!pan.match(patt)){
			 document.getElementById('pan2').innerHTML="Invalid Pan Number Please Enter Valid Pan Card Number Like a ABCDE1234F";
			 return false;
		 }else{
			 document.getElementById('pan2').innerHTML=" ";
		 }
	  
  }
  function myint(){
	  var amt=document.getElementById('amt').value;
	  if(amt==""){
			 document.getElementById('amt2').innerHTML="Please Enter Amount";
			 return false;
			 //Validation regarding amount is less than 10
		 }else if(amt.length>=10){
			 document.getElementById('amt2').innerHTML="Enter Loan Amount should be 9 digit and Number Only";
			 return false;
		 }else{//calculation of EMI
			 let r = 8.5/12/100;
		        let P = amt;
		        let n = 180;
		        let emi = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
	     document.getElementById("amt2").innerHTML="Estimated EMI’, based on the loan amount, interest rate of 8.5% and tenure of 15 years is equal to "+Math.round(emi)+" Rs";
	     return true;
		 }
  }
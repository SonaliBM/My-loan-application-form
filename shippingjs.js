function validation(){
	 //get a value from form using id
	 var user=document.getElementById('name').value;
	 var address=document.getElementById('address line 1').value;
	 var address=document.getElementById('address line 2').value;
	 var city=document.getElementById('city').value;
         var state=document.getElementById('state/province').value;
	 var zip=document.getElementById('zip/postal code').value;
	 var country=document.getElementById('country').value
	 const form=document.getElementById('form').value;

	 //store value in local storage for a Export to another page
	 localStorage.setItem("NAME", user);
	 localStorage.setItem("ADDRESS", address);
	 localStorage.setItem("ADDRESS", address);
	 localStorage.setItem("CITY", city);
         localStorage.setItem("STATE", state);
	 localStorage.setItem("ZIP", zip);
         localStorage.setItem("COUNTRY", country);
	 
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


function myaddress() {
	 var regAddress = /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var address=document.getElementById('address').value;
	 if(address==""){
		 document.getElementById('username').innerHTML="Please Enter Your Address";
		 return false;
	 }
	 //if address less than 2 char
	 if(address.length <=2){
		 document.getElementById('address').innerHTML="Please Enter Address more than 2 characters";
		 return false;
		 //address validation
	 }else if(!regAddress.test(address)){
		 document.getElementById('address').innerHTML="Please Enter your village name ";
		 return false;
	 }
	 //validation address is not a Num
	 if(!isNaN(address)){
		 document.getElementById('address').innerHTML="Only Character is allowed";
		 return false;
 }
 }
  
 function myaddress() {
	 var regAddress = /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var address=document.getElementById('address').value;
	 if(address==""){
		 document.getElementById('address').innerHTML="Please Enter Your Address";
		 return false;
	 }
	 //if address less than 2 char
	 if(user.length <=2){
		 document.getElementById('address').innerHTML="Please Enter Address more than 2 characters";
		 return false;
		 //address validation
	 }else if(!regAddress.test(address)){
		 document.getElementById('address').innerHTML="Please Enter your village name ";
		 return false;
	 }
	 //validation address is not a Num
	 if(!isNaN(address)){
		 document.getElementById('address').innerHTML="Only Character is allowed";
		 return false;
 }
 }
  
function mycity() {
	 var regCity = /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var city=document.getElementById('city').value;
	 if(city==""){
		 document.getElementById('city').innerHTML="Please Enter Your City name";
		 return false;
	 }
	 //if city less than 2 char
	 if(city.length <=2){
		 document.getElementById('city').innerHTML="Please Enter city more than 2 characters";
		 return false;
		 //city validation
	 }else if(!regCity.test(city)){
		 document.getElementById('city').innerHTML="Please Enter your City Name ";
		 return false;
	 }
	 //validation city is not a Num
	 if(!isNaN(city)){
		 document.getElementById('city').innerHTML="Only Character is allowed";
		 return false;
 }
 }

function mystate() {
	 var regState= /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var state=document.getElementById('state').value;
	 if(state==""){
		 document.getElementById('state').innerHTML="Please Enter Your State name";
		 return false;
	 }
	 //if state less than 2 char
	 if(state.length <=2){
		 document.getElementById('state').innerHTML="Please Enter state more than 2 characters";
		 return false;
		 //state validation
	 }else if(!regState.test(state)){
		 document.getElementById('state').innerHTML="Please Enter your State Name ";
		 return false;
	 }
	 //validation state is not a Num
	 if(!isNaN(state)){
		 document.getElementById('state').innerHTML="Only Character is allowed";
		 return false;
 }
 }


   function myzip(){
	 // document.getElementById('zip').innerHTML=" ";
	  var pan=document.getElementById('zip').value;  
	  var patt=/^([A-Z]){5}([0-7]){4}([A-Z]){1}$/;
		 //zip validation digit of  <6
		 if(zip.length!=10){
			 document.getElementById('zip').innerHTML="Please Enter 6 Digit zip code";
			 return false;
		 }
		 if(!zip.match(patt)){
			 document.getElementById('zip').innerHTML="Invalid Pan Number Please Enter Valid Zip Code Like a 410505";
			 return false;
		 }else{
			 document.getElementById('zip').innerHTML=" ";
		 }
	  
  }

function mycountry() {
	 var regCountry= /^[a-zA-Z]+ [a-zA-Z]+$/; 
	 var country=document.getElementById('country').value;
	 if(country==""){
		 document.getElementById('country').innerHTML="Please Enter Your country name";
		 return false;
	 }
	 //if country less than 2 char
	 if(country.length <=2){
		 document.getElementById('country').innerHTML="Please Enter Country more than 2 characters";
		 return false;
		 //country validation
	 }else if(!regCountry.test(country)){
		 document.getElementById('country').innerHTML="Please Enter your Country Name ";
		 return false;
	 }
	 //validation country is not a Num
	 if(!isNaN(country)){
		 document.getElementById('country').innerHTML="Only Character is allowed";
		 return false;
 }
 }


  

function firstCharacterUppercase(){
         
    var x = document.querySelector("#mytext1").value;
        
          if( 'A' <= x[0] && x[0] <= 'Z' ){
                  document.querySelector("#ans-1").textContent = "Yes"; 
        }else if('a' <= x[0] && x[0] <= 'z'){
                  document.querySelector("#ans-1").textContent = "No"; 
        }else{
                document.querySelector("#ans-1").textContent = "Enter a valid string!"; 
        }
}
function is_email(){
const y = document.querySelector("#mytext2").value;
 pattern = "^[a-zA-Z0-9].{3,20}@gmail.com$";
 const regexp = new RegExp(pattern);
 
        if( regexp.test(y)){
                  document.querySelector("#ans-2").textContent = "Yes"; 
        }else{
                  document.querySelector("#ans-2").textContent = "No"; 
        }  

}
function separateNumber() {
  var z = document.querySelector("#mytext3").value;
  givenNumber = parseInt(z);

  nfObject = new Intl.NumberFormat('en-US');
  output = nfObject.format(givenNumber);

  document.querySelector("#ans-3").textContent =  output;

}
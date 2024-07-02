function() {
  var input = document.querySelector('[id="form-field-email"]'); 

  if (input) {
    var value = input.value.toLowerCase(); 
    return value;
  }
  
  return undefined;
}
function() {
  var input = document.querySelector('[id="form-field-nome"]'); 

  if (input) {
    var value = input.value.split(' ')[0].toLowerCase(); 
    return value;
  }
  
  return undefined;
}
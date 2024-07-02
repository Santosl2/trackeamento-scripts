function() {
  var input = document.querySelector('[id="form-field-nome"]'); 

  if (input) {
    var value = input.value.split(' ').slice(1).join(' ').toLowerCase(); 
    return value;
  }
  
  return undefined;
}
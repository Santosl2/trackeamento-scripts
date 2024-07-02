function() {
  var phoneInput = document.querySelector('[id="form-field-whatsapp"]');

  if (phoneInput) {
    var phoneValue = phoneInput.value;
    var numeroLimpo = phoneValue.replace(/\D/g, '');

    if (!numeroLimpo.startsWith('55')) {
      numeroLimpo = '55' + numeroLimpo;
    }

    return numeroLimpo;
 }
}
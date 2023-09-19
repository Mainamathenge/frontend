$('.cta-form').on('submit', function submitForm() {
  e.preventDefault(); 
  $.ajax(
    type:"POST"
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfGdYVVVLixzMlo_yMomrltypVOVttSj6woX-JtaK9ElF73MA/formResponse"
    data: {
      'entry.1017165240': $('#fn').val(),
      'entry.1178204704': $('#ln').val(),
      'entry.745015876': $('#email').val(),
      'entry.1644269153': $('#phone').val(),
      'entry.267880691': $('#city').val(),
      'entry.1468371218': $('#position').val(),
      'entry.1059951353': $('#people').val(),
    }
  );
}
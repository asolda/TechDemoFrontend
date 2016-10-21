function getall() {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8081/user/',
    success: function(data) {
      var ret = jQuery.parseJSON(data);
      $.each(ret, function(index) {
        $('#container').append(ret[index].email + '</br>');
      });
    },
    error: function(xhr, status, error) {
      console.log('Error: ' + error.message);
    }
  });
}
function search(mail) {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8081/user/search/' + mail,
    success: function(data) {
      try {
        var ret = jQuery.parseJSON(JSON.stringify(data));
        $('#result').append(ret[0].nome + '</br>');
      } catch (err) {
        alert('Errore nella ricerca: ' + ret.message);
      }
    },
    error: function(xhr, status, error) {
      console.log('Error: ' + error.message);
    }
  });
}
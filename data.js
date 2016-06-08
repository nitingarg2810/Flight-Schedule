$('#sform').on('click', function() {

	var f = document.getElementsByTagName('form')[0];
  	if(f.checkValidity()) {
    	f.submit();
  		var source = $('#source').val(); 
    var destination = $('#dest').val();
    var seats = $('#seats').val();

	window.location.href = 'schedule.html?source=' + encodeURIComponent(source) + "&destination=" + encodeURIComponent(destination) + "&seats=" + encodeURIComponent(seats);
  	
  	} else {
    	alert("Please complete the fields");
  	}
    
});



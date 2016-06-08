function filterlist(pricemin,pricemax,duration,airline,departure,arrival){
		var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
	
    	var data = $(json).filter(function (i,sd) {
  		return sd.From === data.source & 
  		   sd.To === data.destination &
  		   sd.SeatsAvailable >= data.seats; 	
		});


	for(var i=0;i<data.length && c == 0;i++)
  	{		
		$('#list').append(
			'<tr>' +
				'<td>' + data[i].From + '</td>' +
				'<td>' + data[i].To + '</td>' +
				'<td>' + data[i].Departure + '</td>' +
				'<td>' + data[i].Arrival + '</td>' +
				'<td>' + data[i].Duration + '</td>' +
				'<td>' + data[i].Airline + '</td>' +
				'<td>' + data[i].SeatsAvailable + '</td>' +
				'<td>' + data[i].Price + '</td>' +
			'</tr>');	
	}

	c = 1;

	$("#tf").tablesorter({
		theme : 'default',
    	headerTemplate : '{content} {icon}',
 		headers: {
 			'.fr, .to' : {
        	sorter: false
      		}
 		}
	});	
}

console.log(data.length);
    console.log(data.prevObject.length);
    //console.log("bc");
	//var listFlights = "";
	
	// $('#lf').append('<div class="table-responsive">' 
	// + '<table class="table" id="tb">' + 
	// '<thead>' +
 //      '<tr>'+
 //        '<th>From</th>'+
 //        '<th>To</th>'+
 //        '<th>Departure</th>'+
 //        '<th>Arrival</th>'+
 //        '<th>Duration</th>'+
 //        '<th>Airline</th>'+
 //        '<th>Seats</th>'+
 //        '<th>Price</th>'+
 //      '</tr>'+
 //    '</thead>' + 
 //    '<tbody id="list">' + 
 //    '</tbody>' + 
 //    '</table>' + '</div>');

	$(function () {
    $('#table').bootstrapTable({
        data: json
    });
});

	for(var i=0;i<data.length;i++)
  	{		
  		console.log(data[i].From);
		console.log("hi");
		// $('#list').append(
		// 	'<tr>' +
		// 		'<td>' + data[i].From + '</td>' +
		// 		'<td>' + data[i].To + '</td>' +
		// 		'<td>' + data[i].Departure + '</td>' +
		// 		'<td>' + data[i].Arrival + '</td>' +
		// 		'<td>' + data[i].Duration + '</td>' +
		// 		'<td>' + data[i].Airline + '</td>' +
		// 		'<td>' + data[i].SeatsAvailable + '</td>' +
		// 		'<td>' + data[i].Price + '</td>' +
		// 	'</tr>');
	}

}

//class="pure-u-1 pure-u-md-3-4

// + '<span class="pure-u-1-6 pure-u-md-2-24 custom">' + data[i].From + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].To + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].Departure + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].Arrival + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].Duration + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].Airline + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].SeatsAvailable + '</span>'
// 			+ '<span class="pure-u-1-6 pure-u-md-2-24">' + data[i].Price + '</span>' +


     if(duration == "2 Hours")
     {
     	$('#list').empty();
     	var data = $(json).filter(function (i,sd) {
    	c = 0;
  		return sd.Duration == "2 Hours" &
  		sd.From === data.source & 
  		sd.To === data.destination &
  		sd.SeatsAvailable >= data.seats;
		});     	
     }
     
/console.log(data);



		
	// var dinputs = document.getElementById('duration').getElementsByTagName('input');

	// var favorite = [];
 //            $.each($("input:radio[name='option']:checked"), function(){            
 //             	//alert()
 //                if($(this).val() == "1")
	// 				{	
	// 					console.log("Eureka");
	// 				}	
	// 			else if($(this).val() == "2")
	// 				{
	// 					console.log("Eureka1");
	// 				}	
	// 			else if($(this).val() == "3")
	// 				{
	// 					console.log("Eureka3");
	// 				}	

 //            });
        //alert(favorite);
 
	// //var darr = ["options1", "options2", "options2"];

	// console.log(dinputs);

	// 
		
	//var duration = "2 Hours 30 mins";      
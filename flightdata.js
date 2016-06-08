var json = [
	{"From": "Chennai", "To": "Delhi", "Departure": "5:00 PM", "Arrival": "7:40 PM", "Duration": "2 Hours 40 mins", "Airline": "Jet Airways", "Seats": "1", "Price": "6900", "Logo": "jet.png"},
	{"From": "Kolkata", "To": "Bangalore", "Departure": "9:40 PM", "Arrival": "12:10 AM", "Duration": "2 Hours 30 mins", "Airline": "Air India", "Seats": "1", "Price": "7500", "Logo": "airindia.gif"},
	{"From": "Bangalore", "To": "Kolkata", "Departure": "7:00 AM", "Arrival": "9:30 AM", "Duration": "2 Hours 30 mins", "Airline": "Jet Airways", "Seats": "2", "Price": "4000", "Logo": "jet.png"},
	{"From": "Delhi", "To": "Chennai", "Departure": "12:30 PM", "Arrival": "3:20 PM", "Duration": "2 Hours 50 mins", "Airline": "Air India", "Seats": "3", "Price": "9000", "Logo": "airindia.gif"},
	{"From": "Bangalore", "To": "Kolkata", "Departure": "5:00 PM", "Arrival": "7:00 PM", "Duration": "2 Hours", "Airline": "Air India", "Seats": "3", "Price": "10000", "Logo": "airindia.gif"},
	{"From": "Kolkata", "To": "Bangalore", "Departure": "9:30 PM", "Arrival": "12:10 AM", "Duration": "2 Hours 40 mins", "Airline": "Jet Airways", "Seats": "3", "Price": "6300", "Logo": "jet.png"},
	{"From": "Bangalore", "To": "Kolkata", "Departure": "6:00 PM", "Arrival": "8:00 PM", "Duration": "2 Hours", "Airline": "Indigo", "Seats": "5", "Price": "6000", "Logo": "indigo.jpg"},
	{"From": "Delhi", "To": "Chennai", "Departure": "3:00 AM", "Arrival": "6:00 AM", "Duration": "3 Hours", "Airline": "Air India", "Seats": "7", "Price": "8000", "Logo": "airindia.gif"},
	{"From": "Chennai", "To": "Delhi", "Departure": "2:00 AM", "Arrival": "5:00 AM", "Duration": "3 Hours", "Airline": "Air India", "Seats": "10", "Price": "7000", "Logo": "airindia.gif"},
	{"From": "Kolkata", "To": "Bangalore", "Departure": "5:50 AM", "Arrival": "7:40 AM", "Duration": "1 Hours 50 mins", "Airline": "Air India", "Seats": "12", "Price": "5699", "Logo": "airindia.gif"},
	{"From": "Delhi", "To": "Chennai", "Departure": "12:20 PM", "Arrival": "3:20 PM", "Duration": "3 Hours", "Airline": "Air India", "Seats": "12", "Price": "9000", "Logo": "airindia.gif"},
	{"From": "Bangalore", "To": "Kolkata", "Departure": "3:00 AM", "Arrival": "5:00 AM", "Duration": "2 Hours", "Airline": "Indigo", "Seats": "21", "Price": "6500", "Logo": "indigo.jpg"},
	{"From": "Kolkata", "To": "Bangalore", "Departure": "5:50 AM", "Arrival": "8:00 AM", "Duration": "2 Hours 10 mins", "Airline": "Indigo", "Seats": "21", "Price": "5700", "Logo": "indigo.jpg"},
	{"From": "Chennai", "To": "Delhi", "Departure": "4:50 PM", "Arrival": "7:00 PM", "Duration": "2 Hours 10 mins", "Airline": "Air India", "Seats": "24", "Price": "5750", "Logo": "airindia.gif"},
	{"From": "Delhi", "To": "Chennai", "Departure": "3:00 AM", "Arrival": "6:00 AM", "Duration": "3 Hours", "Airline": "Indigo", "Seats": "25", "Price": "7999", "Logo": "indigo.jpg"},
	{"From": "Chennai", "To": "Delhi", "Departure": "5:00 AM", "Arrival": "8:00 AM", "Duration": "3 Hours", "Airline": "Air India", "Seats": "26", "Price": "8000", "Logo": "airindia.gif"},
	{"From": "Bangalore", "To": "Kolkata", "Departure": "6:00 PM", "Arrival": "9:00 PM", "Duration": "3 Hours", "Airline": "Air India", "Seats": "27", "Price": "5000", "Logo": "airindia.gif"},
	{"From": "Delhi", "To": "Chennai", "Departure": "3:00 AM", "Arrival": "6:05 AM", "Duration": "3 Hours 5 mins", "Airline": "Jet Airways", "Seats": "29", "Price": "7500", "Logo": "jet.png"},
	{"From": "Kolkata", "To": "Bangalore", "Departure": "2:30 AM", "Arrival": "4:50 AM", "Duration": "2 Hours 20 mins", "Airline": "Air India", "Seats": "36", "Price": "4500", "Logo": "airindia.gif"},
	{"From": "Chennai", "To": "Delhi", "Departure": "5:00 PM", "Arrival": "7:50 PM", "Duration": "2 Hours 50 mins", "Airline": "Indigo", "Seats": "56", "Price": "4800", "Logo": "indigo.jpg"}						
];


var table_data = []; var currentFilter = ''; var currentFilterCount = 0; var duration = ''; 

function list(pricemin,pricemax,duration,airline,departure,arrival) {

	//duration = "2 Hours 10 mins";
	//console.log(duration);

    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

	//|| duration == "" || airline == "" || departure == "" || arrival == ""
	if(pricemin == "" || pricemax == "")
	{
		//console.log(pricemin,pricemax,duration);
    	var flight_data = json.filter(function (sd) {
  		return sd.From.toLowerCase() === data.source.toLowerCase() & 
  		   sd.To.toLowerCase() === data.destination.toLowerCase() &
  		   sd.Seats >= data.seats; 	
		});
		table_data = flight_data;
    }
    else if(pricemin != "" && pricemax != "")
    {
    	//console.log("ya isme");
    	$('#list').empty();
    	var flight_data = json.filter(function (sd) {	
    	c = 0;
  		return parseInt(sd.Price) >= parseInt(pricemin) & 
  		parseInt(sd.Price) <= parseInt(pricemax) &
  		sd.From.toLowerCase() === data.source.toLowerCase() & 
  		sd.To.toLowerCase() === data.destination.toLowerCase() &
  		sd.Seats >= data.seats;
		});
		table_data = flight_data;
		//console.log(flight_data);
     }

	for(var i=0;i<flight_data.length && c == 0;i++)
  	{		
		$('#list').append(
			'<tr role="row">' +
				'<td>' + flight_data[i].From + '</td>' +
				'<td>' + flight_data[i].To + '</td>' +
				'<td>' + flight_data[i].Departure + '</td>' +
				'<td>' + flight_data[i].Arrival + '</td>' +
				'<td>' + flight_data[i].Duration + '</td>' +
				'<td>' + '<img class="size" src=' + flight_data[i].Logo + '>' + '<small>'+ flight_data[i].Airline +'</small>' + '</td>' +
				'<td>' + flight_data[i].Seats + '</td>' +
				'<td>' + flight_data[i].Price + '</td>' +
			'</tr>');
	}

	c = 1;
}


$(document).ready(function(){
	
	c = 0;
	list(0,0,"");
	count = 0;    	
	$('#slider-container').slider();
})	

// $(window).resize(function(){
// 	if($(window).width() < 480 && count == 0){
// 		list();
// 		console.log("here is ht ;")
// 		count = 1;
// 	}
// 	else if($(window).width() > 480){
// 		count = 0;
// 	}
// })

$(function() {
        $('#slider-range').slider({
            range: true,
            min: 4000,
            max: 10000,
            values: [4000, 10000],
            slide: function(event, ui) {
               $( "#amount" ).val( "Rs" + ui.values[ 0 ] + " - Rs" + ui.values[ 1 ] );
                var mi = ui.values[ 0 ];
                var mx = ui.values[ 1 ];
                list(mi, mx);
            }
        });
        
    $("#amount").prop('disabled', true);    
    $( "#amount" ).val( "Rs" + $( "#slider-range" ).slider( "values", 0 ) +
    " - Rs" + $( "#slider-range" ).slider( "values", 1 ) );
   
});

$('#thead').on('click', function(x) {
	const data = x.target.innerHTML.split(" ")[0].trim();
	const element = x.target.getElementsByTagName('i');
	if(element.length > 0){
		doSorting(data, element[0]);
	}
})

function doSorting(value, element) {
	const arr = ['Airline', 'Duration', 'Arrival', 'Departure'];
	const class_order = ['glyphicon glyphicon-sort', 'glyphicon glyphicon-sort-by-attributes', 'glyphicon glyphicon-sort-by-attributes-alt'];
	if(currentFilter !== value){
		currentFilterCount = 0;
		currentFilter = value;
	}
	else{
		currentFilterCount += 1;
		currentFilterCount = currentFilterCount % 3;
	};
	var data = [];
	var copyData = [].concat(table_data);
	if(arr.indexOf(value) !== -1) {
		data = copyData.sort(function(a, b){
			return a[value].localeCompare(b[value]);
		});
		if(currentFilterCount === 1){
			data.reverse();
		}
		if(currentFilterCount === 2){
			data = [].concat(table_data);
		}
		const cname = $(element).attr('class');
		$(element).removeClass(cname);
		$(element).addClass(class_order[ (class_order.indexOf(cname) + 1) % class_order.length]);
	}
	else {
		 data = copyData.sort(function(a, b) {
	        return a[value] - b[value];
	    });
		 if(currentFilterCount === 1){
			data.reverse();
		}
		if(currentFilterCount === 2){
			data = [].concat(table_data);
		}
		const cname1 = $(element).attr('class');
		$(element).removeClass(cname1);
		$(element).addClass(class_order[ (class_order.indexOf(cname1) + 1) % class_order.length]);
	}
	$('#list').empty();
	    for(var i=0;i<data.length;i++){
			$('#list').append(
				'<tr role="row">' +
					'<td>' + data[i].From + '</td>' +
					'<td>' + data[i].To + '</td>' +
					'<td>' + data[i].Departure + '</td>' +
					'<td>' + data[i].Arrival + '</td>' +
					'<td>' + data[i].Duration + '</td>' +
					'<td>' + '<img class="size" src=' + data[i].Logo + '>' + '<small>'+ data[i].Airline +'</small>' + '</td>' +
					'<td>' + data[i].Seats + '</td>' +
					'<td>' + data[i].Price + '</td>' +
				'</tr>');
	    }
}

$('#Link li').on('click',function(){

	var lesstwo = ["1 Hours 50 mins"];
	var twotothree = ["2 Hours","2 Hours 10 mins","2 Hours 20 mins","2 Hours 30 mins","2 Hours 40 mins","2 Hours 50 mins","3 Hours"];
	var morethree = ["3 Hours 5 mins"]; 
	if(this.id == "1")
	{
		filtersystem(lesstwo);
	}
	else if(this.id == "2")
	{
		filtersystem(twotothree);
	}
	else if(this.id == "3")
	{
		filtersystem(morethree);
	}
});
	
function filtersystem(duration){

	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    if(duration != "" )
     {
     	//console.log("hoja");
     	$('#list').empty();
    	var flight_data = json.filter(function (sd) {	
    	c = 0;
  		return ( (sd.Duration === duration[0])  || 
  			(sd.Duration === duration[1]) || 
  			(sd.Duration === duration[2]) || 
  			(sd.Duration === duration[3]) || 
  			sd.Duration === duration[4] || 
  			sd.Duration === duration[5] || 
  			sd.Duration === duration[6]) &
  		sd.From.toLowerCase() === data.source.toLowerCase() & 
  		sd.To.toLowerCase() === data.destination.toLowerCase() &
  		sd.Seats >= data.seats;
		});
		table_data = flight_data;
     }

     for(var i=0;i<flight_data.length && c == 0;i++)
  	{		
		$('#list').append(
			'<tr role="row">' +
				'<td>' + flight_data[i].From + '</td>' +
				'<td>' + flight_data[i].To + '</td>' +
				'<td>' + flight_data[i].Departure + '</td>' +
				'<td>' + flight_data[i].Arrival + '</td>' +
				'<td>' + flight_data[i].Duration + '</td>' +
				'<td>' + '<img class="size" src=' + flight_data[i].Logo + '>' + '<small>'+ flight_data[i].Airline +'</small>' + '</td>' +
				'<td>' + flight_data[i].Seats + '</td>' +
				'<td>' + flight_data[i].Price + '</td>' +
			'</tr>');
	}
}

function doSearch() {
    var searchText = document.getElementById('searchTerm').value;
    var targetTable = document.getElementById('tf');
    var targetTableColCount;
            
    //Loop through table rows
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
        var rowData = '';

        //Get column count from header row
        if (rowIndex == 0) {
           targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
           continue; //do not execute further code for header row.
        }
                
        //Process data rows. (rowIndex >= 1)
        //for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
            rowData += targetTable.rows.item(rowIndex).cells.item(5).textContent;
        //}
        // Make search case insensitive.
    			rowData = rowData.toLowerCase();
    			searchText = searchText.toLowerCase();

        //If search term is not found in row data
        //then hide the row, else show
        if (rowData.indexOf(searchText) == -1)
            targetTable.rows.item(rowIndex).style.display = 'none';
        else
            targetTable.rows.item(rowIndex).style.display = 'table-row';
    }
}
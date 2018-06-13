function getTheColor( colorVal ) {
  	var theColor = "#0DB8B5";

  	if ( colorVal < 20 ) {
			    theColor = "#D92727";
		  }
	  else if	( colorVal < 40 ) {
			    theColor = "#FC8F12";
		  }
    else if	( colorVal < 60 ) {
          theColor = "#FFE433";
      }
    else if	( colorVal < 80 ) {
          theColor = "#6FCC43";
      }

  	return( theColor );
}

function refreshSwatch() {
	var slider = $( ".slider" ).slider( "value" ),
	myColor = getTheColor( slider );

	$( "#background" ).css( "background-color", myColor );
}

$(function() {
	  $( "#horizontalSlider" ).slider({
        orientation: "horizontal",
		    range: "min",
		    max: 100,
		    value: 0,
		    slide: refreshSwatch,
		    change: refreshSwatch
	  });
});

$(function() {
	  $( "#verticalSlider" ).slider({
        orientation: "vertical",
		    range: "min",
		    max: 100,
		    value: 0,
		    slide: refreshSwatch,
		    change: refreshSwatch
	  });
});

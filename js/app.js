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
	var horizontalSlider = $( "#horizontalSlider" ).slider( "value" ),
	myColor = getTheColor( horizontalSlider );

	$( "#background" ).css( "background-color", myColor );
}

function refreshSwatch2() {
	var verticalSlider = $( "#verticalSlider" ).slider( "value" ),
	myColor2 = getTheColor( verticalSlider );

	$( "#background" ).css( "background-color", myColor2 );
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
		    slide: refreshSwatch2,
		    change: refreshSwatch2
	  });
});

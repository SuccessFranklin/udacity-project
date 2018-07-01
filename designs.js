var table = $("#pixelCanvas");
var x = ""// Select color input
var height = "";
var width = "";// Select size input

// When size is submitted by the user, call makeGrid()
$("input[type='submit']").on("click",function()
{
	height = $("#inputHeight").val();
	width = $('#inputWeight').val();
	
	makeGrid();
});

function makeGrid(){

	table.children().remove("tr");

	//creaating the rows
	for(var i=1;i<=height;i++){
		
		var row = $("<tr></tr>");
		
		for(var j=1;j<=width;j++){
			row.append("<td></td>");
		}
		table.append(row);
	}
}
  
  
    table.on("click","td",function(){
	  x = $('#colorPicker').val();
	  if($(this).attr('style')){
		  $(this).removeAttr('style')
	  }else{
	  $(this).css('background-color', x);
	  }
      // Your code goes here!
    });

$("ul").on("click","li",function(){               //make a line through and change color of todos list

$(this).toggleClass("selected");


});
 
$("ul").on("click","span",function(event)    //implementation of Trash icon
{
	
   $(this).parent().fadeOut("slow", function(){

   	 $(this).remove();

   });
  


});


$("input[type='text'").on("keypress",function(event)               //Adding data to Todos list
{


  if(event.which===13)
  {
  	//console.log("hit enter");
  	 var input= $(this).val();
    
    $("input").val("");

     
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+input+"</li>");


    
    
  }

});

$(".fa-plus").on("click", function(){       //implementation of plus icon
   
  
  $("input[type='text'").fadeToggle();

});






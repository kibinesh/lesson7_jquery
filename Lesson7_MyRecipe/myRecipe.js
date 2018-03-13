
/*    Program Name:  Recipe Display Application
      
      Author:   Kibinesh Fulas    
      
      Date:   March 12 2018

      Filename: myRecipe.js
      
   */
      // this function displays recipe ingriendent and  instruction when  clicked
      
      $(document).ready(function(){
            
            function display(){
                  $(this).next().toggle();
            }
      // this function displays recipe ingriendent and  instruction when hovered      
         function display2(){
    $(this).next().animate({height: 'toggle'}, "slow");
   
       }   
       $("h3").hover( function(){
           $(this).css({"border-style":"solid", "border-color":"lightGray", "border-width": "3px"})
                 ;},
           function(){
               $(this).css( "border-color", "ivory");
           });
       
      // triggers hover effect
      $("h3").hover(display2);
          
      //triggers the display function when clicked
        $("h3").click(display);
           
            }
      );
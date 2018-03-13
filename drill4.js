/*    Program Name:  Recipe Display Application
      
      Author:   Kibinesh Fulas    
      
      Date:   March 9, 2018

      Filename: script1.js
      
   */
   
   //displays the next element after the current target when clicked
      
 $(document).ready( function(){ 
   
     function display(event){
            
           $(event.currentTarget).next().fadeIn("slow");
            
           }
        //displays the next element after the current target when hovered
     function display2(event){
         $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
     }
     //change the background color h3 element when mouse hovers over it
     $("h3").hover( function(){
         $(this).css("background-color", "yellow");}, 
         function(){
             $(this).css("background-color", "pink");
         });
    // triggers hover effect
     $("h3").hover(display2);
     //triggers click event
     $("h3").click(display);

 });      
           
        
    
/*    Program Name:  Recipe Display Application
      
      Author:   Kibinesh Fulas    
      
      Date:   March 9, 2018

      Filename: script.js
      
   */
      //displays the next element after the current target
      
 $(document).ready( function(){ 
     function display(event){
            
           $(event.currentTarget).next().fadeIn("slow");
            
           }
     //triggers click event
       $("h3").click(display);
            
 });      
           
        
    
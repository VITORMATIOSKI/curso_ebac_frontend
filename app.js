$(document).ready(function(){

     $('#main_form').on('submit', (e)=>{
          e.preventDefault();

          const input = $('#task').val();
          const newTask = $(`<li>${input}<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i></li>`);
          $(newTask).appendTo('ul')
          $('#task').val('');


     })

     $('ul').on('click', ".fa-check", function(){
          $(this).parent("li").addClass('Check');
      })

      $('ul').on('click', ".fa-trash", function(){
          $(this).parent("li").fadeOut(200);
      })

})
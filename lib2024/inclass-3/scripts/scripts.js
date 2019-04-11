$( document ).ready(function() {
  $('#show').click(()=>{
    $('#content').show();
  });
  $('#hide').click(()=>{
    $('#content').hide();
  });
  $('#small').click(()=>{
    $('#content').css('font-size', '12px');
  });
  $('#big').click(()=>{
    $('#content').css('font-size', '48px');
  });
  $('#blue').click(()=>{
    $('#content').css('background-color', '#C5CAE9');
  });
  $('#red').click(()=>{
    $('#content').css('background-color', '#ffa291');
  });
});
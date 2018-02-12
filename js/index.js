$(document).ready(function(){
  //when search is clicked run function
$('#search').click(function(){
  //gets search input
var searchTerm = $('#searchTerm').val();

var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
      type:"GET",
      url: url,
      async:false,
      dataType:"json",
      success: function(data){
        
      $("#output").empty();
        
      for(var i = 0; i < data[1].length; i++){
           $("#output").prepend("<div><div class = ' output1 btn-default'><a href = "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></div></div>");  
      }  
      $("#searchTerm").val("");  
        
      },
      error:function(errorMessage){
        alert("error");
      }
      });

  });
  
   $("#searchTerm").keypress(function(e){
    if(e.which == 13){
     $("#search").click();
    }
      });
});

$(function () {
    let searchIcon = $(".searchIcon");
    let searchArea = $(".searchArea");
    let crossIcon = $(".crossIcon");
    let searchBar = $(".searchBar");
   // let fadeOut = $(".fadeOut");

    

    searchIcon.click(function(){
    searchArea.slideDown(300);  
    });
   crossIcon.click(function(){
    searchBar.fadeout(400);
   });
        

});



//$(function () {
   // let searchIcon = $(".searchIcon");
   // let searchArea = $(".searchArea");
    //let crossIcon = $(".crossIcon")

    //searchIcon.click(function(){
   // searchArea.slideDown(300);  
    //});
   // crossIcon.click(function(){
    //    searchArea.fadeOut(400);
   // });
        

//});

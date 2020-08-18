
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

$("#add_new_UG_row").click(function () { 

    $("#UG_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});
$("#add_new_PG_row").click(function () { 

    $("#PG_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});
$("#add_new_MT_row").click(function () { 

    $("#MT_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_BT_row").click(function () { 

    $("#BT_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_PT_row").click(function () { 

    $("#PT_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_P_row").click(function () { 

    $("#P_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_E_row").click(function () { 

    $("#E_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_AR_row").click(function () { 

    $("#AR_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});


counting = 0;
    
$("#new_row1").click(function () {
      
    countClicks=0;      

      if(document.getElementById('new_row1').onclick = "click()") {
                    countClicks++;
                    counting++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="UGSubjects1" id="UGSubjecti1_'+[counting+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="UGSubjects2" id="UGSubjecti2_'+[counting+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="UGSubjects3" id="UGSubjecti3_'+[counting+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="UGSubjects4" id="UGSubjecti4_'+[counting+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#UG_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting)+"yash");
        for(i=1;i<=(countClicks);i++)
        {
            tds += '<td>' + '<p name="UGdisplays_disp_1" id="UGdisplayi1_'+[counting+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="UGdisplays_disp_2" id="UGdisplayi2_'+[counting+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="UGdisplays_disp_3" id="UGdisplayi3_'+[counting+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="UGdisplays_disp_4" id="UGdisplayi4_'+[counting+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});

//countClicks=0;
 $(".new_rowdisp").click(function () {

 
      if(counting!=0){


   
  for(i=1;i<=(counting+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("UGdisplayi"+[j]+"_"+[i]).innerHTML=
              document.getElementById("UGSubjecti"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("UGdisplayi"+[j]+"_1").innerHTML=
              document.getElementById("UGSubjecti"+[j]+"_1").value;
    }
        

}

});
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
     
 counting1=0;    
$("#new_row2").click(function () {
      
    countClicks1=0;      

      if(document.getElementById('new_row2').onclick = "click()") {
                    countClicks1++;
                    counting1++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks1;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="PGSubjects1" id="PGSubjecti1_'+[counting1+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="PGSubjects2" id="PGSubjecti2_'+[counting1+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#PG_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting1)+"yash");
        for(i=1;i<=(countClicks1);i++)
        {
            tds += '<td>' + '<p name="PGdisplays_disp_1" id="PGdisplayi1_'+[counting1+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="PGdisplays_disp_2" id="PGdisplayi2_'+[counting1+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting1!=0){


   
  for(i=1;i<=(counting1+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("PGdisplayi"+[j]+"_"+[i]).innerHTML=
              document.getElementById("PGSubjecti"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("PGdisplayi"+[j]+"_1").innerHTML=
              document.getElementById("PGSubjecti"+[j]+"_1").value;
    }
        

}

});

      
 counting2=0;    
$("#new_row3").click(function () {
      
    countClicks2=0;      

      if(document.getElementById('new_row3').onclick = "click()") {
                    countClicks2++;
                    counting2++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks2;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="MTech1" id="MTech1_'+[counting2+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="MTech2" id="MTech2_'+[counting2+1]+'">' + '</td></br>';
                 //    '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                  //   '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#MT_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting2)+"yash");
        for(i=1;i<=(countClicks2);i++)
        {
            tds += '<td>' + '<p name="MTdisplays1" id="MTdisplays1_'+[counting2+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="MTdisplays2" id="MTdisplays2_'+[counting2+1]+'">' + '</td></br>';
                    // '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     //'<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting2!=0){


   
  for(i=1;i<=(counting2+1);i++)
  {
    var j=1;
    for(j=1;j<=2;j++)
    {
      
        document.getElementById("MTdisplays"+[j]+"_"+[i]).innerHTML=
              document.getElementById("MTech"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=2;j++)
  {
   
        document.getElementById("MTdisplays"+[j]+"_1").innerHTML=
              document.getElementById("MTech"+[j]+"_1").value;
    }
        

}

});
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      
 counting3=0;    
$("#new_row4").click(function () {
      
    countClicks3=0;      

      if(document.getElementById('new_row4').onclick = "click()") {
                    countClicks3++;
                    counting3++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks3;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="btechthesis1" id="btechthesis1_'+[counting3+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="btechthesis2" id="btechthesis2_'+[counting3+1]+'">' + '</td></br>';
                 //    '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                  //   '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#BT_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting3)+"yash");
        for(i=1;i<=(countClicks3);i++)
        {
            tds += '<td>' + '<p name="btechthesis1" id="btechthe_disp1_'+[counting3+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="btechthesis2" id="btechthe_disp2_'+[counting3+1]+'">' + '</td></br>';
                    // '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     //'<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting3!=0){


   
  for(i=1;i<=(counting3+1);i++)
  {
    var j=1;
    for(j=1;j<=2;j++)
    {
      
        document.getElementById("btechthe_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("btechthesis"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=2;j++)
  {
   
        document.getElementById("btechthe_disp"+[j]+"_1").innerHTML=
              document.getElementById("btechthesis"+[j]+"_1").value;
    }
        

}

});

////////////////////////////////////////////////////////////////////////////////////////////////////////

 counting4=0;    
$("#new_row5").click(function () {
      
    countClicks4=0;      

      if(document.getElementById('new_row5').onclick = "click()") {
                    countClicks4++;
                    counting4++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks4;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="phdthesis1" id="phdthesis1_'+[counting4+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="phdthesis2" id="phdthesis2_'+[counting4+1]+'">' + '</td></br>';
                 //    '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                  //   '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#PT_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           
        for(i=1;i<=(countClicks4);i++)
        {
            tds += '<td>' + '<p name="phdthesis1" id="phdthe_disp1_'+[counting4+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="phdthesis2" id="phdthe_disp2_'+[counting4+1]+'">' + '</td></br>';
                    // '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     //'<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting4!=0){
   var i = 1;
   for(i=1;i<=(counting4+1);i++)
  {
    var j=1;
    for(j=1;j<=2;j++)
    {
         console.log((counting4)+"yash");
        document.getElementById("phdthe_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("phdthesis"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=2;j++)
  {
   
        document.getElementById("phdthe_disp"+[j]+"_1").innerHTML=
              document.getElementById("phdthesis"+[j]+"_1").value;
    }
        

}

});     

 //////////////////////////////////////////////////////////////////////////////


 counting5=0;    
$("#new_row6").click(function () {
      
    countClicks5=0;      

      if(document.getElementById('new_row6').onclick = "click()") {
                    countClicks5++;
                    counting5++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks5;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="research1" id="research1_'+[counting5+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="research2" id="research2_'+[counting5+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="research3" id="research3_'+[counting5+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="research4" id="research4_'+[counting5+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#P_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting5)+"yash");
        for(i=1;i<=(countClicks5);i++)
        {
            tds += '<td>' + '<p name="research1" id="research_disp1_'+[counting5+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="research2" id="research_disp2_'+[counting5+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="research3" id="research_disp3_'+[counting5+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="research4" id="research_disp4_'+[counting5+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting5!=0){


   
  for(i=1;i<=(counting5+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("research_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("research"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("research_disp"+[j]+"_1").innerHTML=
              document.getElementById("research"+[j]+"_1").value;
    }
        

}

});

/////////////////////////////////////////////////////////////////////////////////////////

 counting6=0;    
$("#new_row7").click(function () {
      
    countClicks6=0;      

      if(document.getElementById('new_row7').onclick = "click()") {
                    countClicks6++;
                    counting6++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks6;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="experiment1" id="experiment1_'+[counting6+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="experiment2" id="experiment2_'+[counting6+1]+'">' + '</td></br>';
                 //    '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                  //   '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#E_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           
        for(i=1;i<=(countClicks6);i++)
        {
            tds += '<td>' + '<p name="experiment1" id="experiment_disp1_'+[counting6+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="experiment2" id="experiment_disp2_'+[counting6+1]+'">' + '</td></br>';
                    // '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     //'<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting6!=0){
   var i = 1;
   for(i=1;i<=(counting6+1);i++)
  {
    var j=1;
    for(j=1;j<=2;j++)
    {
         console.log((counting6)+"yash");
        document.getElementById("experiment_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("experiment"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=2;j++)
  {
   
        document.getElementById("experiment_disp"+[j]+"_1").innerHTML=
              document.getElementById("experiment"+[j]+"_1").value;
    }
        

}

});     

 //////////////////////////////////////////////////////////////////////////////


 counting7=0;    
$("#new_row8").click(function () {
      
    countClicks7=0;      

      if(document.getElementById('new_row8').onclick = "click()") {
                    countClicks7++;
                    counting7++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks7;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="OAR1" id="OAR1_'+[counting7+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="OAR2" id="OAR2_'+[counting7+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="OAR3" id="OAR3_'+[counting7+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="OAR4" id="OAR4_'+[counting7+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting7)+"yash");
        for(i=1;i<=(countClicks7);i++)
        {
            tds += '<td>' + '<p name="OAR1" id="OAR_disp1_'+[counting7+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="OAR2" id="OAR_disp2_'+[counting7+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="OAR3" id="OAR_disp3_'+[counting7+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="OAR4" id="OAR_disp4_'+[counting7+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting7!=0){


   
  for(i=1;i<=(counting7+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("OAR_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("OAR"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("OAR_disp"+[j]+"_1").innerHTML=
              document.getElementById("OAR"+[j]+"_1").value;
    }
        

}

});

/////////////////////////////////////////////////////////////////////////////////////////


 counting8=0;    
$("#new_row9").click(function () {
      
    countClicks8=0;      

      if(document.getElementById('new_row9').onclick = "click()") {
                    countClicks8++;
                    counting8++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks8;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="experiment1" id="experiment1_'+[counting8+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="experiment2" id="experiment2_'+[counting8+1]+'">' + '</td></br>';
                 //    '<td>' + '<input type="text" name="PGSubjects3" id="PGSubjecti3_'+[counting1+1]+'">' + '</td></br>'+
                  //   '<td>' + '<input type="text" name="PGSubjects4" id="PGSubjecti4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#E_table_disp").each(function (){

         var tds = '<tr>';
        var i=1;
           
        for(i=1;i<=(countClicks8);i++)
        {
            tds += '<td>' + '<p name="experiment1" id="experiment_disp1_'+[counting8+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="experiment2" id="experiment_disp2_'+[counting8+1]+'">' + '</td></br>';
                    // '<td>' + '<p name="PGdisplays_disp_3" id="PGdisplayi3_'+[counting1+1]+'">' + '</td></br>'+
                     //'<td>' + '<p name="PGdisplays_disp_4" id="PGdisplayi4_'+[counting1+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting8!=0){
   var i = 1;
   for(i=1;i<=(counting8+1);i++)
  {
    var j=1;
    for(j=1;j<=2;j++)
    {
         console.log((counting8)+"yash");
        document.getElementById("experiment_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("experiment"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=2;j++)
  {
   
        document.getElementById("experiment_disp"+[j]+"_1").innerHTML=
              document.getElementById("experiment"+[j]+"_1").value;
    }
        

}

});     

 //////////////////////////////////////////////////////////////////////////////


 $(".new_rowdisp").click(function () {

 
   
   
        document.getElementById("Award_disp").innerHTML=
              document.getElementById("Awardi").value;
    
        



});     

 //////////////////////////////////////////////////////////////////////////////


 $(".new_rowdisp").click(function () {

    document.getElementById("a_table_dispi").innerHTML=
              document.getElementById("a_table").value;
    
        
        });     

 //////////////////////////////////////////////////////////////////////////////

 $(".new_rowdisp").click(function () {

  document.getElementById("A1_table_disp").innerHTML=
              document.getElementById("A1_table").value;
    
        
        });     


 counting9=0;    
$("#new_row10").click(function () {
      
    countClicks9=0;      

      if(document.getElementById('new_row10').onclick = "click()") {
                    countClicks9++;
                    counting9++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks9;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="Equipment1" id="Equipment1_'+[counting9+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="Equipment2" id="Equipment2_'+[counting9+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="Equipment3" id="Equipment3_'+[counting9+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="Equipment4" id="Equipment4_'+[counting9+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp2").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting9)+"yash");
        for(i=1;i<=(countClicks9);i++)
        {
            tds += '<td>' + '<p name="Equipment1" id="Equipment_disp1_'+[counting9+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="Equipment2" id="Equipment_disp2_'+[counting9+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="Equipment3" id="Equipment_disp3_'+[counting9+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="Equipment4" id="Equipment_disp4_'+[counting9+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting9!=0){


   
  for(i=1;i<=(counting9+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("Equipment_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("Equipment"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("Equipment_disp"+[j]+"_1").innerHTML=
              document.getElementById("Equipment"+[j]+"_1").value;
    }
        

}

});



 counting10=0;    
$("#new_row11").click(function () {
      
    countClicks10=0;      

      if(document.getElementById('new_row11').onclick = "click()") {
                    countClicks10++;
                    counting10++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks10;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="WSC1" id="WSC1_'+[counting10+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="WSC2" id="WSC2_'+[counting10+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="WSC3" id="WSC3_'+[counting10+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="WSC4" id="WSC4_'+[counting10+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp3").each(function (){

         var tds = '<tr>';
        var i=1;
           //console.log((counting10)+"yash");
        for(i=1;i<=(countClicks10);i++)
        {
          console.log("yash");
            tds += '<td>' + '<p name="WSC1" id="WSC_disp1_'+[counting10+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="WSC2" id="WSC_disp2_'+[counting10+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="wSC3" id="WSC_disp3_'+[counting10+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="WSC4" id="WSC_disp4_'+[counting10+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting10!=0){


   var i=1;
  for(i=1;i<=(counting10+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("WSC_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("WSC"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("WSC_disp"+[j]+"_1").innerHTML=
              document.getElementById("WSC"+[j]+"_1").value;
    }
        

}

});

/////////////////////////////////////////////////////////////////////////////////////////


 $(".new_rowdisp").click(function () {

        document.getElementById("ATABLE_disp").innerHTML=
              document.getElementById("ATABLE").value;
    
        });     

//////////////////////////////////////////////

counting11=0;    
$("#new_row12").click(function () {
      
    countClicks11=0;      

      if(document.getElementById('new_row12').onclick = "click()") {
                    countClicks11++;
                    counting11++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks11;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="Details1" id="Details1_'+[counting11+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="Details2" id="Details2_'+[counting11+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="Details3" id="Details3_'+[counting11+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="Details4" id="Details4_'+[counting11+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu")); 
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp4").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting11)+"yash");
        for(i=1;i<=(countClicks11);i++)
        {
            tds += '<td>' + '<p name="Details1" id="Details_disp1_'+[counting11+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="Details2" id="Details_disp2_'+[counting11+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="Details3" id="Details_disp3_'+[counting11+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="Details4" id="Details_disp4_'+[counting11+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting11!=0){


   
  for(i=1;i<=(counting11+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("Details_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("Details"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("Details_disp"+[j]+"_1").innerHTML=
              document.getElementById("Details"+[j]+"_1").value;
    }
        

}

});

//////////////////////////////////////////////

counting13=0;    
$("#new_row14").click(function () {
      
    countClicks13=0;      

      if(document.getElementById('new_row14').onclick = "click()") {
                    countClicks13++;
                    counting13++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks13;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="activities1" id="activities1_'+[counting13+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="activities2" id="activities2_'+[counting13+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="activities3" id="activities3_'+[counting13+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="activities4" id="activities4_'+[counting13+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu")); 
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp6").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting13)+"yash");
        for(i=1;i<=(countClicks13);i++)
        {
            tds += '<td>' + '<p name="activities1" id="activities_disp1_'+[counting13+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="activities2" id="activities_disp2_'+[counting13+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="activities3" id="activities_disp3_'+[counting13+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="activities4" id="activities_disp4_'+[counting13+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting13!=0){


   
  for(i=1;i<=(counting13+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("activities_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("activities"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("activities_disp"+[j]+"_1").innerHTML=
              document.getElementById("activities"+[j]+"_1").value;
    }
        

}

});


 $(".new_rowdisp").click(function () {

        document.getElementById("ATABLE1_disp").innerHTML=
              document.getElementById("ATABLE1").value;
    
        });     




$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE1_disp").innerHTML=
              document.getElementById("ATABLE1").value;
    
        });     

$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE2_disp").innerHTML=
              document.getElementById("ATABLE2").value;
    
        });     

$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE3_disp").innerHTML=
              document.getElementById("ATABLE3").value;
    
        });     

$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE4_disp").innerHTML=
              document.getElementById("ATABLE4").value;
    
        });     

$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE5_disp").innerHTML=
              document.getElementById("ATABLE5").value;
    
        });     

$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE6_disp").innerHTML=
              document.getElementById("ATABLE6").value;
    
        });     


//////////////////////////////////////////////

counting12=0;    
$("#new_row13").click(function () {
      
    countClicks12=0;      

      if(document.getElementById('new_row13').onclick = "click()") {
                    countClicks12++;
                    counting12++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks12;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="details1" id="details1_'+[counting12+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="details2" id="details2_'+[counting12+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="details3" id="details3_'+[counting12+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="details4" id="details4_'+[counting12+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu")); 
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp5").each(function (){

         var tds = '<tr>';
        var i=1;
           console.log((counting12)+"yash");
        for(i=1;i<=(countClicks12);i++)
        {
            tds += '<td>' + '<p name="details1" id="details_disp1_'+[counting12+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="details2" id="details_disp2_'+[counting12+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="details3" id="details_disp3_'+[counting12+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="details4" id="details_disp4_'+[counting12+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting12!=0){


   
  for(i=1;i<=(counting12+1);i++)
  {
    var j=1;
    for(j=1;j<=4;j++)
    {
        document.getElementById("details_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("details"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=4;j++)
  {
   
    
        document.getElementById("details_disp"+[j]+"_1").innerHTML=
              document.getElementById("details"+[j]+"_1").value;
    }
        

}

});



//////////////////////////////////////////////

counting14=0;    
$("#new_row15").click(function () {
      
    countClicks14=0;      

      if(document.getElementById('new_row15').onclick = "click()") {
                    countClicks14++;
                    counting14++;
                 }
              

    var parent = $(this).parent().children(); // or var clickedBtnID = this.id
  //  console.log(parent[0])

    $(parent[0]).each(function () {
       
        var tds = '<tr>';
        var i=1;
        for(i=1;i<=countClicks14;i++)
        {
           // alert("done");
            tds += '<td>' + '<input type="text" name="development1" id="development1_'+[counting14+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="development2" id="development2_'+[counting14+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="development3" id="development3_'+[counting14+1]+'">' + '</td></br>'+
                     '<td>' + '<input type="text" name="development4" id="development4_'+[counting14+1]+'">' + '</td></br>'+
                    '<td>' + '<input type="text" name="development5" id="development5_'+[counting14+1]+'">' + '</td></br>';
         }    

            //console.log($(tds.length+"yashu")); 
       //console.log(counting+"yash");
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });

 //console.log(countClicks);


        $("#AR_table_disp7").each(function (){

         var tds = '<tr>';
        var i=1;
           
        for(i=1;i<=(countClicks14);i++)
        {
            tds += '<td>' + '<p name="development1" id="development_disp1_'+[counting14+1]+'">' + '</td></br>'+
                    '<td>' + '<p name="development2" id="development_disp2_'+[counting14+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="development3" id="development_disp3_'+[counting14+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="development4" id="development_disp4_'+[counting14+1]+'">' + '</td></br>'+
                     '<td>' + '<p name="development5" id="development_disp5_'+[counting14+1]+'">' + '</td></br>';
         }   

            //console.log($(tds.length+"yashu"));
       
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
           // alert("done");
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }     
        }); 

});


 $(".new_rowdisp").click(function () {

 
      if(counting14!=0){


   
  for(i=1;i<=(counting14+1);i++)
  {
    var j=1;
    for(j=1;j<=5;j++)
    {
        document.getElementById("development_disp"+[j]+"_"+[i]).innerHTML=
              document.getElementById("development"+[j]+"_"+[i]).value;
    }
  }
}               

else {
      
  for(j=1;j<=5;j++)
  {
   
    
        document.getElementById("development_disp"+[j]+"_1").innerHTML=
              document.getElementById("development"+[j]+"_1").value;
    }
        

}

});


$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE7_disp").innerHTML=
              document.getElementById("ATABLE7").value;
    
        });     


$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE8_disp").innerHTML=
              document.getElementById("ATABLE8").value;
    
        });     


$(".new_rowdisp").click(function () {

        document.getElementById("ATABLE9_disp").innerHTML=
              document.getElementById("ATABLE9").value;
    
        });     

    // $("input").parent(".new_rowd").each(function () {

    //      $(".new_rowd").child("new_table").each(function () {

    //     var tds = '<tr>';
    //     jQuery.each($('tr:last td', this), function () {
    //         tds += '<td>' + $(this).html() + '</td>';
    //     });
    //     tds += '</tr>';
    //     if ($('tbody', this).length > 0) {
    //         $('tbody', this).append(tds);
    //     } else {
    //         $(this).append(tds);
    //     }     

    //      });   
        
    // });

$("#add_new_A_row").click(function () { 

    $("#A_table").each(function () {
       
        var tds = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            tds += '<td>' + $(this).html() + '</td>';
        });
        tds += '</tr>';
        if ($('tbody', this).length > 0) {
            $('tbody', this).append(tds);
        } else {
            $(this).append(tds);
        }
    });
});

$("#add_new_file_row").click(function () { 

    $("#BT_files").each(function () {

        $(this).append('<input type="file" class="form-control-file"></input>');
        
    });
});
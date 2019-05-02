    $('#news').click( function() {


    // $("#news").toggleClass("selected");
    // $("[id=elemid]").toggleClass("selected");


    // if(!$("#news").hasClass("selected")){
    //     $("#news").addClass("selected");
    // }
    // else{
    //     $("#news").removeClass("selected");
    //     $("#sobre").removeClass("selected");
    //     $("#work").removeClass("selected");
    //     $("#pesq").removeClass("selected");
       
    // }

    $(".card").toggleClass("transparent");
    $(".card").toggleClass("visible");
  

    if($(".sobreCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
    	$(".sobreCard").addClass("transparent");
   		$(".contatoCard").addClass("transparent");
        $(".soloCard").addClass("transparent");
        $(".colabCard").addClass("transparent");
        $(".improvCard").addClass("transparent");
        $(".discCard").addClass("transparent");
        $(".pesqCard").addClass("transparent");

    }
    $(".sobreCard").removeClass("visible");
    $(".contatoCard").removeClass("visible");
    $(".colabCard").removeClass("visible");
    $(".soloCard").removeClass("visible");
    $(".improvCard").removeClass("visible");
    $(".discCard").removeClass("visible");
    $(".pesqCard").removeClass("visible");



} );


$('#sobre').click( function() {

    //  if(!$("#sobre").hasClass("selected")){
    //     $("#sobre").addClass("selected");
    // }
    // else{
    //     $("#news").removeClass("selected");
    //     $("#sobre").removeClass("selected");
    //     $("#work").removeClass("selected");
    //     $("#pesq").removeClass("selected");
       
    // }
   
   
    $(".sobreCard").toggleClass("transparent");
    $(".sobreCard").toggleClass("visible");
    if($(".card").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
    	$(".card").addClass("transparent");
        $(".contatoCard").addClass("transparent");
    	$(".soloCard").addClass("transparent");
        $(".colabCard").addClass("transparent");
        $(".improvCard").addClass("transparent");
        $(".discCard").addClass("transparent");
        $(".pesqCard").addClass("transparent");

   
    }

    $(".card").removeClass("visible");
    $(".contatoCard").removeClass("visible");
    $(".soloCard").removeClass("visible");
    $(".colabCard").removeClass("visible");
    $(".improvCard").removeClass("visible");
    $(".discCard").removeClass("visible");
    $(".pesqCard").removeClass("visible");

} );

$('#work').click( function() {
    $(".soloCard").toggleClass("transparent");
    $(".soloCard").toggleClass("visible");
    $(".colabCard").toggleClass("transparent");
    $(".colabCard").toggleClass("visible");
    $(".improvCard").toggleClass("transparent");
    $(".improvCard").toggleClass("visible");
    $(".discCard").toggleClass("transparent");
    $(".discCard").toggleClass("visible");
   
   

    if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
        $(".card").addClass("transparent");
        $(".sobreCard").addClass("transparent");
        $(".contatoCard").addClass("transparent");
        
        $(".improvCard").addClass("transparent");
        
        $(".pesqCard").addClass("transparent");
    }


    $(".card").removeClass("visible");
    $(".sobreCard").removeClass("visible");
    $(".contatoCard").removeClass("visible");
   
    
    $(".discCard").removeClass("visible");
    $(".pesqCard").removeClass("visible");


} );

// $('#colab').click( function() {
//     $(".colabCard").toggleClass("transparent");
//     $(".colabCard").toggleClass("visible");
//     if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
//         $(".card").addClass("transparent");
//         $(".sobreCard").addClass("transparent")
//         $(".soloCard").addClass("transparent")
//         $(".contatoCard").addClass("transparent")
//         $(".improvCard").addClass("transparent");
//         $(".discCard").addClass("transparent");
//         $(".pesqCard").addClass("transparent");
//     }

//     $(".card").removeClass("visible");
//     $(".sobreCard").removeClass("visible");
//     $(".soloCard").removeClass("visible");
//     $(".contatoCard").removeClass("visible");
//     $(".improvCard").removeClass("visible");
//     $(".discCard").removeClass("visible");
//     $(".pesqCard").removeClass("visible");
// } );

// $('#improv').click( function() {
//     $(".improvCard").toggleClass("transparent");
//     $(".improvCard").toggleClass("visible");
//     if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
//         $(".card").addClass("transparent");
//         $(".sobreCard").addClass("transparent");
//         $(".soloCard").addClass("transparent");
//         $(".contatoCard").addClass("transparent");
//         $(".colabCard").addClass("transparent");
//         $(".discCard").addClass("transparent");
//         $(".pesqCard").addClass("transparent");
//     }

//     $(".card").removeClass("visible");
//     $(".sobreCard").removeClass("visible");
//     $(".soloCard").removeClass("visible");
//     $(".contatoCard").removeClass("visible");
//     $(".colabCard").removeClass("visible");
//     $(".discCard").removeClass("visible");
//     $(".pesqCard").removeClass("visible");
// } );

// $('#disc').click( function() {
//     $(".discCard").toggleClass("transparent");
//     $(".discCard").toggleClass("visible");
//     if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
//         $(".card").addClass("transparent");
//         $(".sobreCard").addClass("transparent");
//         $(".soloCard").addClass("transparent");
//         $(".contatoCard").addClass("transparent");
//         $(".colabCard").addClass("transparent");
//         $(".improvCard").addClass("transparent");
//         $(".pesqCard").addClass("transparent");

//     }

//     $(".card").removeClass("visible");
//     $(".sobreCard").removeClass("visible");
//     $(".soloCard").removeClass("visible");
//     $(".contatoCard").removeClass("visible");
//     $(".colabCard").removeClass("visible");
//     $(".improvCard").removeClass("visible");
//     $(".pesqCard").removeClass("visible");
// } );

$('#pesq').click( function() {

    // if(!$("#pesq").hasClass("selected")){
    //     $("#pesq").addClass("selected");
    // }
    // else{
    //     $("#news").removeClass("selected");
    //     $("#sobre").removeClass("selected");
    //     $("#work").removeClass("selected");
    //     $("#pesq").removeClass("selected");
       
    // }

    $(".pesqCard").toggleClass("transparent");
    $(".pesqCard").toggleClass("visible");
    if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".contatoCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".discCard").hasClass("visible")){
        $(".card").addClass("transparent");
        $(".sobreCard").addClass("transparent");
        $(".soloCard").addClass("transparent");
        $(".contatoCard").addClass("transparent");
        $(".colabCard").addClass("transparent");
        $(".improvCard").addClass("transparent");
        $(".discCard").addClass("transparent");

    }

    $(".card").removeClass("visible");
    $(".sobreCard").removeClass("visible");
    $(".soloCard").removeClass("visible");
    $(".contatoCard").removeClass("visible");
    $(".colabCard").removeClass("visible");
    $(".improvCard").removeClass("visible");
    $(".discCard").removeClass("visible");
} );




$('#contato').click( function() {
    $(".contatoCard").toggleClass("transparent");
    $(".contatoCard").toggleClass("visible");
    if($(".card").hasClass("visible")||$(".sobreCard").hasClass("visible")||$(".soloCard").hasClass("visible")||$(".improvCard").hasClass("visible")||$(".colabCard").hasClass("visible")||$(".discCard").hasClass("visible")||$(".pesqCard").hasClass("visible")){
        $(".card").addClass("transparent");
        $(".sobreCard").addClass("transparent");
        $(".soloCard").addClass("transparent");
        $(".improvCard").addClass("transparent");
        $(".colabCard").addClass("transparent");
        $(".discCard").addClass("transparent");
        $(".pesqCard").addClass("transparent");
    }

    $(".card").removeClass("visible");
    $(".sobreCard").removeClass("visible");
    $(".soloCard").removeClass("visible");
    $(".improvCard").removeClass("visible");
    $(".colabCard").removeClass("visible");
    $(".discCard").removeClass("visible");
    $(".pesqCard").removeClass("visible");
} );






$("#inicio").click( function(){
	$(".navbar").removeClass("cursorDefault");
	$(".navbar").addClass("fadeIn");
	$(".inicio").addClass("transparent");
    if($(".socialMedia").hasClass("transparent")){
        $(".socialMedia").removeClass("transparent");
        $(".social").removeClass("displayNone");
        $(".secondNav").removeClass("displayNone");
        $(".social").removeClass("fade");

    }
    
	setTimeout(function(){
	 $(".inicio").addClass("displayNone");
	 }, 1000);
	
});


// language selector


$("#begin").click( function(){
    $(".en").toggleClass("displayNone");
    $(".navbar").removeClass("cursorDefault");
    $(".navbar").addClass("fadeIn");
    $(".inicio").addClass("transparent");
   
    $(".pt").addClass("displayNone");
    if($(".socialMedia").hasClass("transparent")){
        $(".socialMedia").removeClass("transparent");
        $(".social").removeClass("displayNone");
        $(".secondNav").removeClass("displayNone");
        $(".social").removeClass("fade");
       


    }

    
    setTimeout(function(){
     $(".inicio").addClass("displayNone");
     }, 1000);
});

// $("#comezar").click( function(){
//     $(".es").toggleClass("displayNone");
//     $(".navbar").removeClass("cursorDefault");
//     $(".navbar").addClass("fadeIn");
//     $(".inicio").addClass("transparent");
//     $(".pt").addClass("displayNone");
//     if($(".socialMedia").hasClass("transparent")){
//         $(".socialMedia").removeClass("transparent");
//          $(".social").removeClass("displayNone");
//          $(".social").removeClass("fade");


//     }

    
//     setTimeout(function(){
//      $(".inicio").addClass("displayNone");
//      }, 1000);
// });




// string test


function String(id, startPoint, endPoint) {
    //ctor
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    
    // console.dir(this.canvas);
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;

    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.controlPoint = new Point(0,0);
    this.lastMouseX = this.controlPoint.x;
    this.lastMouseY = this.controlPoint.y;
    this.count = 0;
    this.damping = 0.98;

    this.finishWave = false;
    //add event listener
    var self = this;
    this.canvas.addEventListener('mousemove',  function(pos) { 
        console.dir(pos);
        self.mouseMove(self, pos) 
    }, false);
}

String.prototype.drawArc = function(startPoint, thirdPoint, endPoint, ctx){
    var ctx = ctx;

    var dy1 = thirdPoint.y - startPoint.y;
    var dx1 = thirdPoint.x - startPoint.x;
    var dy2 = endPoint.y - thirdPoint.y;
    var dx2 = endPoint.x - thirdPoint.x;

    var aSlope = dy1/dx1;
    var bSlope = dy2/dx2;  


    var centerX = (aSlope*bSlope*(startPoint.y - endPoint.y) + bSlope*(startPoint.x + thirdPoint.x)
        - aSlope*(thirdPoint.x+endPoint.x) )/( 2* (bSlope-aSlope) );
    var centerY = -1*(centerX - (startPoint.x+thirdPoint.x)/2)/aSlope +  (startPoint.y+thirdPoint.y)/2;
    
    // var centerX = (aSlope*bSlope*(y0 - y2) + bSlope*(x0 + x1)
    //     - aSlope*(x1+x2) )/( 2* (bSlope-aSlope) );
    // var centerY = -1*(centerX - (x0+x1)/2)/aSlope +  (y0+y1)/2;
    var r = dist(centerX, centerY, startPoint.x, startPoint.y)

    var angle = Math.atan2(centerX-startPoint.x, centerY-startPoint.y);

    // console.log(angle);
    if (!angle || this.finishWave){
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        // this.finishWave = true;
    } else if (!this.finishWave){
        if( angle > Math.PI/2) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, r, Math.PI * 1.5-angle, Math.PI * 1.5 + angle, true);
        } else {
            ctx.beginPath();
            ctx.arc(centerX, centerY, r, Math.PI * 1.5-angle, Math.PI * 1.5 + angle, false);
        }
    }

    // ctx.rect(centerX, centerY, 2, 2);
    // ctx.rect(startPoint.x, startPoint.y, 2, 2);
    // ctx.rect(endPoint.x, endPoint.y, 2, 2);
    ctx.stroke();

}
String.prototype.draw = function(){
    
    // draw stuff
    var r = circleCenter(   new Point(this.startPoint.x, this.startPoint.y), 
                            new Point(this.controlPoint.x, this.controlPoint.y), 
                            new Point(this.endPoint.x, this.endPoint.y) ).r;

    if( r > 600 
        && this.controlPoint.x > this.startPoint.x
        && this.controlPoint.x < this.endPoint.x ){
        // console.log(r);

        this.drawArc(this.startPoint, this.controlPoint, this.endPoint, this.ctx);
        this.lastMouseX = this.controlPoint.x;
        this.lastMouseY = this.controlPoint.y;
        this.count = 0;
        this.finishWave = false;

    } else {
        var x = this.lastMouseX;
        var y = this.startPoint.y+(this.lastMouseY-this.startPoint.y)
            *Math.cos(this.count/5*Math.PI)*Math.pow(this.damping, this.count);

        if ( Math.pow(this.damping, this.count) < 0.0001) {
            this.finishWave = true;
        }
        var wavePoint = new Point(x, y);
        this.drawArc(this.startPoint, wavePoint, this.endPoint, this.ctx);
        this.count++;
    }
};

String.prototype.clear = function(){
    // clear
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


String.prototype.update = function(){
    // update
    
};

String.prototype.mouseMove = function(self, pos){
    self.controlPoint.x = pos.layerX;
    self.controlPoint.y = pos.layerY;   
};

/*Created By Wenting Zhang 
*/

var dist = function(x, y, x0, y0){
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

var circleCenter = function(startPoint, thirdPoint, endPoint){
    var dy1 = thirdPoint.y - startPoint.y;
    var dx1 = thirdPoint.x - startPoint.x;
    var dy2 = endPoint.y - thirdPoint.y;
    var dx2 = endPoint.x - thirdPoint.x;

    var aSlope = dy1/dx1;
    var bSlope = dy2/dx2;  


    var centerX = (aSlope*bSlope*(startPoint.y - endPoint.y) + bSlope*(startPoint.x + thirdPoint.x)
        - aSlope*(thirdPoint.x+endPoint.x) )/( 2* (bSlope-aSlope) );
    var centerY = -1*(centerX - (startPoint.x+thirdPoint.x)/2)/aSlope +  (startPoint.y+thirdPoint.y)/2;
    var r = dist(centerX, centerY, startPoint.x, startPoint.y)

    // return [centerX, centerY, r];
    return {
        x: centerX,
        y: centerY,
        r: r
    };
}

var Point = function (x,y){
    this.x=x;
    this.y=y;
}


window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 10000 / 60);
    };
})();

var myString = new String('myCanvas', new Point(300, 70.5), new Point(900, 70.5));
(function animate() {   
    // update
    myString.update();
    // clear
    myString.clear();
    
    // draw stuff
    // console.log("run every frame");
    myString.draw();


    // request new frame
    requestAnimFrame(function() {
      animate();
    });
})()

// disco spining thing
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);



// $("#news").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
    
//         $("#news").toggleClass("selected");
    
    
// });

// $("#sobre").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
//     $("#sobre").toggleClass("selected");
// });

// $("#solo").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
//     $("#solo").toggleClass("selected");
// });

// $("#colab").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
//     $("#colab").toggleClass("selected");
// });

// $("#news").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
//     $("#news").toggleClass("selected");
// });

// $("#news").click(function(){
//     if($(".menu-item").hasClass("selected")){
//         $("menu-item").removeClass("selected");
//     }
//     $("#news").toggleClass("selected");
// });

// $("#news").click(function(){
//     if(!$("#news").hasClass("selected")){
//         $("#news").addClass("selected");
//     }
//     else{
//         $("#news").removeClass("selected");
//     }
// });




// Add active class to the current button (highlight it)
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}





$("#work").click(function(){
    $(".soloCard").addClass("noWidth");
    $(".colabCard").addClass("colabWidth");
    $(".improvCard").addClass("improvWidth");
    $(".discCard").addClass("discWidth");
    if($(".improvCard").hasClass("visible")){
        $(".improvCard").removeClass("transparent");
    }else{
        $(".improvCard").addClass("transparent");
    }
    
});

function soloPush(){
      $(".soloCard").toggleClass("noWidth");
    $(".colabCard").addClass("pushColab");
    $(".colabCard").addClass("colabWidth");
    $(".improvCard").addClass("improvWidth");
    $(".improvCard").addClass("pushImprov");
     $(".discCard").addClass("discWidth");
    $(".discCard").addClass("pushDisc");
   

    if($(".improvCard").hasClass("pushImprov")||$(".colabCard").hasClass("pushColab")){
        $(".improvCard").removeClass(".pushImprov");
        $(".colabCard").removeClass(".pushColab");
    }

}

function closeVideo(){
    $(".videoOne").addClass("heightZero");
    $(".videoTwo").addClass("heightZero");
    $(".videoThree").addClass("heightZero");
    $(".videoColabOne").addClass("heightZero");
    $(".videoImprovOne").addClass("heightZero");
}



$("#soloBtn").click(function(){
  
    $("#soloBtn").addClass("activeBtn");
    $("#soloBtn").removeClass("closedCard");

    closeVideo();

     
    soloPush();
    
    // if(width<=900 && $("#soloBtn").hasClass("activeBtn")){
    //     $(".colabCard").addClass("colabDown");
    //     $(".improvCard").addClass("improvDown");
    //     $(".discCard").addClass("discDown");
        

    // }
    if(width<=900 && $("#soloBtn").hasClass("closedCard")){
        $(".colabCard").removeClass("colabDown");
        $(".improvCard").removeClass("improvDown");
        $(".discCard").removeClass("discDown");
        $(".liWork").removeClass("liWorkOpen");
        $(".work").removeClass("workOpen");

         console.log("this is if solo")

    }
    else{
        $(".colabCard").addClass("colabDown");
        $(".improvCard").addClass("improvDown");
        $(".discCard").addClass("discDown");
        $(".liWork").addClass("liWorkOpen");
        $(".work").addClass("workOpen");
        $("#soloBtn").addClass("closedCard");

        console.log("this is else solo")
    }

});

function colabPush(){
     $(".colabCard").toggleClass("colabWidth");
    $(".improvCard").addClass("pushImprov");
    $(".improvCard").addClass("improvWidth");
    $(".soloCard").addClass("noWidth");
    $(".discCard").addClass("discWidth");
    $(".discCard").addClass("pushDisc");
    if($(".colabCard").hasClass("pushColab")||$(".improvCard").hasClass(".pushImprovColab")){
        $(".improvCard").removeClass(".pushImprovColab");
        $(".colabCard").removeClass("pushColab");
    }
    
}

$("#colabBtn").click(function(){

    $("#colabBtn").addClass("activeBtn");
    $("#colabBtn").removeClass("closedCard");
    $(".colabCard").removeClass("colabDown");

   closeVideo();
   colabPush();

    if(width<=900 && $("#colabBtn").hasClass("closedCard")){
        
        $(".improvCard").removeClass("improvDown");
        $(".discCard").removeClass("discDown");
        $(".liWork").removeClass("liWorkOpen");
        $(".work").removeClass("workOpen");

        console.log("this is if colab")

    }
    else{
      
        $(".improvCard").addClass("improvDown");
        $(".discCard").addClass("discDown");
        $(".liWork").addClass("liWorkOpen");
        $(".work").addClass("workOpen");
        $("#colabBtn").addClass("closedCard");

        console.log("this is else colab")
    }   



});

function improvPush(){
      $(".improvCard").toggleClass("improvWidth");
    $(".improvCard").removeClass("pushImprov");
    $(".improvCard").removeClass("pushImprovColab");
     $(".soloCard").addClass("noWidth");
    $(".discCard").addClass("discWidth");
    $(".discCard").addClass("pushDisc");
    // $(".improvCard").removeClass(".pushImprov");
    // $(".colabCard").addClass("pushColab");
    $(".soloCard").addClass("noWidth");
    $(".colabCard").addClass("colabWidth");
    if($(".improvCard").hasClass("pushColab")||$(".colabCard").hasClass("pushColab")||$(".discCard").hasClass("pushDisc")){
        $(".improvCard").removeClass("pushImprov");
        $(".colabCard").removeClass("pushColab");
        // $(".discCard").removeClass("pushDisc");

        // $(".colabCard").removeClass("pushColab");
    } 
}

$("#improvBtn").click(function(){

    $("#improvBtn").addClass("activeBtn");
    $("#improvBtn").removeClass("closedCard");
    $(".improvCard").removeClass("improvDown");


     closeVideo();
     improvPush();


     if(width<=900 && $("#improvBtn").hasClass("closedCard")){
        
        $(".improvCard").removeClass("improvDown");
        
        $(".discCard").removeClass("discDown");
        $(".liWork").removeClass("liWorkOpen");
        $(".work").removeClass("workOpen");
        $("#improvBtn").removeClass("closedCard");

        console.log("this is if im")

    }
    else{
      
        $(".colabCard").removeClass("colabDown");
        $(".discCard").addClass("discDown");
        $(".liWork").addClass("liWorkOpen");
        $(".work").addClass("workOpen");
        $("#improvBtn").addClass("closedCard");
        $("#improvBtn").removeClass("activeBtn");

        console.log("this is else im")
    }

});

function discPush(){
     $(".discCard").toggleClass("discWidth");
    $(".discCard").removeClass("pushDisc");
    $(".discCard").removeClass("pushImprov");
    // $(".improvCard").removeClass(".pushImprov");
    // $(".colabCard").addClass("pushColab");
    $(".soloCard").addClass("noWidth");
    $(".colabCard").addClass("colabWidth");
    $(".improvCard").addClass("improvWidth");
    if($(".improvCard").hasClass("pushColab")||$(".colabCard").hasClass("pushColab")||$(".pushImprov").hasClass("pushImprov")){
        $(".improvCard").removeClass("pushImprov");
        $(".colabCard").removeClass("pushColab");
        // $(".colabCard").removeClass("pushColab");
    }

}

$("#discBtn").click(function(){

    $("#discBtn").addClass("activeBtn");
   
    $(".discCard").removeClass("discDown");



   closeVideo();
   discPush();

    if(width<=900 && $("#discBtn").hasClass("closedCard")){
        $(".soloCard").removeClass("soloDown");
        $(".colabCard").removeClass("colabDown");
        $(".improvCard").removeClass("improvDown");
         
       
        $("#discCard").removeClass("closedCard");

         $(".liWork").addClass("liWorkOpen");
        $(".work").addClass("workOpen");
        

       console.log("this is if")
    }

    else{
        console.log("this is else")
        $(".discCard").removeClass("discDown");
       
      
        $("#discBtn").addClass("closedCard");
        $("#discBtn").removeClass("activeBtn");

         $(".liWork").removeClass("liWorkOpen");
        $(".work").removeClass("workOpen");

    }
});

// var count=0;

// ||$("soloCard").hasClass("noWidth")


function videoState(){
    if($(".video").hasClass("open")){
        $(".video").addClass("heightZero");
        $(".video").removeClass("open");

    }else{
        $(".video").removeClass("open");

    }





}

 $(".music").click(function(){
    openPlayer()
 });
 
function openPlayer(){
   
        $(".player").removeClass("displayNone");
    
}

function soloState(){
    $(".soloCard").toggleClass("open");
    if(!($(".soloCard").hasClass("open"))){
        $(".soloCard").addClass("open");
         videoState();
        soloPush();
 }
}

// function colabState(){
//     $(".colabCard").toggleClass("open");
//     if(!($(".colabCard").hasClass("open"))){
//         $(".colabCard").addClass("open");
//          videoState();
//         colabPush();
//  }
// }



// function openCheck(id){
//     var clickedId=$(id).click(function(idClick){
//         if(id!=idClick){
//             videoState();
//         }
//     });
// }

var previousTarget=null;






$(".listenOneBtn").click(function(){
    
 if(this===previousTarget||(!$(".soloCard").hasClass("noWidth"))) {
        // alert("You've clicked this element twice.");
        videoState();
    }
    else{
        soloPush();
    }

    previousTarget=this;

   
   closeVideo();

$(".videoOne").toggleClass("heightZero");
    if($(".videoOne").hasClass("open")){
        $(".videoOne").addClass("heightZero");
    }

     return false;
});


// $(".listenOneBtn").click(function(event){
//     soloState();
    
        // $(".soloCard").addClass("noWidth");
       // videoState()
         
        // openCheck();
    
     // videoState();

     // if(workTabs.tabs.soloTab.soloPlayers[0]!=true){
     // soloPush();
     // }
    // $(".videoOne").toggleClass("heightZero");
    // if($(".videoOne").hasClass("open")){
    //     $(".videoOne").addClass("heightZero");
    // }

    // if(count>=1){
    //     soloPush()
    //     workTabs.tabs.soloTab.soloPlayers[0]=false;
    //     count++;
    // if(workTabs.tabs.soloTab.soloPlayers[0]!=true){
    //     count=0;
         
         
    // }
    
        
        
    // }
   
     // return workTabs.tabs.soloTab.soloPlayers[0]=true;


// });

$(".listenTwoBtn").click(function(){

    if(this===previousTarget||(!$(".soloCard").hasClass("noWidth"))) {
        // alert("You've clicked this element twice.");
        videoState();
    }
    else{
        soloPush();
    }

    previousTarget=this;
   
    closeVideo();


    $(".videoTwo").toggleClass("heightZero");
    if($(".videoTwo").hasClass("open")){
        $(".videoTwo").addClass("heightZero");
    }
   


    // return workTabs.tabs.soloTab.soloPlayers[1]=true;
    return false;
});

$(".listenThreeBtn").click(function(){

    if(this===previousTarget||(!$(".soloCard").hasClass("noWidth"))) {
        // alert("You've clicked this element twice.");
        videoState();
    }
    else{
        soloPush();
    }

    previousTarget=this;

    closeVideo();

    $(".videoThree").toggleClass("heightZero");
    if($(".videoThree").hasClass("open")){
        $(".videoThree").addClass("heightZero");
    }
   


    // return workTabs.tabs.soloTab.soloPlayers[1]=true;
    return false;
});

$(".listenColabOneBtn").click(function(){
    // colabState();
    // if(verifier()=true;){
       if(this===previousTarget||(!$(".colabCard").hasClass("colabWidth"))) {
        // alert("You've clicked this element twice.");
        videoState();
    }
    else{
        colabPush();
    }

    previousTarget=this;

   
   closeVideo();

$(".videoColabOne").toggleClass("heightZero");
    if($(".videoColabOne").hasClass("open")){
        $(".videoColabOne").addClass("heightZero");
    }

     return false;
});



$(".listenImprovOneBtn").click(function(){
    if(this===previousTarget||(!$(".improvCard").hasClass("improvWidth"))) {
        // alert("You've clicked this element twice.");
        videoState();
    }
    else{
        improvPush();
    }

    previousTarget=this;

   
   closeVideo();



    $(".videoImprovOne").toggleClass("heightZero");
    if($(".videoImprovOne").hasClass("open")){
        $(".videoImprovOne").addClass("heightZero");
    }

   return false;
});


// return playing === true;



//========================================= funcao seletora de video aberto ===============================================




// definir abas de work como objetos que tem uma lista de ids???


// 
//     musicArr: "musicArr": 
//             [
//               "playing"= {
//                           isPlaying: false
//                          }
//              ]
// };



// var soloPlayers = [player, player, player];






// var soloTab ={
//    "players":soloPlayers
            
// };





// var playerOne ={};


// var colab ={"player":[.isPlaying=false]};
// var improv={"player":[.isPlaying=false]};
// var disco={"player":[.isPlaying=false]};




   //um array de objetos com uma categoria .playing = true or false



// function verifier(element){
// workTabs.tabs.soloTab.soloPlayers.forEach(function(element){
 

    
//     return element
// });
//     return element
// }


 // if(!(workTabs.tabs.soloTab.soloPlayers.length>=4))


// function isPlaying(){
//     if(workTabs.tabs.soloTab.soloPlayers.some(verifier)==true){

        
//    return "playing";  // comand for adding pushCards and closing videos
// }
// else{

//     soloPush()
//    return "not playing"
// }
// }

// workTabs.tabs.soloTab.soloPlayers.some(verifier)

// definir array de ids

// var playing


// function openWindow(id){


// for each id no array de ids de botoes de musica ou de abas de work


// musicArr.forEach(function(element){
//     if(element.id===id){
//         $()
//     }
// });

//if o id for igual ao clicado


//toggle id open

//else

//ids add class heightZero

//close all abas de work abertas

// return id;

// }


// ============================================letters random color==============================================

// $(document).ready(function() {
// $( ".word" ).mouseover(function() {
// // $(".words").css("background",getRandomColor());

// $(this).css("background",getRandomColor());
// $(this).css("padding",getRandomPadding());
// // $(this).css("color", "white");
// });



// function getRandomColor () {
//  var letters = '0123456789ABCDEF'.split('');
//  var color = '#';
//  for (var i = 0; i < 6; i++) {
//      color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
//     }
// });

// function getRandomPadding(){
//     var min=5; 
//     var max=40;  
//     var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    
//     return random; 
// }


//=====================================player=====================================================

$(".slider").click(function(){
    if($(".soundOff").hasClass("displayNone")){
        $(".soundOff").removeClass("displayNone")
        $(".soundUp").addClass("displayNone")
    }else{
        $(".soundOff").addClass("displayNone")
        $(".soundUp").removeClass("displayNone")
    }
});





// ====================================================================youtube comands=================================================================

var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



     var videos = new Array();
    // var videoSoloOne,videoSoloTwo,videoSoloThree;
    function onYouTubeIframeAPIReady() {
      videos[0] = new YT.Player('videoSoloOne', {
        events: {
          'onStateChange': onPlayerStateChange,
          'enablejsapi':1
        }
      });    
      videos[1] = new YT.Player('videoSoloTwo', {
        events: {
            'onStateChange': onPlayerStateChange,
            'enablejsapi':1
        }
      });
      videos[2] = new YT.Player('videoSoloThree', {
        events: {
            'onStateChange': onPlayerStateChange,
            'enablejsapi':1
        }
      });
      videos[3] = new YT.Player('videoColabOne', {
        events: {
            'onStateChange': onPlayerStateChange,
            'enablejsapi':1
        }
      });
      videos[4] = new YT.Player('videoImprovOne', {
        events: {
            'onStateChange': onPlayerStateChange,
            'enablejsapi':1
        }
      });

    }

       



        


   


var currentVideo;
var previousVideo;
    
    function onPlayerStateChange(event) {

        

      if (event.data == YT.PlayerState.PLAYING) {
         currentVideo = event.target.a.id;
       console.log("video: " + event.target.a.id);
        console.log("currentVideo: " + currentVideo);
        console.log("previousVideo: " + previousVideo);

        
        if(typeof previousVideo === "undefined"){

              previousVideo = currentVideo;
            
             console.log(event.target)
           
        }

       

        else if(previousVideo != event.target.a.id){
            
            //stop previous video from playing
            
            //assing new value for previousVideo?
             previousVideo = currentVideo;
          

            console.log("elseif")

        }
        
       
      
       
      }

      else if(event.data == YT.PlayerState.ENDED){
        console.log("stoped")
      }

       


      
    }

    

    $('.stop').click( function() {
        //loop players array to stop them all
        $(videos).each(function(i){
           this.stopVideo();
          });
      });

         $('.pause').click( function() {
        //loop players array to pause them all
        $(videos).each(function(i){
           this.pauseVideo();
          });
      });



    

   

// =========================================================height and width  ==============================================
var height= window.screen.availHeight;
$(document).css("max-height", "100vh");


console.log(height)
var width = window.screen.availWidth;



// ============================antigo display movendo itens liMenu items para baixo==================================
// if(width<=900){
// $("#liNews").click(function(){
//     $("#liNews").toggleClass("liOpen");
//     $("#liSobre").removeClass("liOpen");
//     $("#liWork").removeClass("liWork");
//     $("#liPesq").removeClass("liOpen");
//     $(".card").css("margin-top", "-185%");


  
//     if($(".liMenu").hasClass("liWorkOpen")){
//         $(".liMenu").removeClass("liWorkOpen");
//     }

//     if($("#liWork").hasClass("liWorkOpen")){
//         $("#liWrok").removeClass("liWorkOpen");
//     }

//     if($(".work").hasClass("workOpen")){
//         $(".work").removeClass("workOpen");
//     }
   

   

// });



// $("#liSobre").click(function(){
//     $("#liSobre").toggleClass("liOpen");
//     $("#liNews").removeClass("liOpen");
//     $("#liWork").removeClass("liWork");
//     $("#liPesq").removeClass("liOpen");
//     $(".sobreCard").css("margin-top", "-185%");

//     if($(".liMenu").hasClass("liWorkOpen")){
//         $(".liMenu").removeClass("liWorkOpen");
//     }

//     if($("#liWork").hasClass("liWorkOpen")){
//         $("#liWrok").removeClass("liWorkOpen");
//     }

//     if($(".work").hasClass("workOpen")){
//         $(".work").removeClass("workOpen");
//     }
   


// });

// $("#liWork").click(function(){
//     $("#liWork").toggleClass("liWork");
//     $("#liNews").removeClass("liOpen");
//     $("#liSobre").removeClass("liOpen");
//     $("#liPesq").removeClass("liOpen");
//     $(".workCard").css("margin-top", "-185%");



//     if($(".liMenu").hasClass("liWorkOpen")){
//         $(".liMenu").removeClass("liWorkOpen");
//     }

//     if($("#liWork").hasClass("liWorkOpen")){
//         $("#liWrok").removeClass("liWorkOpen");
//     }

//     if($(".work").hasClass("workOpen")){
//         $(".work").removeClass("workOpen");
//     }
   


   

// });

// $("#liPesq").click(function(){
//     $("#liPesq").toggleClass("liOpen");
//     $("#liNews").removeClass("liOpen");
//     $("#liSobre").removeClass("liOpen");
//     $("#liWork").removeClass("liWork");
//     $(".pesqCard").css("margin-top", "-81%");

//     if($(".liMenu").hasClass("liWorkOpen")){
//         $(".liMenu").removeClass("liWorkOpen");
//     }

//     if($("#liWork").hasClass("liWorkOpen")){
//         $("#liWrok").removeClass("liWorkOpen");
//     }

//     if($(".work").hasClass("workOpen")){
//         $(".work").removeClass("workOpen");
//     }
   


// });



// }



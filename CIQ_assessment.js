document.addEventListener("DOMContentLoaded", function(event) { 

    var canvas = document.getElementById("IBM-closing-chart");
    var ctx = canvas.getContext("2d");

    ctx.moveTo(45,10);
    ctx.lineTo(45,550);
    ctx.lineTo(990,550);
    ctx.stroke();

    ctx.font = "14px Arial";
    ctx.fillText("22",25,20);
    ctx.fillText("21",25,90);
    ctx.fillText("20",25,160);
    ctx.fillText("19",25,240);
    ctx.fillText("18",25,310);
    ctx.fillText("17",25,380);
    ctx.fillText("16",25,450);
    ctx.fillText("15",25,520);

    ctx.fillText("4/7",50,570);
    ctx.fillText("4/8",95,570);
    ctx.fillText("4/9",140,570);
    ctx.fillText("4/10",185,570);
    ctx.fillText("4/11",230,570);
    ctx.fillText("4/12",275,570);
    ctx.fillText("4/15",320,570);
    ctx.fillText("4/16",365,570);
    ctx.fillText("4/17",410,570);
    ctx.fillText("4/18",455,570);
    ctx.fillText("4/22",500,570);
    ctx.fillText("4/23",545,570);
    ctx.fillText("4/24",590,570);
    ctx.fillText("4/25",635,570);
    ctx.fillText("4/26",680,570);
    ctx.fillText("4/29",725,570);
    ctx.fillText("4/30",765,570);
    ctx.fillText("5/1",810,570);
    ctx.fillText("5/2",855,570);
    ctx.fillText("5/3",900,570);


  });
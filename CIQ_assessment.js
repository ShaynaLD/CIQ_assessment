document.addEventListener("DOMContentLoaded", function(event) { 

    var canvas = document.getElementById("IBM-closing-chart");
    var ctx = canvas.getContext("2d");

    ctx.beginPath()
    ctx.moveTo(45,10);
    ctx.lineTo(45,550);
    ctx.lineTo(990,550);
    ctx.stroke();

    ctx.beginPath()
    //horizontal, whole numbers rules
    ctx.moveTo(45,20);
    ctx.lineTo(990,20);
    ctx.moveTo(45,90);
    ctx.lineTo(990,90);
    ctx.moveTo(45,160);
    ctx.lineTo(990,160);
    ctx.moveTo(45,240);
    ctx.lineTo(990,240);
    ctx.moveTo(45,310);
    ctx.lineTo(990,310);
    ctx.moveTo(45,380);
    ctx.lineTo(990,380);
    ctx.moveTo(45,450);
    ctx.lineTo(990,450);
    ctx.moveTo(45,520);
    ctx.lineTo(990,520);

    //vertical, whole numbers rules
    let x =95;
    ctx.moveTo(x,10);
    ctx.lineTo(x,550);
    while(x <= 999){
        x = x+45;
        console.log(x);
        ctx.moveTo(x,10);
        ctx.lineTo(x,550);
    }

    // ctx.lineTo(990,520);
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;
    ctx.stroke();
    

    ctx.beginPath()
    //horizontal, fractional numbers rules
    ctx.moveTo(45,55);
    ctx.lineTo(990,55);
    ctx.moveTo(45,125);
    ctx.lineTo(990,125);
    ctx.moveTo(45,195);
    ctx.lineTo(990,195);
    ctx.moveTo(45,275);
    ctx.lineTo(990,275);
    ctx.moveTo(45,345);
    ctx.lineTo(990,345);
    ctx.moveTo(45,415);
    ctx.lineTo(990,415);
    ctx.moveTo(45,485);
    ctx.lineTo(990,485);
    // ctx.moveTo(45,520);

    ctx.lineTo(990,520);ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = "14px Arial";
    ctx.fillText("$22",20,20);
    ctx.fillText("$21",20,90);
    ctx.fillText("$20",20,160);
    ctx.fillText("$19",20,240);
    ctx.fillText("$18",20,310);
    ctx.fillText("$17",20,380);
    ctx.fillText("$16",20,450);
    ctx.fillText("$15",20,520);

    ctx.fillText("4/5",50,570);
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


    var closing_price_array=[ 17.52, 17.86, 17.55, 18.24, 17.54, 18.63, 18.09, 18.46, 19.23, 19.50, 19.17, 19.51, 19.88, 19.91, 20.47, 20.39, 20.24, 20.83, 20.75, 20.95, ];
    var moving_average_array = []
    function calculate_moving_average(i){
        // console.log('');
        // console.log('i = ' + i );
        var moving_average;
        if(i===0){
            moving_average = (closing_price_array[0]);
        }
        else if(i>0){
            let prices_to_average=closing_price_array.slice(0,i+1);
            // console.log('prices_to_average = ' + prices_to_average);
            let sum_of_prices=prices_to_average.reduce(add,0)
            function add(accumulator, a) {
                return accumulator + a;
            }
            // console.log('sum_of_prices = ' + sum_of_prices);
            moving_average = ((sum_of_prices)/(i + 1)).toFixed(2);
            // console.log('moving_average in if = '  + moving_average);
        }
        // console.log('closing_price_array[' + i + '] = ' + closing_price_array[i] );
        return moving_average;
    }
    // console.log('calculate_moving_average(0) = ' + calculate_moving_average(0));
    // console.log('calculate_moving_average(1) = ' + calculate_moving_average(1));
    // console.log('calculate_moving_average(2) = ' + calculate_moving_average(2));
    // console.log(' for i=2, sum=52.93, ave=17.64');

    ctx.fillText(calculate_moving_average(0),50,200);
    ctx.fillText(calculate_moving_average(1),95,200);
    ctx.fillText(calculate_moving_average(2),140,200);
    ctx.fillText(calculate_moving_average(3),185,200);
    ctx.fillText(calculate_moving_average(4),230,200);
    ctx.fillText(calculate_moving_average(5),275,200);
    ctx.fillText(calculate_moving_average(6),320,200);
    ctx.fillText(calculate_moving_average(7),365,200);
    ctx.fillText(calculate_moving_average(8),410,200);
    ctx.fillText(calculate_moving_average(9),455,200);
    ctx.fillText(calculate_moving_average(10),500,200);
    ctx.fillText(calculate_moving_average(11),545,200);
    ctx.fillText(calculate_moving_average(12),590,200);
    ctx.fillText(calculate_moving_average(13),635,200);
    ctx.fillText(calculate_moving_average(14),680,200);
    ctx.fillText(calculate_moving_average(15),725,200);
    ctx.fillText(calculate_moving_average(16),765,200);
    ctx.fillText(calculate_moving_average(17),810,200);
    ctx.fillText(calculate_moving_average(18),855,200);
    ctx.fillText(calculate_moving_average(19),900,200);
  });
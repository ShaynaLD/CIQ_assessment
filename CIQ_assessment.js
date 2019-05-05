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
        console.log('');
        console.log('i = ' + i );
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
    console.log('calculate_moving_average(0) = ' + calculate_moving_average(0));
    console.log('calculate_moving_average(1) = ' + calculate_moving_average(1));
    console.log('calculate_moving_average(2) = ' + calculate_moving_average(2));
    // console.log(' for i=2, sum=52.93, ave=17.64');

   
  });
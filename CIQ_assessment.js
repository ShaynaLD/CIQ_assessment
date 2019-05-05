document.addEventListener("DOMContentLoaded", function(event) { 

    var canvas = document.getElementById("IBM-closing-chart");
    var ctx = canvas.getContext("2d");

    //Draw the Grid
    ctx.beginPath()
        ctx.moveTo(45,10);
        ctx.lineTo(45,550);
        ctx.lineTo(990,550);
    ctx.stroke();
    ctx.beginPath()
        //horizontal, whole numbers rules
        let y =20;
        ctx.moveTo(45,y);
        ctx.lineTo(990,y);
        while(y < 500 ){
            y = y+70;
            console.log(y);
            ctx.moveTo(45,y);
            ctx.lineTo(990,y);
        }
        //vertical, whole numbers rules
        let x =95;
        ctx.moveTo(x,10);
        ctx.lineTo(x,550);
        while(x <= 930){
            x = x+45;
            console.log(x);
            ctx.moveTo(x,10);
            ctx.lineTo(x,550);
        }
        ctx.strokeStyle = "#333";
        ctx.lineWidth = .5;
    ctx.stroke();
    ctx.beginPath()
        //horizontal, fractional numbers rules
        let yf =37.5;
        ctx.moveTo(45,yf);
        ctx.lineTo(990,yf);
        while(yf < 530 ){
            yf = yf+17.5;
            console.log(yf);
            ctx.moveTo(45,yf);
            ctx.lineTo(990,yf);
        }
        ctx.lineTo(990,520);ctx.strokeStyle = "#ddd";
        ctx.lineWidth = 1;
    ctx.stroke();


    //add price scall along y-axis
    ctx.font = "14px Arial";
    ctx.fillText("$22",20,20);
    ctx.fillText("$21",20,90);
    ctx.fillText("$20",20,160);
    ctx.fillText("$19",20,240);
    ctx.fillText("$18",20,310);
    ctx.fillText("$17",20,380);
    ctx.fillText("$16",20,450);
    ctx.fillText("$15",20,520);
    //add dates along x-axis
    let date_lable = 85;
    const date_spacer = 45
    ctx.fillText("4/5",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/8",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/9",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/10",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/11",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/12",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/15",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/16",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/17",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/18",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/22",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/23",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/24",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/25",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/26",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/29",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("4/30",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("5/1",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("5/2",date_lable,570);
        date_lable = date_lable + date_spacer;
    ctx.fillText("5/3",date_lable,570);


    //calculate moving average of closing price
    var closing_price_array=[ 17.52, 17.86, 17.55, 18.24, 17.54, 18.63, 18.09, 18.46, 19.23, 19.50, 19.17, 19.51, 19.88, 19.91, 20.47, 20.39, 20.24, 20.83, 20.75, 20.95, ];
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

    //render moving average of closing price     
    ctx.font = "10px Arial";

    let ave_lable_position = 85;
    ctx.fillText(calculate_moving_average(0),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(1),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(2),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(3),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(4),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(5),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(6),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(7),ave_lable_position,200);
      
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(8),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(9),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(10),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(11),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(12),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(13),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(14),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(15),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(16),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(17),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(18),ave_lable_position,200);
   
    ave_lable_position = ave_lable_position + date_spacer;
    ctx.fillText(calculate_moving_average(19),ave_lable_position,200);
  })  
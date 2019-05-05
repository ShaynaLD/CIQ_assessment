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
            ctx.moveTo(45,y);
            ctx.lineTo(990,y);
        }
        //vertical, whole numbers rules
        let x =95;
        ctx.moveTo(x,10);
        ctx.lineTo(x,550);
        while(x <= 930){
            x = x+45;
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
    let date_label = 85;
    const x_axis_increment = 45
    ctx.fillText("4/5",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/8",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/9",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/10",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/11",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/12",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/15",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/16",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/17",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/18",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/22",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/23",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/24",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/25",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/26",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/29",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("4/30",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("5/1",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("5/2",date_label,570);
    
    date_label = date_label + x_axis_increment;
    ctx.fillText("5/3",date_label,570);

    //calculate moving average of closing price
    var closing_price_array=[ 17.52, 17.86, 17.55, 18.24, 17.54, 18.63, 18.09, 18.46, 19.23, 19.50, 19.17, 19.51, 19.88, 19.91, 20.47, 20.39, 20.24, 20.83, 20.75, 20.95, ];
    function calculate_moving_average(i){
        var moving_average;
        if(i===0){
            moving_average = (closing_price_array[0]);
        }
        else if(i>0){
            let prices_to_average=closing_price_array.slice(0,i+1);
            let sum_of_prices=prices_to_average.reduce(add,0)
            function add(accumulator, a) {
                return accumulator + a;
            }
            moving_average = ((sum_of_prices)/(i + 1)).toFixed(2);
        }
        return moving_average;
    }

    //render moving average of closing price     
    ctx.font = "10px Arial";
    ctx.beginPath();

    //line to chart the moving average
    let ave_label_position_x = 85;
    let x_axis_location = 95;


    function calculate_y_coordinates(i){
        //GRID HEIGHT = 540px
        /*
        Y = Chart_max( today_avg / max_avg )
        Y = 500 px * 80% = 400 px
        */
       console.log(calculate_moving_average(i));
        let ave_percent =  (calculate_moving_average(i) / 22);
        // let y_axis_location =  (690-(420 * ave_percent)).toFixed(2);
        // let y_axis_location =  (760-(540 * ave_percent)).toFixed(2);
        let y_axis_location =  760-(540 * ave_percent).toFixed(2);
        console.log('ave_percent = ' + ave_percent);
        console.log('y_axis_location = ' + y_axis_location);
        console.log(' ');
        
        return y_axis_location;
    }

    // ctx.fillText(calculate_moving_average(0),ave_label_position_x,335);
    // ctx.moveTo(x_axis_location, 335);
   
    ctx.fillText(calculate_moving_average(0),ave_label_position_x,335);
    ctx.moveTo(x_axis_location, calculate_y_coordinates(0));
    // console.log('ave_percent = ' + ave_percent);
    // console.log('FIRST y_axis_location = ' + calculate_y_coordinates());

    // ave_label_position_x = ave_label_position_x + x_axis_increment;
    // x_axis_location = x_axis_location + x_axis_increment;    ctx.fillText(calculate_moving_average(1),ave_label_position_x,325);
    // ctx.lineTo(x_axis_location, 325);

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    
    ctx.fillText(calculate_moving_average(1),ave_label_position_x,325);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(1));
    // console.log('ave_percent = ' + ave_percent);
    // console.log(' SECOND y_axis_location = ' + calculate_y_coordinates());

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(2),ave_label_position_x,330);
    // ctx.lineTo(x_axis_location, 330);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(2));
    // console.log(' THIRD y_axis_location = ' + calculate_y_coordinates());



    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(3),ave_label_position_x,315);
    // ctx.lineTo(x_axis_location, 315);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(3));


    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(4),ave_label_position_x,322);
    // ctx.lineTo(x_axis_location, 322);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(4));


    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(5),ave_label_position_x,310);
    // ctx.lineTo(x_axis_location, 310);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(5));


    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(6),ave_label_position_x,308);
    // ctx.lineTo(x_axis_location, 308);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(6));


    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(7),ave_label_position_x,305);
    // ctx.lineTo(x_axis_location, 305);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(7));

    
    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(8),ave_label_position_x,295);
    // ctx.lineTo(x_axis_location, 295);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(8));

   
    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(9),ave_label_position_x,285);
    // ctx.lineTo(x_axis_location, 285);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(9));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(10),ave_label_position_x,280);
    // ctx.lineTo(x_axis_location, 280);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(10));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(11),ave_label_position_x,275);
    // ctx.lineTo(x_axis_location, 275);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(11));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(12),ave_label_position_x,265);
    // ctx.lineTo(x_axis_location, 265);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(12));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(13),ave_label_position_x,260);
    // ctx.lineTo(x_axis_location, 260);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(13));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(14),ave_label_position_x,250);
    // ctx.lineTo(x_axis_location, 250);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(14));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(15),ave_label_position_x,245);
    // ctx.lineTo(x_axis_location, 245);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(15));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(16),ave_label_position_x,240);
    // ctx.lineTo(x_axis_location, 240);
   ctx.lineTo(x_axis_location, calculate_y_coordinates(16));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(17),ave_label_position_x,230);
    // ctx.lineTo(x_axis_location, 230);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(17));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(18),ave_label_position_x,225);
    // ctx.lineTo(x_axis_location, 225);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(18));

    ave_label_position_x = ave_label_position_x + x_axis_increment;
    x_axis_location = x_axis_location + x_axis_increment;    
    ctx.fillText(calculate_moving_average(19),ave_label_position_x,220);
    // ctx.lineTo(x_axis_location, 220);
    ctx.lineTo(x_axis_location, calculate_y_coordinates(19));

    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 1;
    ctx.stroke();
  })

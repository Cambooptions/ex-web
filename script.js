$(document).ready(function(){
    //current time
    const date = new Date();
    const hour = data.getHours();
    let message = '';
    if (hour < 12){
        message = '"Good Morning"'
    }
    if (hour >12){
        message = '"Good Afternoon'
    }
    if(hour >12){
        message = '"Good Evening"'
    }
    $('#welcome').empty().append(message);
})
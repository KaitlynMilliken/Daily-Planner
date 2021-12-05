var currentDay = moment().format('MMMM, Do YYYY');

$("#currentDay").text(currentDay);



$(".row").each(function(){
    let blockTime = $(this).data("time");
    let currentTime = moment().format("HH");
    let row = $(this).find(".time-block");

    console.log(currentTime);

    for(let item in localStorage){
        if(item == blockTime){
            $(row).find("span").remove();
            let newEvent = $("<span></span>");
            newEvent.text(localStorage[item]);
            newEvent.addClass("event-text");
            newEvent.attr('data-event-text', localStorage[item]);
            newEvent.attr('data-event-time', item);
            newEvent.attr('contenteditable', true);
            $(this).find(".time-block").append(newEvent);
        }
    }

    if(blockTime < currentTime){
        $(row).addClass("past");
        console.log("here");
    } else if(blockTime == currentTime){
        $(row).addClass("present");
    } else if(blockTime > currentTime){
        $(row).addClass("future");
    }
});

$(".saveBtn").on("click", function(){
    let myevent = $(this).siblings(".time-block").children(".event-text")[0];
    let updatedEvent = {};

    console.log(myevent);

    updatedEvent.text = myevent.innerText;
    updatedEvent.time = myevent.dataset.eventTime;
    console.log(updatedEvent.time);

    localStorage.setItem(updatedEvent.time, updatedEvent.text);
});
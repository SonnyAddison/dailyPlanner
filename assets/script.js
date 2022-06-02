/* Sets up the date in the header */
function getHeaderDate() {
    let updateCurrentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(updateCurrentHeaderDate);
}

/* loads date in the header */
getHeaderDate();

/* information for the core of the planner */
  let planner = [
    {
        id: "a",
        hour: "09:00",
        time: "09",
        activity: ""
    },
    {
        id: "b",
        hour: "10:00",
        time: "10",
        activity: ""
    },
    {
        id: "c",
        hour: "11:00",
        time: "11",
        activity: ""
    },
    {
        id: "d",
        hour: "12:00",
        time: "12",
        activity: ""
    },
    {
        id: "e",
        hour: "13:00",
        time: "13",
        activity: ""
    },
    {
        id: "f",
        hour: "14:00",
        time: "14",
        activity: ""
    },
    {
        id: "g",
        hour: "15:00",
        time: "15",
        activity: ""
    },
    {
        id: "h",
        hour: "16:00",
        time: "16",
        activity: ""
    },
    {
        id: "i",
        hour: "17:00",
        time: "17",
        activity: ""
    },
    {
        id: "j",
        hour: "18:00",
        time: "18",
        activity: ""
    },
    
]

/* Uses the core information to set up page */
planner.forEach(function(thisHour) {
    /* creates each row*/
    let timeRow = $("<form>").attr({"class": "row"});
    $(".container").append(timeRow);

    /* Hour column */
    let hourColumn = $("<div>").text(`${thisHour.hour}`).attr({"class": "col-sm-2 hour text-right"});

    /* Activity/text area column */
    let activityColumn = $("<div>").attr({"class": "col-md-9 description p-0"});
    let planData = $("<textarea>");
    activityColumn.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({"class": "past"});
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({"class": "present"});
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({"class": "future"});
    }

    /* Save button and icon */
    let saveButton = $("<i class='far fa-save fa-lg'></i>")
    let save = $("<button>").attr({"class": "col-md-1 saveBtn p-0"});
    save.append(saveButton);
    timeRow.append(hourColumn, activityColumn, save);
})

/* Save to Local Storage */
function saveActivity() {
    localStorage.setItem("planner", JSON.stringify(planner));
}

/* Displays local Storage information */
function displayActivity() {
    planner.forEach(function (thisHour) {$(`#${thisHour.id}`).val(thisHour.activity)});
}
/* Changes Local Storage to an Object */
function info() {
    let storedDay = JSON.parse(localStorage.getItem("planner"));
    if (storedDay) {planner = storedDay}
    saveActivity();
    displayActivity();
}
/* Info function */
 info ();

/* Saves data by using the click function*/
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    let saveInfo = $(this).siblings(".description").children(".future").attr("id");
    planner[saveInfo].activity = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveActivity();
    displayActivity();
})

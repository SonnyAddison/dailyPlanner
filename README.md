# dailyPlanner
 Created a daily planner using Jquery and Bootstrap.  Main idea was to only use third pary API's for this body of work

This planner's rows change color based on if the current time is in the past, present or future.  It will save your information that is entered into the local storage and call it back from local storage. 

Below is a link to application: 
https://sonnyaddison.github.io/dailyPlanner/

# User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


```


# Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

```

# Screen Shots

Landing page.
![Fresh daily planner](/assets/images/Landing%20page.JPG)
Enter Activities planned
![Entering activity data](/assets/images/Saved%20Data.JPG)
Saved in Local Storage
![Saved into local Storyage](/assets/images/savesLocalStorage.JPG)
const currentDate = document.querySelector(".current_date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons i");

// getting new date, current year and month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const randerCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth +1, 0).getDate(), // getting last day of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth ).getDay(), // getting last date of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous 

    let liTag = "";

    for(let i = firstDateofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for(let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for(let i = lastDayofMonth; i < 6; i++) {  // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }



    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
randerCalendar();
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { // adding click event on both icons
        //if clicked icon previous icon then decrement current mont by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {  // if current month is less than 0 or greater than 11
            // creating a new date of current Year & month and pass is as date value
            date = new Date(currYear,currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // update current month with new date month
        }else { // else pass new Date as date value
            date = new Date();
        }

        randerCalendar();
    });
});
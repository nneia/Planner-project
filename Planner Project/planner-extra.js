

class thisDay {
 	constructor(){
 		this.ElementOnPage = document.querySelector(".date")
 	}


 	defineTodaysDate(){
 		let dayNumber = new Date().getDate();//сегодняшее число
 		let monthNumber = new Date().getMonth();//номер сегодняшнего месяца

 		let monthsTitles = ["January","Febrary","March","April","May","June","July","August",
 		"September","October","November","December"];
 		


 		if (true) {}
 		let monthTitle = monthsTitles[monthNumber];
 		return (`${monthTitle} ${dayNumber}`)
 	}

 	defineTodaysDay(){
 		let year = new Date().getFullYear();
 		let daysTitles = ["Sunday", "Monday", "Tuesday", 'Wednesday' , "Thirsday", "Friday", "Saturday"];

 		let fullDate = new Date(`${this.defineTodaysDate()}, ${year}`);
 		let weekday = fullDate.getDay();
 		/*var Xmas95 = new Date('November 30, 2019');
		var weekday = Xmas95.getDay();

		console.log(weekday); 
*/
 		let todaysDay = `Today: ${daysTitles[weekday]}`;

 		return todaysDay;

 	}


 	createHtmlDate(){
 		let todaysDay = createElement("p", "day-now");
 		let todaysDate = createElement("p", "date-now");

 		todaysDate.innerText = this.defineTodaysDate();
 		todaysDay.innerText = this.defineTodaysDay();

 		this.ElementOnPage.appendChild(todaysDay);
 		this.ElementOnPage.appendChild(todaysDate);

 	}
}


let today = new thisDay();
today.createHtmlDate();
today.defineTodaysDay();



class modalWindow{

	constructor(){
		this.pinMainButton = document.querySelector(".pin-deadline-button");
		this.elementToAttach = document.querySelector('.body');
		this.pinMainButton.addEventListener("click", () => {
			this.displayModalPin();			
		});
	}


	displayModalPin(){
		this.generateModalPin();
	}
	removeModalPin(){
		let removeObject = document.querySelector(".modal-container");
		removeObject.remove();
	}

	generateModalPin(){
		let modalBackground = createElement("div", "background-shadow");
		let modalContainer = createElement("div", "modal-container");
		this.elementToAttach.appendChild(modalContainer);
		this.elementToAttach.appendChild(modalBackground);
		

			let modalHeader = createElement("p", "modal-header");
			modalHeader.innerText = "Pin a Deadline";
			let newDeadlineContainer = createElement("div", "new-deadline-container");
			modalContainer.appendChild(modalHeader);
			modalContainer.appendChild(newDeadlineContainer);
			modalHeader.innerText = "Pin a Deadline";

				let newDeadlineHeader = createElement("p", "new-deadline-header");
				newDeadlineHeader.innerText = "New Deadline";
				let newDeadlineButton = createElement("p", "new-deadline-button");
				

				newDeadlineContainer.appendChild(newDeadlineHeader);
				newDeadlineContainer.appendChild(newDeadlineButton);
				newDeadlineButton.addEventListener("click", () => {
					this.displayNewDeadlineModal();
					
				});

					let plusIcon = createElement("p", "plus-icon");
					plusIcon.innerText = "+";
					newDeadlineButton.appendChild(plusIcon);


			let existingDeadlineContainer = createElement("div", "existing-deadline-container");
				modalContainer.appendChild(existingDeadlineContainer);
				let existingDeadlineHeader = createElement("p", "existing-deadline-header");
				existingDeadlineHeader.innerText = "Existing";
				existingDeadlineContainer.appendChild(existingDeadlineHeader);

				let existingDeadlineBox = createElement("div", "existing-deadline-box");
				
				
				existingDeadlineContainer.appendChild(existingDeadlineBox);

					let deadlineBoxHeader = createElement("p", "deadline-box-header");
					deadlineBoxHeader.innerText = "Create a Website";
					let deadlineBoxDeadline = createElement("p", "deadline-box-deadline");
					deadlineBoxDeadline.innerText = "27 July";
					let pinButton = createElement("p", "pin-button");
					pinButton.innerText = "Pin";
					existingDeadlineBox.appendChild(deadlineBoxHeader);
					existingDeadlineBox.appendChild(deadlineBoxDeadline);
					existingDeadlineBox.appendChild(pinButton);
	}

	displayNewDeadlineModal(){
		this.generateNewDeadlineModal();
	}
	removeNewDeadlineModal(){
		let removeObject = document.querySelector(".new-deadline-modal");
		removeObject.remove();
	}

	generateNewDeadlineModal(){
		let appendTo = document.querySelector(".body");
		let windowModal = createElement("div", "new-deadline-modal");
		let header = createElement("p", "new-deadline-header-main");
		let subheaderOne = createElement("p", "new-deadline-subheader");
		let EventInput = createElement("input", "new-deadline-event");
		
		let deadlineDateArea = createElement("div", "new-deadline-date-area");
		let selectDay = createElement("select", "new-deadline-select");
		let selectMonth = createElement("select", "new-deadline-select");
		let DayOptions = createElement("option", "new-deadline-options");
		let MonthOptions = createElement("option", "new-deadline-options");
		let subheaderThree = createElement("p", "new-deadline-subheader");
		let checkpointsArea = createElement("div", "new-deadline-checkpoints-area");
		let checkpointInput = createElement("input", "new-deadline-checkpoint");
		let checkpointSelectDay = createElement("select", "new-deadline-checkpoint-select");
		let checkpointSelectMonth = createElement("select", "new-deadline-checkpoint-select");
		let checkpointsDayOptions = createElement("option", "new-deadline-checkpoint-option");
		let checkpointsMonthOptions = createElement("option", "new-deadline-checkpoint-option");
		let newCheckpointButton = createElement("p", "new-deadline-add-checkpoint-button");
		let submitNewDeadlineButton = createElement("p", "submit-new-deadline-button");

		appendTo.appendChild(windowModal);
		windowModal.appendChild(header);
		windowModal.appendChild(subheaderOne);
		windowModal.appendChild(EventInput);
		windowModal.appendChild(deadlineDateArea);
		deadlineDateArea.appendChild(selectDay);
		deadlineDateArea.appendChild(selectMonth);
		selectDay.appendChild(DayOptions);
		selectMonth.appendChild(MonthOptions);
		windowModal.appendChild(subheaderThree);
		windowModal.appendChild(checkpointsArea);
		checkpointsArea.appendChild(checkpointInput);
		checkpointsArea.appendChild(checkpointSelectDay);
		checkpointsArea.appendChild(checkpointSelectMonth);
		checkpointSelectDay.appendChild(checkpointsDayOptions);
		checkpointSelectMonth.appendChild(checkpointsMonthOptions);
		windowModal.appendChild(newCheckpointButton);
		windowModal.appendChild(submitNewDeadlineButton); 

		header.innerText = "New Deadline";
		subheaderOne.innerText = "Event";
		subheaderThree.innerText = "Checkpoints";
		newCheckpointButton.innerText = "+";
		submitNewDeadlineButton.innerText = "Create";

		submitNewDeadlineButton.addEventListener("click", () => {
			this.generateDeadlineSave();
			this.removeNewDeadlineModal();
		});
	}

	generateDeadlineSave(){
		let eventText = document.querySelector(".new-deadline-event").value;
		

		let existingDeadlineContainer = document.querySelector(".modal-container")
		let existingDeadlineBox = createElement("div", "existing-deadline-box");
		let deadlineBoxHeader = createElement("p", "deadline-box-header");		
		let deadlineBoxDeadline = createElement("p", "deadline-box-deadline");
		let pinButton = createElement("p", "pin-button");

		existingDeadlineContainer.appendChild(existingDeadlineBox);
		existingDeadlineBox.appendChild(deadlineBoxHeader);
		existingDeadlineBox.appendChild(deadlineBoxDeadline);
		existingDeadlineBox.appendChild(pinButton);
					
		deadlineBoxHeader.innerText = eventText;
		let eventId = 1;
		deadlineBoxHeader.setAttribute("id", `Deadline-Event-${eventId}`);

		deadlineBoxDeadline.innerText = "";
					
		pinButton.innerText = "Pin";
		pinButton.addEventListener("click", () => {
			this.displayDeadlineSave();
			this.removeModalPin();
			let shadow = document.querySelector(".background-shadow");
			shadow.remove();
		});
		
	}
	displayDeadlineSave(){
		let DeadlineSaveText = document.getElementById("Deadline-Event-1").innerText;
		let appendTextTo = document.querySelector(".deadline-event");
		console.log(appendTextTo);
		appendTextTo.innerHTML = DeadlineSaveText;
	}
	
}

const modal = new modalWindow();





function createElement (tag, classes="", id = "") {
	const element = document.createElement(tag);
	if (classes !== "") {element.classList.add(...classes.split(' '));}	
	if (id !== "") {elemnt.id = id;}
	
	return element;
}













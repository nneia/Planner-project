
class checkpointsArea{

	constructor(){
		this.newCheckpoints = [];
		this.checkpointsCount;
		this.checkpointGenerator = new CheckpointGenerator(/*month*/);
		this.generateNewCheckpoint = this.generateNewCheckpoint.bind(this);		
		this.button = document.querySelector(".add-checkpoint-button");
		this.button.addEventListener("click", this.generateNewCheckpoint);
	}

	generateNewCheckpoint () {
		this.checkpointGenerator.generateCheckpointModalHtml();
	}
	
	getDaysAndMonth(){
	
		let FebraryValue = new Date().getFullYear()%4 === 0 ? 29 : 28; //Тернарный оператор - типа if но возвращает
		return [
			{Name: "September", Number: 30},
			{Name: "October", 	Number: 31},
			{Name: "November",  Number: 30},
			{Name: "December",  Number: 31},
			{Name: "January", 	Number: 31},
			{Name: "Febrary", 	Number: FebraryValue},
			{Name: "March", 	Number: 31},
			{Name: "April",  	Number: 30},
			{Name: "May", 		Number: 31},
			{Name: "June", 	 	Number: 30},
			{Name: "July", 	 	Number: 31},
			{Name: "August", 	Number: 31},
		];	
	}
}

class newCheckpoint{


}

class CheckpointGenerator{
	constructor(/*months*/){
		this.months = ;
		this.modal = this.generateCheckpointModalHtml();
	}
	generateCheckpointModalHtml(){
		//Создать модальное окно
		/*
			<div class="add-checkpoint-modal-container">
				<input class="new-checkpoint-input">
			
				<select> select-day </select>
				<select **onchange**> select-month </select>
				
				<p **onclick** class = "new-checkpoint-submit-button">Submit</p>
				
			</div>
		*/
		let modalContainer = createElement('div', "add-checkpoint-modal-container");
		let modalCheckpointInput = createElement('input', "new-checkpoint-input");
		let submitCheckpointButton = createElement('p', "new-checkpoint-submit-button");	
		let chooseDay = createElement("select", "select-day");
		let selectMonth = createElement("select", "select-month");
			
		modalContainer.appendChild(modalCheckpointInput);
		modalContainer.appendChild(submitCheckpointButton);
		modalContainer.appendChild(chooseDay);
		modalContainer.appendChild(selectMonth);

		submitCheckpointButton.innerText = "Submit";
		submitCheckpointButton.addEventListener( "click", this.buttonHandler );
		//*******************************************
			
		this.generateOptionMonths.forEach( optionMonth => selectMonth.appendChild(optionMonth));
		this.initFirstMonthDays(chooseDay);
		

			document.querySelector(".checkpoints-container").appendChild(modalContainer);
			return modalContainer
	}

	initFirstMonthDays(chooseDay){
		let numbersArray = createNumberOfDay(30);	//получаем массив 	
		let optionsArray = numbersArray.map( dayNumber => {
			let option = createElement("option", "select-option");
			option.innerText = dayNumber;
			return option
		});		
		optionsArray.forEach( option => chooseDay.appendChild(option));
	}
	generateOptionMonths(){
		//Создаем все options с названиями месяцев
		let monthNames = this.getDaysAndMonth().map( date => {
					
					let month = createElement("option", "select-option");
					month.innerText = date.Name;
					return month;
					
					
	
		});
		return monthNames;
	}
	



	buttonHandler() {
		//let text = document.querySelector(".new-checkpoint-input").value;
			//this.newCheckpoints.push(this.generateNewCheckpointHtml(text));			
			//this.dispayNewCheckpoint();
			//this.createCheckpointModal.remove();
		this.generateNewCheckpoint(text, deadline);
	}
	generateNewCheckpoint (event, deadline) {
		return new Checkpoint(event, deadline)
	}
}

let a = new checkpointsArea()


function createElement (tag, classes="", id = "") {
	const element = document.createElement(tag);
	if (classes !== "") {element.classList.add(...classes.split(' '));}	
	if (id !== "") {elemnt.id = id;}
	
	return element;
}
function createNumberOfDay(num){
	let days = [];
	for (let i = 1; i <= num; i++) {
		days.push(i);
	}
	return days
}

class checkpointsArea{


	constructor(){

		this.ElementOnPageToAttach = document.querySelector(".checkpoints-container");
		this.CheckpointToAttach = document.querySelector(".checkpoins-list");
	
		
		this.newCheckpoints = []; //html
		this.createCheckpointModal = this.generateCheckpointModalHtml("div","p","input"); //html

	

		



		this.addCheckpointButton = document.querySelector(".add-checkpoint-button");
		this.addCheckpointButton.addEventListener("click", () =>{
			this.displayCheckpointModal();
			
		});

		

	}

	generateNewCheckpointHtml(text){
		let newCheckpointContainer = createElement("div", "checkpoint-box");
			
			let newCheckpoint = createElement("div", "checkpoint");
			newCheckpointContainer.appendChild(newCheckpoint);

			let checkpointEvent = createElement("li", "checkpoint-event");

			checkpointEvent.innerText = text;
			newCheckpoint.appendChild(checkpointEvent);

			let checkpointDeadline = createElement("p", "checkpoint-deadline");
			checkpointDeadline.innerText = document.querySelector(".select-day").value;
			newCheckpoint.appendChild(checkpointDeadline);

			newCheckpointContainer.appendChild(this.generateLine());

		return newCheckpointContainer;

	}
	generateLine(){		
		let carveLine = createElement("img", "carve-line");
		carveLine.src = "carve-line.svg";
		return carveLine
	}

	

	generateCheckpointModalHtml(container_tag, text_tag, input_tag){
		let modalContainer = createElement(container_tag, "add-checkpoint-modal-container");
			

			let modalCheckpointInput = createElement(input_tag, "new-checkpoint-input");
			modalContainer.appendChild(modalCheckpointInput);


			let chooseDay = createElement("select", "select-day");
			let chooseMonth = createElement("select", "select-month");


			modalContainer.appendChild(chooseDay);
			modalContainer.appendChild(chooseMonth);
				
				
				this.generateOptionMonths().forEach( m => chooseMonth.appendChild(m));
				this.getOptionDays(chooseDay, chooseMonth);
				//this.getOptionDays(chooseMonth).forEach( m => chooseMonth.appendChild(m));
				// chooseMonth.appendChild(this.generateOptionDays(chooseMonth, chooseMonth, chooseDay));
				
				this.appendOptionsDays(30).forEach( option => chooseDay.appendChild(option));
			//for (let i = 1; i <= 30; i++) {
			//		let day = createElement("option", "select-option");
			//		day.innerText = i;
			//	
			//		chooseDay.appendChild(day);		
			//		
			//		console.log(chooseDay.value);
			//}
				
			
				

			let submitCheckpointButton = createElement(text_tag, "new-checkpoint-submit-button");
			modalContainer.appendChild(submitCheckpointButton);
			submitCheckpointButton.innerText = "Submit";
			submitCheckpointButton.addEventListener("click",   () =>{
				
				let text = document.querySelector(".new-checkpoint-input").value;
				this.newCheckpoints.push(this.generateNewCheckpointHtml(text));			
				this.dispayNewCheckpoint();
				this.createCheckpointModal.remove();

			})

			

			return modalContainer
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

	getOptionDays(chooseDay, chooseMonth){
		let that = this;
		
		//Когда переключаем месяц - меняется кол-во дней
		chooseMonth.addEventListener("change", (event) =>{

			chooseMonth.childNodes.forEach( function(element, index) {
					
				if(element.selected){
					
					let numberday = that.getDaysAndMonth().filter( (elem) =>{
						//Вернуть только тот месяц где название месяца === тексту выбранного элемента(месяца) в select
						
						return elem.Name == element.innerText;
					})[0];//вернуть только первый такой, потому-что первый будет true а остальные false
					
					let number = numberday.Number;
					console.log(number);
					//Создаем все options с колличеством дней месяца
					chooseDay.innerHTML = "";
					
					that.appendOptionsDays(number).forEach( option => chooseDay.appendChild(option));
					
				}
					
			});
						
			
		});
	}

	markCheckpointdeadline(){
		
	}

	appendOptionsDays(numberOfDays){
		//Чистит поле при переключении месяца на другой
		//appendTo.innerHTML = "";
		//Создает новые options с кол-во дней другуго месяца
		//for (let i = 1; i <= numberOfDays.Number; i++) {
		//				let day = createElement("option", "select-option");
		//				day.innerText = i;
		//			
		//				appendTo.appendChild(day);		
		//				
//
		//}
		let daysNumber = createNumberOfDay(numberOfDays);		
		let options = daysNumber.map( dayNumber => {
			let option = createElement("option", "select-option");
			option.innerText = dayNumber;
			return option
		});		
		return options
	}

	getDaysAndMonth(){
	// НУЖНО ПЕРЕДЕЛАТЬ, ВЗЯТЬ ТОЖЕ САМОЕ МЕТОДОМ ДРУГОГО КЛАССА 
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
	//получили все месяца и их кол-во дней

	displayCheckpointModal(){

		this.ElementOnPageToAttach.appendChild(this.createCheckpointModal);
	}
	
	dispayNewCheckpoint(){
	
		for (let i = 0; i < this.newCheckpoints.length; i++){
			this.CheckpointToAttach.appendChild(this.newCheckpoints[i]);
		}		
		
	}

	



}



class calendarArea {
	constructor(){
		this.ElementOnPage = document.querySelector(".calendar-container");
		this.calendarMonths = this.getAllMonths();
		//array Объекты-месяца {кол-во дней, название, текущий или не текущий, html представление}
		this.currentDayNumber = this.getCurrentDayNumber();		
		this.currentMonth = this.getCurrentMonth(); // html
		this.currentDay = this.getCurrentDay();// html
		
	}

	displayCalendarArea(){
		this.calendarMonths.forEach(month => this.ElementOnPage.appendChild(month.htmlnode ));//month.htmlnode
		this.currentDay.classList.add("today");
		return this.ElementOnPage
	}
	

	
	getCurrentDayNumber(){
		return new Date().getDate();
	}

	getCurrentDay(){
		return this.currentMonth.children[this.currentDayNumber - 1]
	}

	getAllMonths() { // CalendarMonth должен быть тут, сперва создать все месяца а потом вернуть их тут же
		let calendarObjects = this.getMonthInYear().map(
			month => new calendarMonth(month.Number, month.Name)//Создали все месяца с днями и именем каждого месяца
		);
		return calendarObjects //array
	}

	getCurrentMonth(){
		return this.calendarMonths.filter(month => month.isCurrent)[0].htmlnode // HTML NODE
	}
	
	getMonthInYear(){
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
	}//получили все месяца и их кол-во дней
}


class calendarMonth {
	constructor(daysInMonth, monthName, ) {
		this.daysInMonth = daysInMonth; // Количество дней в месяце
		this.monthName = monthName;
		this.htmlnode = this.getHtmlNode('div', "p", "p");// Записывается код html одного месяца
		this.isCurrent =  this._checkIsCurrentMonth();
	}
	
	_displayDays(htmlTag){ // _ это скрытая функция которая больше нигде не используется
		let days = [...Array(this.daysInMonth).keys()]
		.map(function (ind) { 
			const daytext = ind + 1;
			let element = createElement(htmlTag, "days-in-month col-week");
			element.innerText = daytext;
			return element;

		});
		
		return days; //Возвращает массив всех дней месяца в виде html
	}

	getHtmlNode(containerTag, daysTag, monthNameTag)/*div*/{
		let month = createElement(containerTag, "month-box row-month");
		let monthName = createElement(monthNameTag, "this-month"); //Html в который заноситься название месяца
		monthName.innerText = this.monthName;
		this._displayDays(daysTag/*p для каждого дня*/).forEach(day => month.appendChild(day));
		//Добавили дни внутрь контейнера month
		month.appendChild(monthName);
		//Добавили заголовок месяца

		return month;
	}
	_checkIsCurrentMonth() {
		let month = ["January","Febrary","March","April","May","June","July","August",
			"September","October","November","December"
		];
		let monthNumber = new Date().getMonth();
		return this.monthName === month[monthNumber]; 
	}
}




function createElement (tag, classes="", id = "") {
	const element = document.createElement(tag);
	if (classes !== "") {element.classList.add(...classes.split(' '));}	
	if (id !== "") {elemnt.id = id;}
	
	return element;
}








/*let checkpointsContainer = {

}

class checkpoint {

}

let deadline = {

}

let thisDay = {
 
}

let mainPage = {

}*/









/*class TasksList {
	constructor(selector){
		this.tasks;//Задачи записываются в список(массив[object])
		//taskId, taskText, relatedDate, completionStatus
		this.views = null;
		this.container = document.querySelector(selector)
	}
	a(task){
		const card = document.createElement('div');
		card.classList.add('task')

		if(task.completionStatus){
			card.classList.add('task-finished')
		}else {
			card.classList.add('task-unfinished')
		}

		card.innerText = task.taskText;
		return card
	}
	display(){
		 this.views = this.tasks.map( task => this.a(task) );

		  this.views.forEach( function(element) {
		 	this.container.appendChild(element)
		 });

	  	return this.views
	}

}

*/




	


	


class Applications {
	constructor(){
		this.checkpoints = new checkpointsArea();
		this.calendar = new calendarArea();
	}


	initialize(){
		this.calendar.displayCalendarArea();
	}
}

let app = new Applications;
app.initialize();

function createNumberOfDay(num){
	let days = [];
	for (let i = 1; i <= num; i++) {
		days.push(i);
	}
	return days
}
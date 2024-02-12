/*class calendarArea {
	constructor(){
		this.ElementOnPage = document.querySelector(".calendar-container");
		this.calendarMonths = this.getAllMonths();//не удалять
	}
	


	getAllMonths() { // CalendarMonth должен быть тут, сперва создать все месяца а потом вернуть их тут же
		let calendarObjects = this.getMonthInYear().map(
			month => new calendarMonth(month.Number, month.Name)//Создали все месяца с днями и именем каждого месяца
		);
		return calendarObjects.map(
			monthbox => monthbox.getHtmlNode("div", "p",	"p")
		);
		//return calendarObjects = this.getMonthInYear().map(
		//	month => new calendarMonth(month.Number, month.Name)//Создали все месяца с днями и именем каждого месяца
		//);


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
	
	displayCalendarArea(){
		this.calendarMonths.forEach(month => this.ElementOnPage.appendChild(month) );//month.htmlnode
		let currentMonth = this.calendarMonths.filter( (month, ind) => ind === this.defineTodaysDate().month)[0];
		currentMonth.children[this.defineTodaysDate().day-1].classList.add("today")
		
	}
	


	defineTodaysDate(){
		let day = new Date().getDate();
		let month = new Date().getMonth();
		let defineName = [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3];
		return {
			day: day,
			month: defineName[month],
		}
	}
}


class calendarMonth {
	constructor(daysInMonth, monthName, ) {
		this.daysInMonth = daysInMonth;
		this.monthName = monthName;
		this.htmlnode = this.getHtmlNode();// Записывается код html одного месяца
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
		let monthName = createElement(monthNameTag, "this-month");
		monthName.innerText = this.monthName;
		this._displayDays(daysTag/*p для каждого дня*/).forEach(day => month.appendChild(day));
		//Добавили дни внутрь контейнера month
		month.appendChild(monthName);
		//Добавили заголовок месяца

		return month;
	}
	
}




function createElement (tag, classes="", id = "") {
	const element = document.createElement(tag);
	if (classes !== "") {element.classList.add(...classes.split(' '));}	
	if (id !== "") {elemnt.id = id;}
	
	return element;
}




const c = new calendarArea();
c.displayCalendarArea();


*/

class thisDay {
 	constructor(){

 	}
}

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}
let user = new User("Иван");
user.sayHi();


/*let checkpointsContainer = {

}

class checkpoint {

}

let deadline = {

}


let mainPage = {

}*/









class TasksList {
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

class Tasks {

	constructor(task){
		this.taskId = task.id;
		this.taskText = task.text;//(String)
		this.relatedDate = task.date;//День выполнения задачи(dd.mm.yyyy)
		this.completionStatus = false;// Отметка выполнения задачи(boolean)
	}

	changeText(text){
		this.taskText = text;
		return this.taskText;
	}

	changeRelatedDate(date){
		this.relatedDate = date;
		return this.relatedDate;
	}

	finishTask(){
		this.completionStatus = true;
		return this.completionStatus;
	}

	unfinishTask(){
		this.completionStatus = false; //Если случайно завершил задачу
		return this.completionStatus;
	}

};
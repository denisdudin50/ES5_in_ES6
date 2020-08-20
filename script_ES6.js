let  employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];




command = employers.filter( item => {
   return item.trim() != '';  
});


    console.log(command);

command = command.map( item => {
	return item.toLowerCase().trim();
		}).map( item => {
	 		return 	item[0].toUpperCase() + item.slice(1); 				
		 });

    console.log(command);


let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};


function calcCash(own, ...args) {
		own = own || 0;
		let everyCash = [own, ...args];
		let total = own;

		return	total = everyCash[1].reduce( (sum, item) => {
			return sum + item;
		})
		
	}


 let lesson = calcCash(null, data.cash);
 console.log(lesson);


function makeBusiness(director, teacher, allModule, gang, course) {
	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
					Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	// console.log.apply(null, sumTech);
	console.log(... sumTech);
}

// makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
makeBusiness(... ['Артем', null, lesson, command, nameCourse]);

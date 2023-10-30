// 1.Თხოვეთ მომხმარებელს რომ შემოიტანოს რიცხვი 1 დან -100
// მდე,დაბეჭდეთ ყველა კენტი რიცხვი 0 დან მომხმარებლის მიერ
// შემოყვანილ რიცხვამდე
// let userNum = Number(prompt('Enter nubmer between 1-100'));
// while (userNum < 1 || userNum > 100) {
// 	userNum = Number(prompt('Enter nubmer between 1-100'));
// }
// if (!isNaN(userNum))
// 	for (let i = 0; i < userNum; i++) {
// 		if (i % 2 === 1) {
// 			console.log(i);
// 		}
// 	}
// 2. Თხოვეთ მომხმარებელს რომ შემოიყვანოს რიცხვი 300 დან 500 მდე,
// შემდგომ დააგენერირეთ რენდომული რიცხვი 50 დან 100 მდე და
// დაბეჭდეთ ყველა 2 ის ჯერადი რიცხვი რენდომულად
// დაგენერირებულ რიცხვსა და მომხმარებლის მიერ შემოყვანილ
// რიცხვს შორის
// let userNum = Number(prompt('Enter nubmer between 300-500'));
// while (userNum < 300 || userNum > 500) {
// 	userNum = Number(prompt('Enter nubmer between 300-500'));
// }
// if (!isNaN(userNum)) {
// 	let rand = Math.round(Math.random() * 50 + 50);
// 	for (let i = rand; i < userNum; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
// }
// 3. Თხოვეთ მომხმარებელს რომ შემოიტანოს რიცხვი 70 დან 100 მდე და
// დაბეჭდეთ ყველა რიცხვის საშვალო არითმეტიკული 0 დან
// მომხმარებლის მიერ შემოყვანილ რიცხვს შორის
// let userNum = Number(prompt('Enter nubmer between 70-100'));
// while (userNum < 70 || userNum > 100) {
// 	userNum = Number(prompt('Enter nubmer between 70-100'));
// }
// let sum = 0;
// if (!isNaN(userNum)) {
// 	for (let i = 0; i < userNum; i++) {
// 		sum += i;
// 	}

// 	console.log(sum / (userNum));
// }

// 4. Დაბეჭდეთ ყველა 5 ის ჯერადი რიცხვი 0 დან 1600 მდე რომელიც არ
// იყოფა 10 ზე უნაშთოდ.
// for (let i = 0; i < 1600; i++) {
// 	if (i % 5 === 0 && i % 10 !== 0) {
// 		console.log(i);
// 	}
// }

// 5. Თხოვეთ მომხმარებელს რომ შემოიყვანოს რიცხვი 50 დან 100 მდე და
// დაბეჭდეთ კონსოლში მომხმარებლის მიერ შემოყვანილი რიცხვის
// ფაქტორეალი
// Ფაქტორეალის გამომთვლელი ფორმულაა :
// a. 5 ! = 1 * 2 * 3 * 4 * 5; 8! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8;
// let userNum = Number(prompt('Enter nubmer between 50-100'));
// while (userNum < 50 || userNum > 100) {
// 	userNum = Number(prompt('Enter nubmer between 50-100'));
// }
// if (!isNaN(userNum)) {
// 	if (userNum === 0 || userNum === 1) {
// 		console.log(1);
// 	} else {
// 		let numFact = 1;
// 		for (let i = 2; i <= userNum; i++) {
// 			numFact *= i;
// 		}
// 		console.log(numFact);
// 	}
// }
// 6. Თხოვეთ მომხმარებელს შემოიტანოს გარკვეული რიცხვი 100 დან
// 200 მდე და დაბეჭდეთ კონსოლში ყველა ის რიცხვი 0 დან
// მომხმარებლის მიერ შემოყვანილ რიცხვამდე რომელიც
// მომხმარებლის მიერ შემოყვანილ რიცხვს უნაშთოდ ყოფს.
// let userNum = Number(prompt('Enter nubmer between 100-200'));
// while (userNum < 100 || userNum > 200) {
// 	userNum = Number(prompt('Enter nubmer between 100-200'));
// }
// for (let i = 0; i < userNum; i++) {
// 	if (userNum % i === 0) {
// 		console.log(i);
// 	}
// }

// 7. Თხოვეთ მომხმარებელს შემოიტანოს რიცხვი და დაადგინეთ ეს
// რიცხვი მარტივია თუ შედგენილი
// Რიცხვი არის მარტივი თუ მას 2 გამყოფი ყავს 1 და საკუთარი თავი,
// რიცხვი არის შედგენილი თუ მას 2 ზე მეტი გამყოფი ყავს, რიცხვი 1
// არც შედგენილია და არც მარტივი რადგან 1 გამყოფი ყავს
// let userNum = Number(prompt('Enter nubmer '));
// let isPrime = true;
// if (!isNaN(userNum)) {
// 	if (userNum === 0 || userNum === 1) {
// 		console.log('Number is neither prime nor composite');
// 	} else {
// 		for (let i = 2; i < userNum; i++) {
// 			if (userNum % i === 0) {
// 				console.log(`It is composite number`);
// 				isPrime = false;
// 				break;
// 			}
// 		}
// 		if (isPrime) {
// 			console.log('Number is prime');
// 		}
// 	}
// }

// 8. Თხოვეთ მომხმარებელს შემოიტანოს რიცხვი და დაბეჭდეთ
// კონსოლში ყველა რიცხვის ნამრავლი რეზულტატი 1 დან
// მომხმარებლის მიერ შემოყვანილ რიცხვამდე
// let userNum = Number(prompt('Enter nubmer '));
// let result = 1;
// for (let i = 2; i < userNum; i++) {
// 	result *= i;
// }
// console.log(result);

// 9. Თხოვეთ მომხმარებელს რომ შემოიტანოს რიცხვი 1 დან 10 მდე და
// დაბეჭდეთ კონსოლში მომხმარებლის მიერ შემოტანილ რიცხვზე
// გამრავლების ტაბულა
// let userNum = Number(prompt('Enter nubmer between 1-10'));
// while (userNum < 1 || userNum > 10) {
// 	userNum = Number(prompt('Enter nubmer between 1-10'));
// }
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${userNum} * ${i} = ${userNum * i}`);
// }

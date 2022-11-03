let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;
let age = 18;

// checking to seee if they are over 18 and registered early 

if( earlyRegistration === true && age >= 18){
    raceNumber += 1000;
}

// giving racetime depending on early registration and age 

if( earlyRegistration === true && age >= 18){
    console.log(`your race number is ${raceNumber} and you will run at 9:30 am`)
}
else if(earlyRegistration === false && age >= 18){
    console.log(`your race number is ${raceNumber} and you will run at 11:00 am`)
}
else if(age < 18){
    console.log(`your race number is ${raceNumber} and you will run at 12:30 pm`)
}

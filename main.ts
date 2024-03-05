//TASK 2
let PersonName: String = "ERIC"
console.log(`Hello ${PersonName} , would you like to learn some python today?`)

//TASK 3

let personName:string = "Muhammad Amaanullah"
console.log ("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


//TASK 4
let Author:string = "Albert Einstein";
let quote = "A person who never made a mistake never tried anything new.";
console.log(`${Author} once said, "${quote}"`);

//TASK 5
let famous_person:string = "Albert Einstein";
let Quote = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said, "${Quote}"`;
console.log(message);

//TASK 6
let Personname : string = "\tFakhar Zaman\n";
console.log(Personname)
let stripped : string = Personname.trim();
console.log(stripped);


//TASK 7
console.log(4+4);
console.log(10-2);
console.log(2*4);
console.log(32/4);

//TASK 9
let favNum :number = 9;
let Message = `My lucky number is ${favNum}`;
console.log(Message);

//TASK 10

//my name is Amaanullah
//date:20-2-2024
let fullName:string = "Haris Rauf";
console.log(fullName.toLocaleUpperCase()); //this program prints the all the characters of the string in upper case

//TASK 11
let friends_Names:string[] = ["HARIS" , "BILAL" , "NAWAZ" , "AMIR" , "JUNAID"];
for (let i=0 ; i < friends_Names.length; i++ ){
    console.log(friends_Names[i])
}

//TASK 12 greetings
let friendsNames:string[] = ["HARIS" , "BILAL" , "NAWAZ" , "AMIR" , "JUNAID"];
for (let i=0 ; i < friendsNames.length; i++ ){
console.log(friendsNames[i] + " would you like to play some cricket?")
}

 //TASK 13
let Transportation: string[] = ["HONDA", 'CIVIC', 'COROLLA', 'SUZUKI', 'HILUX'];
for (let i=0; i<Transportation.length; i++){
    console.log("I would like to own a " + Transportation[i])
}

//TASK 14
let Guests_list:string[] = ["Ayesha","Fazal","Mehmood","Ayub","Samina"];
for(let i=0;i<Guests_list.length;i++){
console.log(`Dear ${Guests_list[i]} , You are invited to the dinner tomorrow.\n Thank You`)
}
//TASK 15 changing guest list
let not_Present:string = Guests_list[2];
let new_Guest:string = "Muzammil";
console.log(`\n"Mr ${not_Present} will not be coming to dinner tomorrow."\n`);
Guests_list[2] = new_Guest;
for(let i=0;i<Guests_list.length;i++){
    console.log(`Dear ${Guests_list[i]} , You are invited to the dinner tomorrow.\n Thank You`)}

    //TASK 16 More Guests:
    console.log(`Dear ${Guests_list} we have found a bigger dinner table so we are inviting three more people to dinner.`);
    Guests_list.unshift("Faisal");
    Guests_list.splice(2,0,"Rubina");
    Guests_list.push("Mudassir");
    for(let i=0;i<Guests_list.length;i++){
        console.log(`Dear ${Guests_list[i]} , You are invited to the dinner tomorrow.\n Thank You`)}
    
        //TASK 17 shrinking guests list
        console.log(`dear ${Guests_list} , Unfortunately to say but we can invite only two people for dinner`);
        while(Guests_list.length>2){
            let remove_Guest = Guests_list.pop();
            console.log(`Dear ${remove_Guest} , Sorry you are not invited for dinner.`);
        }
        for(let i=0;i<Guests_list.length;i++){
            console.log(`Dear ${Guests_list[i]} , You are still invited to the dinner tomorrow.\n Thank You`)};
            Guests_list.splice(0,2);
            console.log(Guests_list);

            //TASK 19 Dinner Guests
            let invitations:string[] =['Faisal', 'Ayesha'];
            let num_Invitations:number = invitations.length;
            console.log(`${num_Invitations} people will be coming to dinner`);
            
//TASK 18
let Locations :string[] = ['DUBAI' , 'SINGAPORE' , 'MALDIVES' , 'TURKEY' , 'ITALY'];
console.log("Originial order: " , Locations );
console.log("Alphabetical order: " , [...Locations].sort() );
console.log("Originial order after sorting: " , Locations );
console.log("Reverse alphabetical order: " , [...Locations].sort().reverse());
console.log("Originial order after reverse sorting: " , Locations );
Locations.reverse();
console.log("Reversed order:" , Locations);
Locations.reverse();
console.log("Back to Originial order: " , Locations );

//TASK 20
let Languages:string[] =['ENGLISH' , 'FRENCH' , 'URDU' , 'HINDI'];
console.log("List of languages: " + Languages);

//TASK 21
let Person_details: {name:string, gender:string, age:number} = {name:"Amaan", gender:"Male", age:18};
console.log(Person_details);

//TASK 22
let province:string[] = ["Sindh" , "Balochistan" , "KPK" , "Punjab"];
//console.log(province{2}); THIS LINE IS INTENTIONAL ERROR
console.log(province[2]);

//TASK 23
let car = "SUZUKI";
let bike = "UNIQUE";
let laptop = "DELL";


console.log("is car == 'SUZUKI'? I predict true");
console.log(car == 'SUZUKI');
console.log("is car != 'CIVIC'? I predict true");
console.log(car != 'CIVIC');

console.log("is car == 'COROLLA'? I predict false");
console.log(car == 'COROLLLA');
console.log("is car != 'SUZUKI'? I predict false");
console.log(car != 'SUZUKI');


console.log("is bike == 'UNIQUE'? I predict true");
console.log(bike == 'UNIQUE');
console.log("is bike != 'SUPERSTAR'? I predict true");
console.log(bike != 'SUPERSTAR');

console.log("is bike == 'HONDA'? I predict false");
console.log(bike == 'HONDA');
console.log("is bike != 'UNIQUE'? I predict false");
console.log(bike != 'UNIQUE');

console.log("is laptop == 'DELL'? I predict true");
console.log(laptop == 'DELL');
console.log("is laptop == 'LENOVO'? I predict false");
console.log(laptop == 'LENOVO');

//TASK 24
let name1 :string = "Asad";
let name2 :string = "Bilal";
let name3 :string = "albert einstein";

//Tests for equality with strings
if (name1 == name2) {
    console.log("Names are same")
} else {
    console.log("names are different")
}
//test for unequality with strings
if (name1 != name2) {
    console.log("names are different")
} else {
    console.log("names are same")
};
//Tests using the lower case function
if (name1 == name3) {
    console.log("names are same")
} else {
    console.log("names are different")
};

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 16
let num2 = 19
if (num1 == num2) {
    console.log("numbers are equal") 
} else{
    console.log("numbers are not equal")
}
if (num1 != num2) {
    console.log("numbers are not equal")
} else {
    console.log("numbers are equal")
};
if(num1 > 17) {
    console.log("eligible for vote")
} else {
    console.log("not eligible for vote")
}
if(num2 > 17) {
    console.log("eligible for vote")
} else {
    console.log("not eligible for vote")
}
if(num1 < 17) {
    console.log("not eligible for vote")
} else {
    console.log("eligible for vote")
}
if(num2 < 17) {
    console.log("not eligible for vote")
} else {
    console.log("eligible for vote")
}
if(num1 <= 17) {
    console.log("not eligible for vote")
} else {
    console.log("eligible for vote")
}
if(num2 <= 17) {
    console.log("not eligible for vote")
} else {
    console.log("eligible for vote")
}
if(num1 >= 18) {
    console.log("eligible for vote")
} else {
    console.log("not eligible for vote")
}
if(num2 >= 18) {
    console.log("eligible for vote")
} else {
    console.log("not eligible for vote")
}

if (num1 ==16 && num2 ==19) {
    console.log("numbers are true")
} else {
    console.log("numbers are not true")
};
if (num1 ==18 && num2 ==19) {
    console.log("numbers are true")
} else {
    console.log("numbers are not true")
};
if (num1 ==15 || num2 ==19) {
    console.log("numbers are true")
} else {
    console.log("numbers are not true")
};
if (num1 ==18 || num2 ==29) {
    console.log("numbers are true")
} else {
    console.log("numbers are not true")
};

let arr :number[] = [1,3,5,7,9]
if (arr.includes(3)) {
    console.log("numbers are odd")
} else {console.log("numbers are not odd")
};
if (arr.includes(2)) {
    console.log("numbers are not odd")
} else {console.log("numbers are odd")
};

//TASK 25
let alien_color: string = "green";
if (alien_color == "green") {
    console.log(" the player just earned 5 points.")
};
let Alien_color: string = "red";
if (Alien_color == "green") {
    console.log(" the player just earned 5 points.")
};
//TASK 26
if (alien_color == "green") {
    console.log(" the player just earned 5 points for shooting the alien.")
} else (
    console.log(" the player just earned 10 points.")
)
if (Alien_color == "green") {
    console.log(" the player just earned 5 points for shooting the alien.")
} else (
    console.log(" the player just earned 10 points.")
);

//TASK 27
if (alien_color == "green") {
    console.log(" the player earned 5 points.")
} else if (alien_color == "red") {
    console.log(" the player earned 10 points.")
} else if (alien_color == "yellow") {
    console.log("the player earned 15 points")
};
if (Alien_color == "green") {
    console.log(" the player earned 5 points.")
} else if (Alien_color == "red") {
    console.log(" the player earned 10 points.")
} else if (Alien_color == "yellow") {
    console.log("the player earned 15 points")
};
let alien_Color: string = "yellow";
if (alien_Color == "green") {
    console.log(" the player earned 5 points.")
} else if (alien_Color == "red") {
    console.log(" the player earned 10 points.")
} else if (alien_Color == "yellow") {
    console.log("the player earned 15 points")
};

//TASK 28
let age: number = 17;
if (  age < 2) {
    console.log("the person is a baby.")
} else if (age< 4 ){
    console.log("the person is a toddler.")
} else if (age<13) {
    console.log(" the person is a kid")
} else if (age<20) {
    console.log(" the person is a teenager.")
} else if (age<65) {
    console.log(" the person is an adult.")
} else if (age >= 65) {
    console.log(" the person is an elder.")
};

//TASK 29
let favorite_fruits:string[] =["apples" , 'bananas' , 'mangoes']
if (favorite_fruits.includes("apples")) {
    console.log("you really like apples")
};
if (favorite_fruits.includes("bananas")) {
    console.log("you really like bananas")
};
if (favorite_fruits.includes("mangoes")) {
    console.log("you really like mangoes")
};
if (favorite_fruits.includes("kiwis")) {
    console.log("you really like kiwis")
};
if (favorite_fruits.includes("watermelon")) {
    console.log("you really like watermelon")
};

//TASK 30
let usernames : string[] =['admin', 'eric', 'fazal', 'zahid', 'ayesha']
for(let user of usernames) {
    if(user == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(` Hello ${user}, thank you for logging in again.`)
    }
};
//TASK 31 no users
if(usernames.length=== 0) {
    console.log(" We need to find some users!")
};
usernames = []
if(usernames.length=== 0) {
    console.log(" We need to find some users!")
};

//TASK 32
let current_users: string[] =['Admin', 'Salman' ,'Farhan','Faizan', 'Usama']
let new_users:string[] = ['Shahzaib','Suhail','Siraj','Admin','Salman']
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());
for(let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log(`Sorry , the username ${new_user} is not available`)
    } else console.log(`The username ${new_user} is available`)
};

//TASK 33
let numbers : number[] = [1,2,3,4,5,6,7,8,9];
for(let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`)
    } else  if (number === 2) {
        console.log(`${number}nd`)
    }   else if (number === 3) {
        console.log(`${number}rd`)
    } else {
        console.log(`${number}th`)
    }
};

//TASK 34
let fav_pizzas : string[] =["Fajita" , "Pepperoni" , "Veg"];
for (let pizza of fav_pizzas) {
    console.log(`${pizza}`)
}
for (let pizza of fav_pizzas) {
    console.log(`I really like ${pizza} pizza!`)
}
console.log(" I really love pizza!");

//TASK 35
let Animals :string[] =["Cow" ,"Goat" ,"Sheep"];
for(let Animal of Animals) {
    console.log(`${Animal}`)
};
for(let Animal of Animals){
    console.log(`A ${Animal} has four legs`)
};
console.log("All of these Animals are Herbivores");

//TASK 36
function make_shirt(size:string, text:string): void {
    console.log(`"You have ordered a ${size} shirt with the text ${text}`)
    };
    make_shirt('Large' , '"I love TypeScript"');
    make_shirt('Medium', '"I love JavaScript');

    //TASK 37
function Make_shirt(Size : string = 'Large' , text :String = 'I love TypeScript'): void {
    console.log(`You have ordered a ${Size} shirt with the text that says ${text}`)
};
Make_shirt();
Make_shirt('Medium');
Make_shirt('X-Large' , 'I love JavaScript');

//TASK 38
function describe_city(city :string , country:String = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
};
describe_city('Karachi');
describe_city('Lahore');
describe_city('London', 'England');

//TASK 39
function city_country(city:string , country:string): string{
    return`${city},${country}`
}
let c1 = city_country('karachi', 'Pakistan');
let c2 = city_country('Mumbai', 'India');
let c3 = city_country('Dhaka', 'Bangladesh');
console.log(c1);
console.log(c2);
console.log(c3);

//TASK 40
function make_album(artist:string , title:string) : {artist:String ; title:String} {
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)

    }
    return dictionaries;
}
let album = make_album("Harsh" , "Neela Asmaan")
console.log(album)
album = make_album("Talha" , "Secret")
console.log(album)
album = make_album("Taylor" , "Beauty")
console.log(album)

//TASK 41
let Magicians:string[] = ["Harry" , "Dynamo" ,"Lance" , "David"];
function show_magicians(Magicians:string[]) :void {
    for(let Magician of Magicians) {
        console.log(Magician.charAt(0).toUpperCase() + Magician.slice(1));
    }
} 
show_magicians(Magicians);

//TASK 42
function make_great(Magicians:string[]) :void {
    for(let i=0; i<Magicians.length; i++){
       Magicians[i] =('The great ' + Magicians[i])
    }
}
make_great(Magicians);
show_magicians(Magicians);

//TASK 43
function Make_great(Magicians:string[]): string[] {
    let greatMagicians : string[] = [];
    for(let i=0; i<Magicians.length; i++){
      greatMagicians.unshift('The Great '+ Magicians[i]);
    }
    return greatMagicians;
}
let Magicians2 : string[] = ["Harry" , "Dynamo" ,"Lance" , "David"];
let GreatMagicians:string[] = Make_great(Magicians2);
show_magicians(Magicians2);
show_magicians(GreatMagicians);

//TASK 44
function Sandwiches(...items:string[]): void {
    console.log("Sandwich Order:")
    for (let i =0 ; i < items.length; i++) {
        console.log(` ${items[i]}`)
    }
}

console.log("ENJOY YOUR SANDWICH!");

Sandwiches('chicken', 'cabbage','mushrooms');
Sandwiches('tomato', 'cucumber' , 'cheese');
Sandwiches('egg' , 'onion', 'capsicum');

//TASK 45
type car  = {
    manufacturer: string
    model: string
    [key: string]: any;
}

function TheCar(manufacturer: string , model: string, optional: Record<string, any>): car {
    return{
        manufacturer,
        model,
        ...optional
    }
}

let MyCar: car = TheCar("Honda" , "Civic" , {color: "White" , year:"2020"})
console.log(MyCar)
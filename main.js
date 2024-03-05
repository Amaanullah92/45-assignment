var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//TASK 2
var PersonName = "ERIC";
console.log("Hello ".concat(PersonName, " , would you like to learn some python today?"));
//TASK 3
var personName = "Muhammad Amaanullah";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//TASK 4
var Author = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
console.log("".concat(Author, " once said, \"").concat(quote, "\""));
//TASK 5
var famous_person = "Albert Einstein";
var Quote = "A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, " once said, \"").concat(Quote, "\"");
console.log(message);
//TASK 6
var Personname = "\tFakhar Zaman\n";
console.log(Personname);
var stripped = Personname.trim();
console.log(stripped);
//TASK 7
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(32 / 4);
//TASK 9
var favNum = 9;
var Message = "My lucky number is ".concat(favNum);
console.log(Message);
//TASK 10
//my name is Amaanullah
//date:20-2-2024
var fullName = "Haris Rauf";
console.log(fullName.toLocaleUpperCase()); //this program prints the all the characters of the string in upper case
//TASK 11
var friends_Names = ["HARIS", "BILAL", "NAWAZ", "AMIR", "JUNAID"];
for (var i = 0; i < friends_Names.length; i++) {
    console.log(friends_Names[i]);
}
//TASK 12 greetings
var friendsNames = ["HARIS", "BILAL", "NAWAZ", "AMIR", "JUNAID"];
for (var i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i] + " would you like to play some cricket?");
}
//TASK 13
var Transportation = ["HONDA", 'CIVIC', 'COROLLA', 'SUZUKI', 'HILUX'];
for (var i = 0; i < Transportation.length; i++) {
    console.log("I would like to own a " + Transportation[i]);
}
//TASK 14
var Guests_list = ["Ayesha", "Fazal", "Mehmood", "Ayub", "Samina"];
for (var i = 0; i < Guests_list.length; i++) {
    console.log("Dear ".concat(Guests_list[i], " , You are invited to the dinner tomorrow.\n Thank You"));
}
//TASK 15 changing guest list
var not_Present = Guests_list[2];
var new_Guest = "Muzammil";
console.log("\n\"Mr ".concat(not_Present, " will not be coming to dinner tomorrow.\"\n"));
Guests_list[2] = new_Guest;
for (var i = 0; i < Guests_list.length; i++) {
    console.log("Dear ".concat(Guests_list[i], " , You are invited to the dinner tomorrow.\n Thank You"));
}
//TASK 16 More Guests:
console.log("Dear ".concat(Guests_list, " we have found a bigger dinner table so we are inviting three more people to dinner."));
Guests_list.unshift("Faisal");
Guests_list.splice(2, 0, "Rubina");
Guests_list.push("Mudassir");
for (var i = 0; i < Guests_list.length; i++) {
    console.log("Dear ".concat(Guests_list[i], " , You are invited to the dinner tomorrow.\n Thank You"));
}
//TASK 17 shrinking guests list
console.log("dear ".concat(Guests_list, " , Unfortunately to say but we can invite only two people for dinner"));
while (Guests_list.length > 2) {
    var remove_Guest = Guests_list.pop();
    console.log("Dear ".concat(remove_Guest, " , Sorry you are not invited for dinner."));
}
for (var i = 0; i < Guests_list.length; i++) {
    console.log("Dear ".concat(Guests_list[i], " , You are still invited to the dinner tomorrow.\n Thank You"));
}
;
Guests_list.splice(0, 2);
console.log(Guests_list);
//TASK 19 Dinner Guests
var invitations = ['Faisal', 'Ayesha'];
var num_Invitations = invitations.length;
console.log("".concat(num_Invitations, " people will be coming to dinner"));
//TASK 18
var Locations = ['DUBAI', 'SINGAPORE', 'MALDIVES', 'TURKEY', 'ITALY'];
console.log("Originial order: ", Locations);
console.log("Alphabetical order: ", __spreadArray([], Locations, true).sort());
console.log("Originial order after sorting: ", Locations);
console.log("Reverse alphabetical order: ", __spreadArray([], Locations, true).sort().reverse());
console.log("Originial order after reverse sorting: ", Locations);
Locations.reverse();
console.log("Reversed order:", Locations);
Locations.reverse();
console.log("Back to Originial order: ", Locations);
//TASK 20
var Languages = ['ENGLISH', 'FRENCH', 'URDU', 'HINDI'];
console.log("List of languages: " + Languages);
//TASK 21
var Person_details = { name: "Amaan", gender: "Male", age: 18 };
console.log(Person_details);
//TASK 22
var province = ["Sindh", "Balochistan", "KPK", "Punjab"];
//console.log(province{2}); THIS LINE IS INTENTIONAL ERROR
console.log(province[2]);
//TASK 23
var car = "SUZUKI";
var bike = "UNIQUE";
var laptop = "DELL";
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
var name1 = "Asad";
var name2 = "Bilal";
var name3 = "albert einstein";
//Tests for equality with strings
if (name1 == name2) {
    console.log("Names are same");
}
else {
    console.log("names are different");
}
//test for unequality with strings
if (name1 != name2) {
    console.log("names are different");
}
else {
    console.log("names are same");
}
;
//Tests using the lower case function
if (name1 == name3) {
    console.log("names are same");
}
else {
    console.log("names are different");
}
;
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 16;
var num2 = 19;
if (num1 == num2) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
if (num1 != num2) {
    console.log("numbers are not equal");
}
else {
    console.log("numbers are equal");
}
;
if (num1 > 17) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible for vote");
}
if (num2 > 17) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible for vote");
}
if (num1 < 17) {
    console.log("not eligible for vote");
}
else {
    console.log("eligible for vote");
}
if (num2 < 17) {
    console.log("not eligible for vote");
}
else {
    console.log("eligible for vote");
}
if (num1 <= 17) {
    console.log("not eligible for vote");
}
else {
    console.log("eligible for vote");
}
if (num2 <= 17) {
    console.log("not eligible for vote");
}
else {
    console.log("eligible for vote");
}
if (num1 >= 18) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible for vote");
}
if (num2 >= 18) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible for vote");
}
if (num1 == 16 && num2 == 19) {
    console.log("numbers are true");
}
else {
    console.log("numbers are not true");
}
;
if (num1 == 18 && num2 == 19) {
    console.log("numbers are true");
}
else {
    console.log("numbers are not true");
}
;
if (num1 == 15 || num2 == 19) {
    console.log("numbers are true");
}
else {
    console.log("numbers are not true");
}
;
if (num1 == 18 || num2 == 29) {
    console.log("numbers are true");
}
else {
    console.log("numbers are not true");
}
;
var arr = [1, 3, 5, 7, 9];
if (arr.includes(3)) {
    console.log("numbers are odd");
}
else {
    console.log("numbers are not odd");
}
;
if (arr.includes(2)) {
    console.log("numbers are not odd");
}
else {
    console.log("numbers are odd");
}
;
//TASK 25
var alien_color = "green";
if (alien_color == "green") {
    console.log(" the player just earned 5 points.");
}
;
var Alien_color = "red";
if (Alien_color == "green") {
    console.log(" the player just earned 5 points.");
}
;
//TASK 26
if (alien_color == "green") {
    console.log(" the player just earned 5 points for shooting the alien.");
}
else
    (console.log(" the player just earned 10 points."));
if (Alien_color == "green") {
    console.log(" the player just earned 5 points for shooting the alien.");
}
else
    (console.log(" the player just earned 10 points."));
//TASK 27
if (alien_color == "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color == "red") {
    console.log(" the player earned 10 points.");
}
else if (alien_color == "yellow") {
    console.log("the player earned 15 points");
}
;
if (Alien_color == "green") {
    console.log(" the player earned 5 points.");
}
else if (Alien_color == "red") {
    console.log(" the player earned 10 points.");
}
else if (Alien_color == "yellow") {
    console.log("the player earned 15 points");
}
;
var alien_Color = "yellow";
if (alien_Color == "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_Color == "red") {
    console.log(" the player earned 10 points.");
}
else if (alien_Color == "yellow") {
    console.log("the player earned 15 points");
}
;
//TASK 28
var age = 17;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age < 4) {
    console.log("the person is a toddler.");
}
else if (age < 13) {
    console.log(" the person is a kid");
}
else if (age < 20) {
    console.log(" the person is a teenager.");
}
else if (age < 65) {
    console.log(" the person is an adult.");
}
else if (age >= 65) {
    console.log(" the person is an elder.");
}
;
//TASK 29
var favorite_fruits = ["apples", 'bananas', 'mangoes'];
if (favorite_fruits.includes("apples")) {
    console.log("you really like apples");
}
;
if (favorite_fruits.includes("bananas")) {
    console.log("you really like bananas");
}
;
if (favorite_fruits.includes("mangoes")) {
    console.log("you really like mangoes");
}
;
if (favorite_fruits.includes("kiwis")) {
    console.log("you really like kiwis");
}
;
if (favorite_fruits.includes("watermelon")) {
    console.log("you really like watermelon");
}
;
//TASK 30
var usernames = ['admin', 'eric', 'fazal', 'zahid', 'ayesha'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var user = usernames_1[_i];
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(" Hello ".concat(user, ", thank you for logging in again."));
    }
}
;
//TASK 31 no users
if (usernames.length === 0) {
    console.log(" We need to find some users!");
}
;
usernames = [];
if (usernames.length === 0) {
    console.log(" We need to find some users!");
}
;
//TASK 32
var current_users = ['Admin', 'Salman', 'Farhan', 'Faizan', 'Usama'];
var new_users = ['Shahzaib', 'Suhail', 'Siraj', 'Admin', 'Salman'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry , the username ".concat(new_user, " is not available"));
    }
    else
        console.log("The username ".concat(new_user, " is available"));
}
;
//TASK 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
;
//TASK 34
var fav_pizzas = ["Fajita", "Pepperoni", "Veg"];
for (var _c = 0, fav_pizzas_1 = fav_pizzas; _c < fav_pizzas_1.length; _c++) {
    var pizza = fav_pizzas_1[_c];
    console.log("".concat(pizza));
}
for (var _d = 0, fav_pizzas_2 = fav_pizzas; _d < fav_pizzas_2.length; _d++) {
    var pizza = fav_pizzas_2[_d];
    console.log("I really like ".concat(pizza, " pizza!"));
}
console.log(" I really love pizza!");
//TASK 35
var Animals = ["Cow", "Goat", "Sheep"];
for (var _e = 0, Animals_1 = Animals; _e < Animals_1.length; _e++) {
    var Animal = Animals_1[_e];
    console.log("".concat(Animal));
}
;
for (var _f = 0, Animals_2 = Animals; _f < Animals_2.length; _f++) {
    var Animal = Animals_2[_f];
    console.log("A ".concat(Animal, " has four legs"));
}
;
console.log("All of these Animals are Herbivores");
//TASK 36
function make_shirt(size, text) {
    console.log("\"You have ordered a ".concat(size, " shirt with the text ").concat(text));
}
;
make_shirt('Large', '"I love TypeScript"');
make_shirt('Medium', '"I love JavaScript');
//TASK 37
function Make_shirt(Size, text) {
    if (Size === void 0) { Size = 'Large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    console.log("You have ordered a ".concat(Size, " shirt with the text that says ").concat(text));
}
;
Make_shirt();
Make_shirt('Medium');
Make_shirt('X-Large', 'I love JavaScript');
//TASK 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
;
describe_city('Karachi');
describe_city('Lahore');
describe_city('London', 'England');
//TASK 39
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
var c1 = city_country('karachi', 'Pakistan');
var c2 = city_country('Mumbai', 'India');
var c3 = city_country('Dhaka', 'Bangladesh');
console.log(c1);
console.log(c2);
console.log(c3);
//TASK 40
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("Harsh", "Neela Asmaan");
console.log(album);
album = make_album("Talha", "Secret");
console.log(album);
album = make_album("Taylor", "Beauty");
console.log(album);
//TASK 41
var Magicians = ["Harry", "Dynamo", "Lance", "David"];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var Magician = Magicians_1[_i];
        console.log(Magician.charAt(0).toUpperCase() + Magician.slice(1));
    }
}
show_magicians(Magicians);
//TASK 42
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = ('The great ' + Magicians[i]);
    }
}
make_great(Magicians);
show_magicians(Magicians);
//TASK 43
function Make_great(Magicians) {
    var greatMagicians = [];
    for (var i = 0; i < Magicians.length; i++) {
        greatMagicians.unshift('The Great ' + Magicians[i]);
    }
    return greatMagicians;
}
var Magicians2 = ["Harry", "Dynamo", "Lance", "David"];
var GreatMagicians = Make_great(Magicians2);
show_magicians(Magicians2);
show_magicians(GreatMagicians);
//TASK 44
function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log(" ".concat(items[i]));
    }
}
console.log("ENJOY YOUR SANDWICH!");
Sandwiches('chicken', 'cabbage', 'mushrooms');
Sandwiches('tomato', 'cucumber', 'cheese');
Sandwiches('egg', 'onion', 'capsicum');
function TheCar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var MyCar = TheCar("Honda", "Civic", { color: "White", year: "2020" });
console.log(MyCar);

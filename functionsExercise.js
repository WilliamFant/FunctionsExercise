// 1. Create a declaration function called fozzieBear that displays the string "Wocka Wocka!" in the console/terminal when the function is run/executed. Run/execute the function.
function fozzieBear(a) {
    console.log("Wocka Wocka!");
}
// 2. Create another declaration function named beaker that has a parameter named speak. Using multiple console logs in the function, have whatever is passed as an argument display 4 times in the console/terminal. Finally, run/execute the function and pass "Meep" as the argument.
function beaker(speak) {
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}

beaker("Meep");

// 3. Create a function called muppetShow that has two parameters named a and b. Inside the function create a conditional statement (A.K.A. If statement) where if the string argument "Muppet" is passed in for "a" AND the string argument "Show" is passed in for "b", then "It's time to play the music. It's time to light the lights." displays in the console/terminal when the function is run/executed. (NOTE: If anything other than "Muppet" and "Show" are passed in as arguments for a and b, then the function should display nothing when run/executed)

function muppetShow(a,b){
    if (a == "Muppet" && b == "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}



// 4. Create another declaration function called kermit that RETURNS the following string value "Kermit The Frog" when it is run/executed

function kermit() {
   return  "Kermit The Frog"
}

// 5. Create another declaration function called muppetShowSeasons that has a parameter named seasons. In the function create a conditional statement where if the number argument passed for seasons is 5 have the function RETURN the boolean value of true. Also, if it is NOT 5 have the function RETURN the boolean value of false.

function muppetShowSeasons (seasons) {
    if(seasons == 5){
        return true;
    }else{
        return false;
    };
}

// 6. Create a function expression that is a const variable called manOrMuppet which displays the following string value when the function is run/executed "Am I a man or am I a Muppet?".

const manOrMuppet = function(){
    return "Am I a man or am I a Muppet?";
};

// 7. Create an Arrow function called rainbowConnection which RETURNS a string value of "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me" (Do this without using brackets "{}")

const rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";

// 8. QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional? (Just use a comment to answer yes or no)

// no

// 9. QUESTION: If a let or const variable is created outside the scope of a function and the value of the variable is updated inside a function, then assuming the function has been run, could the updated value of the variable be accessed outside of the function (Again, just use a comment to answer yes or no)

// yes

// 10a. Create a const variable called newMuppetMovies and set the value to an array with the following values: "The Muppets" and "Muppets Most Wanted"

const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

// 10b. Using the Map method on the newMuppetMovies array, create an anonymous declaration function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperMovies.

const upperMovies = newMuppetMovies.map(function(movie){
    return movie.toUpperCase
    ();
})


// BONUS…
// 11a. Create a const variable called oldMuppetMovies and set the value to an array with the following values: "The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island" and "Muppets From Space"

const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island", 
    "Muppets From Space"
]

// 11b. Using the Filter array method on the oldMuppetMovies array, create an anonymous arrow function to pass as an argument for the Filter method that will return/create a new array with only the "The Great Muppet Caper" and "Muppet Treasure Island" items in it. Also, set the value of the new array that is returned/created to a const variable called twoMovies. (HINT: The length property)

const twoMovies = oldMuppetMovies.filter(movie =>{
    return movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island";
});


// 12a. Create a const variable called charactersOne and set the value to an array with the following values: "Statler" & "Waldorf"

const charactersOne = [
    "Statler",
    "Waldorf"
]

// 12b. Create a const variable called charactersTwo and set the value to an array with the following values: "The Swedish Chef", "Animal", and "Rowlf"
const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
]

// 12c. Create an arrow function called randomMuppet with a parameter called characters that accepts an array of strings for an argument. Inside the function use Math.random() and a console log to have the value of a random item (AKA Character) in the array that is passed in display in the console/terminal (NOTE: You will need more than just Math.random and a console log to complete this)

const randomMuppet = (characters) => {
    const randNum = Math.floor(Math.random() * characters.length); 
    console.log(characters[randNum]);
}
// 12d. Run/execute the randomMuppet function twice (Passing charactersOne as the argument for the first one and charactersTwo for the second)

randomMuppet(charactersOne)
randomMuppet(charactersTwo)

// 13. Create an arrow function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter. For an extra bonus have the function set up so that it ignores spaces (For Example it would change "Hello World" to "HeLlO wOrLd" instead of "HeLlO WoRlD").

const caps = string => {
    let newString = "";
    for(i=0; i<string.length; i++){
        if(i%2 == 0){
            newString += string[i].toUpperCase();
        }else if (string[i] === " ") {
            newString += " ";
        } else{
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
}

caps("hello")
// When finished, create a repository in the “FunctionsExercise” Folder as well as on GitHub. Add and commit everything in the FunctionsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.
console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};





// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.physicality = "weight";

mom.personality = "emotion";


dad.physicality = "weight";

dad.personality = "emotion";





// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom);
console.log('dad object after step 2:', dad);

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality = {weight : "heavy", age : 38, skin : "shiny", height : "tall", cupsize: [1,2,3]};


dad.physicality = {weight : "heavy", age : 38, skin : "shiny", haircolor : "black", height : "tall", taylorsize : [1,2,3]};









// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.personality = {emotion : "happy", passive : true, kind : "extreme", sadness : "crying", besttraits: ["funny", "lovable"]};


dad.personality = {emotion : "srict", passive : false, kind : null, sadness : null, besttraits: ["hardworking", "motivated"]};







// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var adam = {personality: "funny", physicality : "rugged"}



adam.personality = {emotion : "opptimistic", passive : true, kind : "sometimes", sadness : "never", besttraits : ["funny","lovable"]};

adam.physicality = {weight : "heavy", age : 28, skin : "youthfull", haircolor : "black", height : "tall", taylorsize : [1,2,3]};





// uncomment this console.log after you write your code
console.log('adam object after step 5:', adam,"winner")

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.


adam = {good: ["games","drinking", "drawing"], bad: ["code", "wakingup"]};






// uncomment this console.log after you write your code
console.log('adam object after step 6:', adam)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

 adam.age = 28;






// // uncomment this console.log after you write your code
console.log('adam object after step 7:', adam)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

var newgood = adam.good.slice(0,1);


adam.good = newgood;







// uncomment this console.log after you write your code
console.log('adam object after step 8:', adam)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

adam.age = adam.age +1;






// uncomment this console.log after you write your code
console.log('adam object after step 9:', adam)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

adam.good =["sitting"];






// uncomment this console.log after you write your code
console.log('adam object after step 10:', adam)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

adam.bad.push("Givingup", "Being Negative", "Loosing Money", "DrunkDriving", "Washing Dishes");





// uncomment this console.log after you write your code
console.log('adam object after step 11:', adam)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!






// call your function :)

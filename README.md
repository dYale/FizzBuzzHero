##FizzBuzzHero 1.0.0
A comprehensive, modular and lightweight JavaScript library that empowers the developer with the magic of FizzBuzz. 

##Getting Started

In your terminal:
<ul><li>Navigate to your library's folder of the desired repository.</li><li>Run: git clone http://www.github.com/dyale/FizzBuzzHero</li><li>In your index.html, add a script tag to the FizzBuzHero path: </i>
   <li>The path will look similiar to this: **src="../lib/FizzBuzzHero/src/FizzBuzz.js**" </li>
######Start Enjoying the Magic of FizzBuzz!!
</ul>

##Use Cases
The potential use to this library is endless. 
#####Here are three concrete examples.

######Case 1
It could be used in conjunction with a hashing library like bcrypt:

```
var salt = customFizzBuzz(100,4,2).join("");

bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return console.error(err);
      }
      user.password = hash;
      user.salt = salt;
});
```

######Case 2
Utilizing callbacks, it could be used to seed a database in conjunction with a SQL query builder, like Knex.js and a Promises library, like Bluebird:
```
var seedDB = function (value, index, collection) {      
        attrs.ran_at = new Date();
        attrs.collection_value = collection;
        attrs.value = value;
        return db('FizzBuzz_instances').insert(attrs).return(attrs);
      }

customFizzBuzz(1000,2,7,seedDB);

```

######Case 3
It could be used to ace a technical screening. *This case assumes you use sublime text editor and have it set up to open via CLI.*
```
* git clone http://www.github.com/dyale/FizzBuzzHero FizzBuzzChallenge
* subl FizzBuzzChallange/src/FizzBuzz.js
* copy and run desired function
* Smile broadly!
```

##Documentation

####fizzBuzz
 This is our traditional FizzBuzz. 
 
 **Called as**: `fizzBuzz();`

 We will be returned an Array of values 1-100. If the value is divisible by 3 and 5, that value will be returned as "FizzBuzz" If the value is divisible by 3 and not 5, that value will be returned as "Fizz".If the value is divisible by 5 and not 3, that value will be returned as "Buzz".If the value is divisible by neither 3 nor 5, the value will be returned as the integer.



 Does not take input, output is an array of numbers and/or strings.
 

####customFizzBuzz
This function takes 4 arguments a size(int), fizzValue(int), buzzValue(int) and a callback(optional).

 **Called as**: `customFizzBuzz(80,2,5,callback(optional));`

This will run similiar to the traditional FizzBuzz, but the targeted values and size of the dataset will change depending on input. 

An optional callback can be passed in that will give you access to three parameters. The current value, index, and array collection value.


####fizzBuzzChecker
This function takes three arguments, currentValue(int), fizzValue(int), buzzValue(int).

**Called as**:`fizzBuzzChecker(80,2,5);`

This will return "FizzBuzz" if both values are devisible by the currentValue. Else is will yield undefined.

####buzzChecker
This function takes two arguments, currentValue(int) and a buzzValue(int).

**Called as**:`buzzChecker(80,5);`

This will return "Buzz" if this value is devisible by the currentValue. Else is will yield undefined.

####fizzChecker
This function takes two arguments, currentValue(int) and a fizzValue(int)

**Called as**:`fizzChecker(80,2);`

This will return "Fizz" if this values is devisible by the currentValue. Else is will yield undefined.




###Features to Add
Implement Travis CI for continuous intergration.
Set up to use with NPM

(function() {
  'use strict';

  describe("Clear Measure Programming Question", function() {

    describe("Traditional FizzBuzz", function() {

      it("should be defined", function() {
        expect(fizzBuzz).toBeDefined();
      });


      it("should return an array with all of the values", function() {
          expect(fizzBuzz()).toContain("Buzz");
          expect(fizzBuzz()).toContain("Fizz");
          expect(fizzBuzz()).toContain(32);
          expect(fizzBuzz()).toContain(49);
          expect(fizzBuzz()).toContain(2);
          expect(fizzBuzz()).toContain(97);
      });

      it("should return an array which does not contain the wrong values", function() {
          expect(fizzBuzz()).not.toContain(33);
          expect(fizzBuzz()).not.toContain(50);
          expect(fizzBuzz()).not.toContain(15);
          expect(fizzBuzz()).not.toContain(30);
          expect(fizzBuzz()).not.toContain(90);
          expect(fizzBuzz()).not.toContain(100);
      })
    })

    describe("customFizzBuzz", function() {

      it("should be defined", function() {
        expect(customFizzBuzz).toBeDefined();
      });

      it("should return an Array", function() {
        expect(customFizzBuzz(80,2,8)).toEqual(jasmine.any(Array));
      });

      it("should return [1,2,'Fizz',4,'Buzz'] when supplied arguments of 5,3,5", function() {
        expect(customFizzBuzz(5,3,5)).toEqual([1,2,'Fizz',4,'Buzz']);
      });

      it("should return the same value, [1,2,'Fizz',4,'Buzz'], when supplied negative values", function() {
        
        expect(customFizzBuzz(5,-3,5)).toEqual([1,2,'Fizz',4,'Buzz']);
      });


      it("return value should not contain the buzz or fizz argument values, or any values greater than the supplied size", function() {
       
        function randomValue(){
          return Math.floor(Math.random() * (Math.random() * 100));
        }

        var fizzValue = randomValue();
        var buzzValue = randomValue();
        var testSize = randomValue();

        var fizzBuzzArray = customFizzBuzz(testSize,fizzValue,buzzValue);

        expect(fizzBuzzArray).not.toBe(null);
        expect(fizzBuzzArray).not.toContain(buzzValue * fizzValue);
        expect(fizzBuzzArray).not.toContain(fizzValue);
        expect(fizzBuzzArray).not.toContain(buzzValue);
        expect(fizzBuzzArray).not.toContain(testSize + 1);
      });

      it("should take a callback that gets applied to each value", function() {
        var doubleFunction = function(value, index, collection){
          return collection[index] = value + value;
        }
        expect(customFizzBuzz(5,-3,5, doubleFunction)).toEqual([ 2, 4, 'FizzFizz', 8, 'BuzzBuzz' ]);
      });      

    })


    describe("fizzBuzzChecker", function() {

      it("should be defined", function() {
        expect(fizzBuzzChecker).toBeDefined();
      });

      it("should return 'FizzBuzz' when both argument values are divisible by another the target value", function() {
        expect(fizzBuzzChecker(80,2,8)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(40,10,4)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(400,1,4)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(400,400,200)).toEqual('FizzBuzz');
      });


      it("should return undefined when one or both values are not divisible by the target value", function() {
        expect(fizzBuzzChecker(80,2,7)).toEqual(undefined);
        expect(fizzBuzzChecker(40,10,3)).toEqual(undefined);
        expect(fizzBuzzChecker(400,1,3)).toEqual(undefined);
        expect(fizzBuzzChecker(400,401,200)).toEqual(undefined);
      });

      it("should return expected string or undefined when the supplied values are negative", function() {
        expect(fizzBuzzChecker(80,-2,-8)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(40,-10,-4)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(400,-1,-4)).toEqual('FizzBuzz');
        expect(fizzBuzzChecker(400,-400,-200)).toEqual('FizzBuzz');

        expect(fizzBuzzChecker(400,-1,-3)).toEqual(undefined);
        expect(fizzBuzzChecker(400,-401,-200)).toEqual(undefined);
      });
    })

    describe("buzzChecker", function() {

      it("should be defined", function() {
        expect(buzzChecker).toBeDefined();
      });

      it("should return 'FizzBuzz' when both argument values are divisible by another the target value", function() {
        expect(buzzChecker(80,2)).toEqual('Buzz');
        expect(buzzChecker(40,10)).toEqual('Buzz');
        expect(buzzChecker(400,1)).toEqual('Buzz');
        expect(buzzChecker(400,400)).toEqual('Buzz');
      });


      it("should return undefined when one or both values are not divisible by the target value", function() {
        expect(buzzChecker(80,3)).toEqual(undefined);
        expect(buzzChecker(40,11)).toEqual(undefined);
        expect(buzzChecker(400,395)).toEqual(undefined);
        expect(buzzChecker(400,401)).toEqual(undefined);
      });

      it("should return expected string or undefined when the supplied values are negative", function() {
        expect(buzzChecker(80,-2)).toEqual('Buzz');
        expect(buzzChecker(40,-10)).toEqual('Buzz');
        expect(buzzChecker(400,-1)).toEqual('Buzz');
        expect(buzzChecker(400,-400)).toEqual('Buzz');

        expect(buzzChecker(400,-3)).toEqual(undefined);
        expect(buzzChecker(400,-401)).toEqual(undefined);
      });
    })



    describe("fizzChecker", function() {

      it("should be defined", function() {
        expect(fizzChecker).toBeDefined();
      });

      it("should return 'FizzBuzz' when both argument values are divisible by another the target value", function() {
        expect(fizzChecker(80,2)).toEqual('Fizz');
        expect(fizzChecker(40,10)).toEqual('Fizz');
        expect(fizzChecker(400,1)).toEqual('Fizz');
        expect(fizzChecker(400,400)).toEqual('Fizz');
      });


      it("should return undefined when one or both values are not divisible by the target value", function() {
        expect(fizzChecker(80,3)).toEqual(undefined);
        expect(fizzChecker(40,11)).toEqual(undefined);
        expect(fizzChecker(400,395)).toEqual(undefined);
        expect(fizzChecker(400,401)).toEqual(undefined);
      });

      it("should return expected string or undefined when the supplied values are negative", function() {
        expect(fizzChecker(80,-2)).toEqual('Fizz');
        expect(fizzChecker(40,-10)).toEqual('Fizz');
        expect(fizzChecker(400,-1)).toEqual('Fizz');
        expect(fizzChecker(400,-400)).toEqual('Fizz');

        expect(fizzChecker(400,-3)).toEqual(undefined);
        expect(fizzChecker(400,-401)).toEqual(undefined);
      });
    })
  });
}());
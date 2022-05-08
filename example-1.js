/*
 Here is the simple example of closure in JavaScript as you see normally the 
 outer function should be poped out of Callstack with all of the Variable inside it 
 but when we have closure then that is different.
 Here after calling the outer function we still have access to variable title cause of 
 the reference in inner function. 
 This is where we can say that jnn closure is the combination of a function bundled 
 together (enclosed) with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function. 
 In JavaScript, closures are created  every time a function is created, at function creation time.
*/

function outer(title) {
    return function (fullname) {
        return `${title + fullname}`
    }
}
const gentlemen = outer("Mr. ");
console.log(gentlemen("John Doe"));
console.log(gentlemen("Hewad Mubariz"));

 const ladies = outer("Ms. ");
 console.log(ladies("Khadija")); 
 console.log(ladies("Emma")); 


 
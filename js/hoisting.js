// functions defined by declaration are hoised to the top
funcDeclaration();
function funcDeclaration() {
    console.log("I'm inside a function declaration.");
}

// functions defined by expression are not hoisted to the top. they remain where they are defined.
funcExpression(); // this will not work because it's an expression; it's a variable so it needs to be declared before 

var funcExpression = function() {
    console.log("I'm inside a function declaration.");
};
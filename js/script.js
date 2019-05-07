var userFirstName = 'Gaby';
var userLastName = 'Trujillo';

console.log(formatName(userFirstName, userLastName)); //when you put the parenthesis, it's going to recognize that it's a function
//console.log(createUserObj);

//declare a function FUNCTION DECLARATION
function formatName(firstName, lastName) {
    // console.log(firstName);
    // console.log(lastName);

    // console.log(lastName + ' ' + firstName);
    // save to server
    var formattedName = lastName + ' ' + firstName;

    // To Do: check if userFullName is already saved in local storage, if it is then don't override, if not, save it
    // console.log(localStorage.getItem('userFullName'));
    if (!localStorage.getItem('userFullName')) {
        localStorage.setItem('userFullName', formattedName); //add KEY and then VALUE . . . save to local stoarge
    }

    return formattedName;
}

// function expression FUNCTION EXPRESSION (assigning a function to a variable)
var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj;
}(userFirstName, userLastName); // add last set of parenthesis to evaluate function expression immediately after creation

//Constructor Way
var concatinate = new Function('x', 'y', 'return x + y ');
//console.log(concatinate('Gaby', ' Trujillo'));


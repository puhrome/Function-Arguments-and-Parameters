/**
 * Arguments and Parameters Created by Phirom Yim on 4/29/14.
 */
/*//call the function
calcArea(30,20);//numbers 30 and 20 are arguments

//function definition
//() are storage containers for the parameters, w and h
function calcArea(w, h){//w=30, h=20
   var area = w * h;//variable for are
    console.log(area);//print code
}
*/
/*function dogYears(){
    var age = 4;
    var dogYears = age * 7;
    console.log("Sparky is" + dogYears + "years old.")
}
dogYears();
*/

function dogYears(age){//calling function, parameters
    var dogYears = age * 7;
    console.log("Sparky is" + dogYears + "years old.")
}
dogYears(4);//arguments
dogYears(5);//arguments in function invocation
dogYears(6);//arguments in function call
// settimeout
 
// @ the first argument of setTimeout is a function and the second argument is the time in milliseconds
// @ setTimeout and setInterval return a unique id which can be used to stop the function
// @ setTimeout and setInterval are asynchronous functions

// const s1 = setTimeout(function(){
//     console.log("Hello World");
// },1000);

// clearTimeout(s1);



// @ s1 store the id of the setTimeout function 
// @ clearTimeout is used to stop the setTimeout function

// const s2 = setInterval(function(){
//     console.log("Hello World");
// },1000);

// @ s2 store the id of the setInterval function
// @ clearInterval is used to stop the setInterval function

// clearInterval(s2);




const s3 = setTimeout(a,1000);

function a(){
    console.log("Hello World");
}
// @ we can call in this way also 













// @ if we write any string in first argument, it will be treated as a function and make an error
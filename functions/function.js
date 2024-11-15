// 1. Function Declaration
function introduceMe(username = 'digamber'){
    console.log(`Hello, I am ${username}`);
}
// -> this function is used to introduce the user. if the user does not provide the username then the default username is 'digamber'.
// @ default parameter: it is used to assign a default value to the parameter if the user does not provide the value.

introduceMe('david');
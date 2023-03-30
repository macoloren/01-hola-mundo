console.log("inicio de script");  //1

setTimeout(() => {
    console.log("primer timeout");  //5
}, 5000);

setTimeout(() => {
    console.log("segundo timeout");  //2
}, 0);

setTimeout(() => {
    console.log("tercer timeout");  //3
}, 0);

console.log("fin de script"); //4
let obj1 = {
    name:"Person 1", 
    age:5
};
let obj2 = {
    age:5, 
    name:"Person 1"
};
let result;
for(let key in obj1){
    if(obj1[key]===obj2[key]){
        result=true;
    }
    else{
        result=false;
        break;
    }
}
if(result){
    console.log("Both objects has same properties")
}
else{
    console.log("Both objects has different properties")
}
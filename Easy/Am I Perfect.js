
let num=parseInt(prompt("Enter a number"));

function checkNum(num){

    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        }
    }
    if(sum===num){
        console.log("Perfect");
    }
    if(sum>num){
       console.log("Abundant");
    }
    if(sum<num) {
        console.log("Deficient");
    }
}
checkNum(num);


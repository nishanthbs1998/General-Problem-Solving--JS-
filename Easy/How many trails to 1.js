let num=parseInt(prompt("Enter the number"));
let count=0;
function countTrails(num){
    while(num>1){
        
        if(num%2===0){
            num=num/2;
            count+=1;
        }
        if(num%2!==0&&num!==1){
            num=num*3+1;
            count+=1;
        }
        if(num===1){
            console.log(`Number of trails is ${count}`);break;
        }
    }
    
}

countTrails(num);

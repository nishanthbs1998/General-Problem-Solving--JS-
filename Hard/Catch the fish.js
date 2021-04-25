let k=parseInt(prompt("Enter the value of K"));
let l=parseInt(prompt("Enter the value of L"));
let m=parseInt(prompt("Enter the value of M"));
let n=parseInt(prompt("Enter the value of N"));
let total=parseInt(prompt("Enter the Total"));

function catchFish(k,l,m,n,total){
    let tracker=0;
    let count=0;
    while(tracker<total){
        if(tracker%k===0||tracker%l===0||tracker%m===0||tracker%n===0){
            count+=1;
        }
        tracker+=1;
    }
    console.log(`Output: ${count}`);
}

catchFish(k,l,m,n,total);

let row=parseInt(prompt("Enter the number of rows in the matrix"));
let col=parseInt(prompt("Enter the number of columns in the matrix"));

let n=[[]];
function compute(row,col){
    for(let i=0;i<row;i++ ){
        for(let j=0;j<col;j++){
            n[[i,j]]=parseInt(prompt(`Enter the value of ${i} row ${j} column`));
        }
    }
    //console.log(n);
    let ans=[]
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            let p=0,q=0,rowFlag=0,colFlag=0;
            while(p<row){
                if(n[[i,j]]<n[[i,p]]){
                    rowFlag=1;
                    break;
                }
                p+=1;
            }
            if(rowFlag===1){
                continue;
            }
            while(q<col){
                if(n[[i,j]]>n[[q,j]]){
                    colFlag=1;
                    break;
                }
                q+=1;
            }
            if(colFlag===1){
                continue;
            }
            if(rowFlag===0&&colFlag===0){
                ans.push(n[[i,j]]);
            }
        }
    }
 return console.log(ans);
}

compute(row,col);
var sumo=0;
var sume=0;

for(let i=0;i<=30;i++){
  if(i%5!=0){
    if(i%2==0){
      sume+=i;
    }
    else{
      sumo+=i;
    }

  }
 

}
console.log("sum od even",+sume);
console.log("sum od even",+sumo);

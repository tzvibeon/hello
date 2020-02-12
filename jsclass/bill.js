let restaurentBill=[124,48,269];

    //restaurentBill2=48,
   //restaurentBill3=268;
let tip0,tip1,tip2;
let bill0,bill1,bill2;
   let bill=(price)=>{
   for (let i = 0; i < restaurentBill.length; i++) {
       
    
       if(price[i]<50){
         tip0= price[i]*0.2;
        
         console.log(`less than $50 ,the tip is ${tip0} `);
         bill0=price[i]*tip0;
         console.log(`less than $50 ,the bill is ${bill0} `);
         
     }else if(price[i]>50 && price[i]<200) {
 
          tip1=price[i]*0.15;
         console.log(`between $50  and $200 , the tip is ${tip1} `);
         bill1=price[i]*tip1;
         console.log(`between $50  and $200 , the tip is${bill1} `);
     } else{
          tip2=price[i]*0.1;
         console.log(`more than $200 ,the tip is ${tip2} `);
         bill2=price[i]*tip2;
         console.log(`more than $200 ,the bill is  ${bill2} `);
         
     }
   
   }
    
}
bill(restaurentBill=[124,48,269]);
let tips=[tip0,tip1,tip2];
console.log(tips);
let paid=[bill0,bill1,bill2];
console.log(paid);


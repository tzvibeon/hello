let jbmi,mbmi;
let john={
          fullname:"John Berg",
          mass:78,
          height:5.7,
          BIM(){
             jbmi=Math.ceil((this.mass/this.height)**2);
             console.log(jbmi);
          }}
          let mark={
            fullname:"Mark jone",
            mass:90,
            height:5.9,
            BIM(){
               mbmi=Math.ceil((this.mass/this.height)**2);
              console.log(mbmi);
            }
          }
          
  john.BIM();
   mark.BIM();
   

  if(jbmi>mbmi){
    console.log( ` ${john.fullname} BMI is higher than ${mark.fullname} with ${jbmi}`)
  }
  else if(mark) {
    console.log( ` ${mark.fullname} BMI is higher than ${john.fullname} with ${mbmi}`)
  } 
  
          

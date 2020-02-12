let JohnScore=[89,120,103],
    MikeScore=[116,94,123];


//John average
         let sum1=sum2=sum3=0;
         for (let i = 0; i < JohnScore.length; i++) {
              sum1 += JohnScore[i];
             
         }
         let JAverage=sum1/JohnScore.length;
         console.log(`This is Jonh average ${JAverage}`);
//Mike Average
         
         for (let i = 0; i < MikeScore.length; i++) {
            sum2 += MikeScore[i];
        
         }
    let MAverage=sum2/MikeScore.length;
    console.log(`This is Mike average ${MAverage}`);



      if(JAverage>MAverage){
           console.log (`John is winnwer and average score is ${JAverage}`);
      }else{
           console.log(`Mike is winnwer and average score is ${MAverage}`);
            }
 //No:3
 /*function changeScore(JohnScore=[20,10,30],MikeScore=[20,10,10])
                  {
                    let JAverage=(20+10+30)/3,
                        MAverage=(20+10+60)/3;
                    console.log(` Changed John average scores ${JAverage}`);
                    console.log(` Changed Mike average scores ${MAverage}`);
          

                    if(JAverage>MAverage){
                        console.log(`John is winnwer and average score is ${JAverage}`);
                    }
                    else if (JAverage==MAverage) {
                        console.log(`Scores is draw`);
                        
                    } else {
                        console.log(`Mike is winnwer and average score is ${MAverage}`);
                        
                    }

                  };
                   changeScore();*/
                   //MaryScoreNo:4
       let MaryScore=[97,134,105];
       
         for (let i = 0; i < MaryScore.length; i++) {
              sum3 += MaryScore[i];
             
         }
         let MaryAverage=sum3/MaryScore.length;
         console.log(`This is Mary average ${MaryAverage}`);
    let ap= (116+94+123)/3;
    console.log(ap);
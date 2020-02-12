//book array objects
var read,notRead;
  
var book =[
          {
            title:"The Valley of Decision",
            authername:"Marcia Davenport",
            alreadyRead:true,
            
          },
          {
            title:"Spring Torrents",
            authername:"I.S Turgenev",
           alreadyRead:false,
          },
          {
            title:"The Grapes of the Wrath",
            authername:"John Steinbeck",
            alreadyRead:true,
          }

];
//iteration and read or not
for (let i = 0; i < book.length; i++) {
    console.log(`${book[i].title} is written by ${book[i].authername} `);
    
}
for(j=0 ;j<book.length;j++){
if (book[j].alreadyRead==true) {

  console.log(`${book[j].title} is already read.`);
  
}
 else{
console.log( `You will need to read ${book[j].title}`);}

}



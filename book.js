var birth = require('readline');
var cook = birth.createInterface({
    input: process.stdin,
    output: process.stdout,
});

cook.question('Enter year of birth \n', (answer)=> {
    const age = 2019 - answer;
  if (age<18){
      console.log("Minor")
  } 
  else if(18<=age &&age<=36){
    console.log("Youth")
  } 
  else{
      console.log("Elders")
  }
  cook.close()
})
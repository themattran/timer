let input = process.argv; 
let beepAtThisTime = input.slice(2)
console.log(beepAtThisTime)




for (let i = 0; i < beepAtThisTime.length; i++) {
  
  if (beepAtThisTime[i] === undefined || beepAtThisTime === [] || beepAtThisTime < 0) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, beepAtThisTime[i] * 1000)
  

}  


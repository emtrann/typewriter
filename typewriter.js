const sentence = "michelle says hiiii\n";

let timeOutTimer = 0; 

for (const char of sentence) {
  timeOutTimer += 100; 
  setTimeout( () => {
  process.stdout.write(char)
  }, timeOutTimer); 
}
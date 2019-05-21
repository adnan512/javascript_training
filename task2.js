paragraph = "Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective."

function getFrequency(string) {
  string =  string.toLowerCase();
  var freq = {};
  for (var i=0; i<string.length;i++) {
    if(string.charCodeAt(i) >=97 && string.charCodeAt(i) <=122)
    {  
        var character = string.charAt(i);
        if (freq[character]) {
          freq[character]++;
        } else {
          freq[character] = 1;
        }
    }
  } 
  console.log(freq)
};

function timeCalculater(func, arg) {
  var start = new Date()
  func(arg)
  var end = new Date() - start
  console.info('Execution time: %dms', end) 
}

timeCalculater(getFrequency, paragraph);

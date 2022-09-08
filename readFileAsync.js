const {readFile, writeFile} = require('fs')
// takes 3 parameters path,encoding.callBack function: The callBack function further takes two arguements the err and the result

readFile('./content/readFile1','utf-8' ,(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result);
})
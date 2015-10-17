function getSaveCode(){
  // return document.querySelector('.savedataIdCode').innerHTML
  return $('.trainerIcon')[1].src
}

function moveNext(callback){
  document.querySelector('p.btnArrowRight').click()
}

function getRate(callback){
  result = document.querySelector('.template-rating').innerHTML
  return Number(result)
}

rates = {}

function main(){
  result = getRate()
  code = getSaveCode()
  rates[code] = result
  console.log(result,code)
  moveNext()
}

si = setInterval(function(){
  main()
  result = getRate()
  if(result < 1500){
    clearInterval(si)
  }
},100)

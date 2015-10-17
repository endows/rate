function getSaveCode(){
  return document.querySelector('.savedataIdCode').innerHTML
}

function moveNext(callback){
  document.querySelector('p.btnArrowRight').click()

  // current_code = getSaveCode()
  // si = setInterval(function(){
  //   code = getSaveCode()
  //   if(current_code != code){//when moved
  //     clearInterval(si)
  //     callback()
  //   }
  // },100)
}

function getRate(callback){
  result = document.querySelector('.template-rating').innerHTML
  return Number(result)
}

rates = []

function main(){
  result = getRate()
  console.log(result)
  rates.push(result)
  moveNext()
}

si = setInterval(function(){
  main()
  result = getRate()
  if(result < 1700){
    clearInterval(si)
  }
},100)

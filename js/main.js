//tidolist
window.onload =function(){

var inputValue = ""

var input = document.getElementById('input')


//拿输入数据
input.addEventListener("keydown",function(eve){
  if(eve.key == "Enter"){
    inputValue = input.value
  }
})
  


}
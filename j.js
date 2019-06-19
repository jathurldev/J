var pi = Math.PI
var sin = Math.sin
var cos = Math.cos
var tan = Math.tan
var arcsin = Math.asin
var arccos = Math.acos
var arctan = Math.atan
var deg = pi/180
var rad = 180/pi
var ball = []
var s = function(x) {
  return Math.pow(x,2)
}
var p = function(x,y) {
  return Math.pow(x,y)
}
var sqrt = function(x) {
  return Math.sqrt(x)
}
var ar = function(x) {
  return Math.round(x)
}
var f = function(x) {
  return s(x)-x
}
var g = function(x) {
  return (x*3)+x
}
ball.radius = function(a) {
  var result = sqrt(a/(4*pi))
  return result
}
ball.area = function(r) {
  var result = (s(r)*(4*pi))/3
  return result
}
ball.volume = function(r) {
  var result = (p(r,3)*(4*pi))/3
  return result
}

j = []
j.calculate = function(input) {
   var answer = input.toLowerCase();
   answer = eval(answer)
   console.log(answer)
   answer = parseFloat(answer)
 
   if (answer == !undefined || isNaN(answer)) {
     return 0
   } else {
     lastAnswer = answer
   }
}

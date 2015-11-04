//alert('hello!')
//document.getElementById('click-me').click = function () {
//  alert('test!');
// }
// this is how you comment!
// 1. capture
// 2. get user input
// 3. display results

function testAlert() {
  alert('test');
}
document.getElementById('some-button').onclick = function () {
  var str = document.getElementById('some-input').value
  // str = 'cat'
  alert(str)
}
// is the same as . . .
alert(document.getElementById('some-input').value)

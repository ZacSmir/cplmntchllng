// hints!
// 1. find the element in index.html that you want to copy
// 2. select it somehow (by class . or id #)
// 3. google 'jquery copy element'
// 4. copy the element and add the new element to the element list (google 'jquery add element to div')
// 5. how do you repeat this multiple times, for multiple colors??? There is a nice data structure for this kind of thing.


var a = ["red","blue","green","cornsilk","yellow","aquamarine","orange"]
a.forEach(function(red){
          console.log(red)
          $(".element:first").clone().css({background:red}).appendTo($("#elements-list"))
  })
document.getElementById('content').innerHTML = localStorage['text'] || 'Type here'; 
setInterval(function(){ 
localStorage['text'] = document.getElementById("content").innerHTML; 
document.getElementById('total').innerHTML = localStorage['text'].length + " characters";
}, 1000);
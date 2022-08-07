// get the modal 

var modal = document.getElementById('myModal');


// get the imagen and insert it inside the modal

var img = document.getElementById('myImg');

var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// get the span element that close the modal

var span = document.getElementsByClassName('close')[0];

// when the user click on the span (x) close the modal

span.onclick = function(){
    modal.style.display = 'none'
}
const audio = document.querySelector('audio');
let span0 = document.getElementById('cat0');
let span1 = document.getElementById('cat1');
let span2 = document.getElementById('cat2');
let span3 = document.getElementById('cat3');
let span4 = document.getElementById('cat4');
let span5 = document.getElementById('cat5');
let span6 = document.getElementById('cat6');
let span7 = document.getElementById('cat7');
let span8 = document.getElementById('cat8');


let strong1 = document.getElementById('s1');
let strong2 = document.getElementById('s2');
let strong3 = document.getElementById('s3');


// L0

audio.addEventListener('play',() => {
  span0.classList.add('play0');
})

audio.addEventListener('pause',() => {
  span0.classList.remove('play0');
})

// L1

audio.addEventListener('play',() => {
  span1.classList.add('play1');
})

audio.addEventListener('pause',() => {
  span1.classList.remove('play1');
})

// L2

audio.addEventListener('play',() => {
  span2.classList.add('play2');
})

audio.addEventListener('pause',() => {
  span2.classList.remove('play2');
})

// L3

audio.addEventListener('play',() => {
  span3.classList.add('play3');
})

audio.addEventListener('pause',() => {
  span3.classList.remove('play3');
})

// L4 

audio.addEventListener('play',() => {
  span4.classList.add('play4');
})

audio.addEventListener('pause',() => {
  span4.classList.remove('play4');
})

// L5 

audio.addEventListener('play',() => {
  span5.classList.add('play5');
})

audio.addEventListener('pause',() => {
  span5.classList.remove('play5');
})

// L6 

audio.addEventListener('play',() => {
  span6.classList.add('play6');
})

audio.addEventListener('pause',() => {
  span6.classList.remove('play6');
})

// L7

audio.addEventListener('play',() => {
  span7.classList.add('play7');
})

audio.addEventListener('pause',() => {
  span7.classList.remove('play7');
})

// L8 

audio.addEventListener('play',() => {
  span8.classList.add('play8');
})

audio.addEventListener('pause',() => {
  span8.classList.remove('play8');
})

// S1 

audio.addEventListener('play',() => {
  strong1.classList.add('red1');
})

audio.addEventListener('pause',() => {
  strong1.classList.remove('red1');
})

// S2 

audio.addEventListener('play',() => {
  strong2.classList.add('red2');
})

audio.addEventListener('pause',() => {
  strong2.classList.remove('red2');
})

// S3 

audio.addEventListener('play',() => {
  strong3.classList.add('red3');
})

audio.addEventListener('pause',() => {
  strong3.classList.remove('red3');
}) 
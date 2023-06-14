let songs=[{
    songName:"Beautiful",filepath:"song/one.mp3",coverPath:"covers/one.jpg"},
    {
        songName:"Beautiful",filepath:"song/two.mp3",coverPath:"covers/two.jpg"},
        {
            songName:"Beautiful",filepath:"song/three.mp3",coverPath:"covers/three.jpg"},
            {
                songName:"Beautiful",filepath:"song/four.mp3",coverPath:"covers/four.jpg"},
                {
                    songName:"Beautiful",filepath:"song/five.mp3",coverPath:"covers/five.jpg"},
                    {
                        songName:"Beautiful",filepath:"song/six.mp3",coverPath:"covers/six.jpg"},
                        {
                            songName:"Beautiful",filepath:"song/seven.mp3",coverPath:"covers/seven.jpg"},
                            {
                                songName:"Beautiful",filepath:"song/eight.mp3",coverPath:"covers/eight.jpg"},
                                {
                                    songName:"Beautiful",filepath:"song/nine.mp3",coverPath:"covers/nine.jpg"},
  {
 songName:"Beautiful",filepath:"song/ten.mp3",coverPath:"covers/ten.jpg"}
]
let songIndex=0;
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')

let audioElement=new Audio('one.mp3')
audioElement.play()

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;

    }
})




audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
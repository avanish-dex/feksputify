let songs=[{
    songName:"Beautiful-Eminem",filepath:"songs/one.mp3",coverPath:"covers/one.jpg"},
    {
        songName:"Ashes-Stellar",filepath:"songs/two.mp3",coverPath:"covers/two.jpg"},
        {
            songName:"Teenage Dreams-Stephen Dawes",filepath:"songs/three.mp3",coverPath:"covers/three.jpg"},
            {
                songName:"Thinking out loud-Ed sheeran",filepath:"songs/four.mp3",coverPath:"covers/four.jpg"},
                {
                    songName:"Fool's gold-Aries",filepath:"songs/five.mp3",coverPath:"covers/five.jpg"},
                    {
                        songName:"Are you bored?yet-Wallows",filepath:"songs/six.mp3",coverPath:"covers/six.jpg"},
                        {
                            songName:"Bubble-night demo-Imagine Dragons",filepath:"songs/seven.mp3",coverPath:"covers/seven.jpg"},
                            {
                                songName:"Stressed out-twenty one pilots",filepath:"songs/eight.mp3",coverPath:"covers/eight.jpg"},
                                {
                                    songName:"Sing for the moment-Eminem",filepath:"songs/nine.mp3",coverPath:"covers/nine.jpg"},
  {
 songName:"Chlorine-twenty one pilots",filepath:"songs/ten.mp3",coverPath:"covers/ten.jpg"}
]
let songIndex=0;
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'))

songItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
let audioElement=new Audio('songs/one.mp3')
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
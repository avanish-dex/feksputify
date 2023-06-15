let songs=[{
    songName:"Beautiful-Eminem",filepath:"songs/1.mp3",coverPath:"covers/one.jpg"},
    {
        songName:"Ashes-Stellar",filepath:"songs/2.mp3",coverPath:"covers/two.jpg"},
        {
            songName:"Teenage Dreams-Stephen Dawes",filepath:"songs/3.mp3",coverPath:"covers/three.jpg"},
            {
                songName:"Thinking out loud-Ed sheeran",filepath:"songs/4.mp3",coverPath:"covers/four.jpg"},
                {
                    songName:"Fool's gold-Aries",filepath:"songs/5.mp3",coverPath:"covers/five.jpg"},
                    {
                        songName:"Are you bored?yet-Wallows",filepath:"songs/6.mp3",coverPath:"covers/six.jpg"},
                        {
                            songName:"Bubble-night demo-Imagine Dragons",filepath:"songs/7.mp3",coverPath:"covers/seven.jpg"},
                            {
                                songName:"Stressed out-twenty one pilots",filepath:"songs/8.mp3",coverPath:"covers/eight.jpg"},
                                {
                                    songName:"Sing for the moment-Eminem",filepath:"songs/9.mp3",coverPath:"covers/nine.jpg"},
  {
 songName:"Chlorine-twenty one pilots",filepath:"songs/10.mp3",coverPath:"covers/ten.jpg"}
]
let songIndex=0;
let masterPlay=document.getElementById('masterPlay')
let masterSongName=document.getElementById('masterSongName')

let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'))
let audioElement=new Audio('songs/one.mp3')

songItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
// audioElement.play()


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

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;  
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;

    }
    else{
        songIndex+=1;

    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;

    }
    else{
        songIndex-=1;

    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
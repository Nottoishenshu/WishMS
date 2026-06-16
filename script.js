console.log('WishMS Music');

//Initialize the Varaiables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Green Day - Last day on Earth", filePath: "songs/1.mp3", coverPath: "resource/cover1.jpg"},
    {songName: "The Smiths - There is a light that never goes out", filePath: "songs/2.mp3", coverPath: "resource/cover2.jpg"},
    {songName: "Her's - Harvey", filePath: "songs/3.mp3", coverPath: "resource/cover3.jpg"},
    {songName: "Buck Owens - Madein Japan", filePath: "songs/4.mp3", coverPath: "resource/cover4.jpg"},
    {songName: "Billy Joel - She's always a Woman", filePath: "songs/5.mp3", coverPath: "resource/cover5.jpg"},
    {songName: "Artic Monkeys - 505", filePath: "songs/6.mp3", coverPath: "resource/cover6.jpg"},
    {songName: "Coldplay - Sparks", filePath: "songs/7.mp3", coverPath: "resource/cover7.jpg"},
    {songName: "The Scripts - Breakeven", filePath: "songs/8.mp3", coverPath: "resource/cover8.jpg"},
    {songName: "Ricky Montgomery - Line Without a Hook", filePath: "songs/9.mp3", coverPath: "resource/cover9.jpg"},
]


songItem.forEach((element, i)=>{
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play():

//Handle playpause click 
masterPlay.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play();
        masterPlay.textContent = "⏸";
    } else {
        audioElement.pause();
        masterPlay.textContent = "▶";
    }
});
masterPlay.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play();
        masterPlay.textContent = "▶";
    } else {
        audioElement.pause();
        masterPlay.textContent = "⏸";
    }
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
})
//Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    if(audioElement.duration){
        let progress = parseInt(
            (audioElement.currentTime / audioElement.duration) * 100
        );
        myProgressBar.value = progress;
    }
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/ 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
 })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       console.log(e.target);
       makeAllPlays();
       songIndex = parseInt(e.target.id) - 1;
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = songs[songIndex].filePath;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
      masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
 if(songIndex >= songs.length - 1){
    songIndex = 0;
}
else{
    songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
 if(songIndex <= 0){
    songIndex = 0;
}
else{
    songIndex--;
}
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
   
})

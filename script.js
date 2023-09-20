console.log("welcome to spotify");

let songIndex= 0;
let audioElement = new Audio('./resources/stay.mp3');
let masterplay = document.getElementById('masterplay'); 
let myprogressBar = document.getElementById('myprogressBar'); 

let songs = [
    {songName:"salam-e-ishq", filepath: "./resources/stay.mp3", Coverpath: "./resources/stay.jpg"},
    {songName:"salam-e-ishq", filepath: "song/1.mp3", Coverpath: "covers/1.jpg"},
    {songName:"salam-e-ishq", filepath: "song/1.mp3", Coverpath: "covers/1.jpg"},
    {songName:"salam-e-ishq", filepath: "song/1.mp3", Coverpath: "covers/1.jpg"},
    {songName:"salam-e-ishq", filepath: "song/1.mp3", Coverpath: "covers/1.jpg"},
    {songName:"salam-e-ishq", filepath: "song/1.mp3", Coverpath: "covers/1.jpg"}, 
]

const id=document.getElementById('play');
id.addEventListener('click',()=>{
    audioElement.play();
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// masterplay.addEventlistner('click',()=>{
//     console.log("cfbgfhjfhf")
//     audioElement.play();
//     // if(audioElement.paused || audioElement.currentTime<=0){
//     //     audioElement.play();
//     //     masterplay.classList.remove('fa-play-circle');
//     //     masterplay.classList.add('fa-pause-circle');
//     // }
//     // else{
//     //     audioElement.pause();
//     //     masterplay.classList.remove('fa-pause-circle');
//     //     masterplay.classList.add('fa-play-circle');
//     // }
// })

myprogressBar.addEventlistner('timeupdate',()=>{
    progress = parseInt((audioEement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventlistner('change',()=>{
    
})
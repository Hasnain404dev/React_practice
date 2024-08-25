console.log("Lets Write Javascipt");
let dynamicCard = document.querySelector(".card-cont")
dynamicCard.innerHTML = `      <div class="card">
                        <div class="play-h">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                                color="#000000" fill="black">
                                <path
                                    d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b" alt=""
                            class="card-img">
                        <h3 class="card-head">Chillout Lounge</h3>
                        <p class="card-para">Just lean back and enjoy relaxed beats.</p>
                    </div>`



// fetch the song                     
// async function fetchSong() {
//     let a= await fetch("http://127.0.0.1:5500/mernstk/spotify%20clone/audio")
//     let response = await a.text()
//     console.log(response);
 
// //    let div= document.createElement("div")
// //    div.innerHTML=response
// // let maindiv=response.document.getElementById("wrapper")
// // console.log(maindiv)
// // //    let lis=document.getElementsByTagName("li")
// // //    console.log(lis)
// let parser = new DOMParser();
// let doc = parser.parseFromString(response, 'text/html');

// // 1st try
// let maindiv = doc.getElementById("wrapper").children[1];
// // let songs=[]
// // for (let index = 0; index < maindiv.length; index++) {
// //     const element = maindiv[index];
// //     if (element.href.endsWith(".mp3")) {
// //         songs.push(element.href)
// //     }
    
// // }
// if (maindiv) {
//     let songs=[];
//     for (let index = 0; index < maindiv.length; index++) {
//         const element = maindiv.children[index];
//         if (element.tagName==='A' && element.href.endsWith(".mp3")) {
//             songs.push(element.href);
//         }
//     }
//     console.log(songs)
// } else {
//     console.log("no element")
// }

//   }
// fetchSong()
// simple method

async function fetchSong() {
    let a= await fetch("http://127.0.0.1:5500/audio/")
    let response = await a.text();
    // console.log(response)
    let div=document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")
    // console.log(as)
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
            
        }
    }
    return songs
    
}

async function playSong() {
    let play= await fetchSong()
    console.log(play) 
    let audio=new Audio(play[0])
        audio.pause();
    let addSong=document.querySelector(".list-cls")[0]    
    for (const audio of play) {
        addSong.innerHTML=addSong.innerHTML+audio;
        
    }
    
}
playSong()

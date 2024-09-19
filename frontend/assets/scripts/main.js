console.log("HEY We are here")

// async function main(){
//     let a = await fetch("http://3.9.10.132/api/allsong")
//     console.log(a);
    
//     // let response = await a.text()
//     // console.log(response)

//     const response = JSON.parse(this.responseText);
//     const appload = response?.response?.data;
//     console.log(appload);
    
// }

// main()

// URL of the API endpoint
const apiUrl = 'http://3.9.10.132/api/allsong';

// Function to fetch data
async function fetchData() {
    try {
        // Send GET request
        const response = await fetch(apiUrl);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const songData = await response.json();
        playSong(songData);
        
        // Process and log the data
        console.log(songData);  // Corrected this line
    } catch (error) { 
        console.error('Error fetching data:', error);
    }
}
  
// Call the function to fetch data
fetchData();  

let currentAudio = null
const playMusic = (track) => {
    // If there is a currently playing audio and it's an Audio object, pause it
    if (currentAudio instanceof Audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reset the audio to the beginning
    }

    // Create a new audio object for the selected track
    currentAudio = new Audio(track);
    currentAudio.play();
};

function playSong(songData) {
    let playList = document.querySelector(".playlist");
    playList.innerHTML = '';  // Clear existing content

    // Loop through the song data and create playlist items
    songData.forEach(song => {
        let listItem = document.createElement('li');
        listItem.classList.add('library-card');

        // Create inner HTML for the list item
        listItem.innerHTML = `
            <div class="library-card-wrap">
                <div class="song-icon">
                    <i class="bi bi-music-note"></i>
                </div>
                <div class="song-details">
                    <p>${song.title}</p>
                    <p>${song.artist}</p>
                </div>
            </div>
            <div class="play-song">
                <i class="bi bi-play-circle"></i>
            </div>
        `;

        // Append the list item to the playlist
        playList.appendChild(listItem);

        // Add click event listener to play the song
        listItem.addEventListener('click', () => {
            playMusic(song.songlink);  // Play selected song and stop previous one
        });
    });
}





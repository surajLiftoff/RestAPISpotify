const artist = document.getElementById('artist_name');
const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();
    getArtist();
});



async function getArtist() {
    let artistName = artist.value;
    const token = 'BQCpe7ZsOeeMitjO0O85gCxO2kQwGBrb_f46-Ym6f0sKwSMlH3lEnexvBNVIjfqNtY-IFoyRvp5ZF3bHQdQWZnUbjQY8N25vPPFa_wzJ1_iFgluki077wnPRKNjA2w9EPBj_lQUEqQrltcHTmuu_VCupTE3bH7bBjpQ';
    const response = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson);

    document.getElementById("artistTable").innerHTML = '<tr><th></th><th></th></tr>'

    myJson.artists.items.forEach(artist => {
        // document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><td>${artist.name}</td><img src="${artist.images[2].url}"></tr>`;

        document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><img src="${artist.images[2].url}"></tr>`;
        document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><td>${artist.name}</td></tr>`;
    });

}

function showLastMonthTracks() {
     document.getElementById('lastMonth').style.display = 'block';
     document.getElementById('6months').style.display= 'none';
     document.getElementById('allTime').style.display = 'none';

     document.getElementById('artistILike').innerHTML = "artists i like right now";
 }

 function showLastSixMonthsTracks() {
     document.getElementById('lastMonth').style.display = 'none';
     document.getElementById('6months').style.display = 'block';
     document.getElementById('allTime').style.display = 'none';

     document.getElementById('artistILike').innerHTML = "artists from the past 6 months";
 }

 function showAllTimeTracks() {
     document.getElementById('lastMonth').style.display = 'none';
     document.getElementById('6months').style.display = 'none';
     document.getElementById('allTime').style.display = 'block';

     document.getElementById('artistILike').innerHTML = "my all time top artists";
 }   
 
 function spotifyLogout() {
     const logoutUrl = 'https://accounts.spotify.com/en/logout';
     const spotifyLogoutWindow = window.open(logoutUrl, 'Spotify Logout', 'width=700,height=500,top=40,left=40');
     
     setTimeout(() => {
         spotifyLogoutWindow.close();
         window.location.href = '/'; 
     }, 1000);
 }

 function downloadAsPNG() {
    var container = document.getElementById('download');
    html2canvas(container).then(function (canvas) {
        var imageData = canvas.toDataURL('image/png');

    
        var downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'downloaded-image.png';

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    });
}
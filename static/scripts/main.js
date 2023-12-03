
function showLastMonthTracks() {
     document.getElementById('lastMonth').style.display = 'block';
     document.getElementById('6months').style.display = 'none';
     document.getElementById('allTime').style.display = 'none';
 }

 function showLastSixMonthsTracks() {
     document.getElementById('lastMonth').style.display = 'none';
     document.getElementById('6months').style.display = 'block';
     document.getElementById('allTime').style.display = 'none';
 }

 function showAllTimeTracks() {
     document.getElementById('lastMonth').style.display = 'none';
     document.getElementById('6months').style.display = 'none';
     document.getElementById('allTime').style.display = 'block';
 }   
 
 function spotifyLogout() {
     const logoutUrl = 'https://accounts.spotify.com/en/logout';
     const spotifyLogoutWindow = window.open(logoutUrl, 'Spotify Logout', 'width=700,height=500,top=40,left=40');
     
     setTimeout(() => {
         spotifyLogoutWindow.close();
         window.location.href = '/'; 
     }, 1000);
 }
function sendRequest() {
    var statusNote = document.getElementById('status');
    statusNote.innerHTML = 'Processing...';

    const queryString = document.location.hash.substring(1);
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('access_token');
    const scope = urlParams.get('scope');
    const state = urlParams.get('state');
    console.log(token);
    console.log(scope);
    console.log(state);

    
    //mc.dougdougw.com:443

    fetch('http://localhost:443?', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        token: token,
        state: state,
      })
    .then(response => {
    if (response.ok) {
        console.log('String sent successfully');
        statusNote.innerHTML = 'success';
    } else {
        console.error('Error sending string');
        statusNote.innerHTML = 'error';
    }
    })
    .catch(error => {
    console.error('Error:', error);
    statusNote.innerHTML = 'error';
    });
}
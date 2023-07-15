function sendRequest() {
    var statusNote = document.getElementById('status');
    statusNote.innerHTML = 'Processing...';

    const queryString = document.location.hash.substring(1);
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('access_token');
    const scope = urlParams.get('scope');
    const state = urlParams.get('state');
    
    response = token + '\r\n' + scope + '\r\n' + state

    //mc.dougdougw.com:443

    fetch('http://localhost:443?', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: response
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
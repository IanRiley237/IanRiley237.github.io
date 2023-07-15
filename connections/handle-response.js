function sendRequest() {
    var statusNote = document.getElementById('status');
    statusNote.innerHTML = 'Processing...';

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')
    const scope = urlParams.get('scope')
    const state = urlParams.get('state')
    console.log(code);
    console.log(scope);
    console.log(state);

    
    //mc.dougdougw.com:443

    fetch('http://localhost:443?', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: code,
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
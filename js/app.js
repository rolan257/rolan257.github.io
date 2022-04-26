$(document).ready(function() {
  localStorage.removeItem('canAccess');

  $('#connect-rabet').on('click', function(event) {
    event.preventDefault();

    let canAccess, pageName = $(this).attr('href');

    if (window.rabet) {
      rabet.connect()
        .then(result => {
          gData.account.pk = result.publicKey;

          (async function () {
            canAccess = await getBalances();

            if (canAccess) {
              localStorage.setItem('canAccess', '1');
              window.location.href = pageName;
            }
          })();
        })
        .catch(error => console.error('Error', error));
    } else {
      alert('Rabet is not installed!');
    }
  });
});

const server = new StellarSdk.Server(gData.api.horizon);

async function getBalances() {
  let balance, amount, hasAsset = false;

  let assetsTable = $('#assets');
  let tbody = $('#assets tbody');
  let tr;

  gData.account.sAccount = await server.loadAccount(gData.account.pk);

  for (balance of gData.account.sAccount.balances) {
    amount = parseFloat(balance.balance);

    if (_.has(balance, 'asset_code')) {
      console.log(amount + ' ' + balance.asset_code);

      tr = '<tr><td>' + amount + '</td><td>' + balance.asset_code + '</td></tr>';
      tbody.append(tr);

      if ((balance.asset_code == 'DRIFT') && amount) {
        hasAsset = true;
        alert('You have ' + amount + ' DRIFT');
      }
    }
    else {
      tr = '<tr><td>' + amount + '</td><td>XLM</td></tr>';
      tbody.append(tr);

      console.log(amount + ' XLM');
    }
  }

  if (!hasAsset)
    alert('You don\'t have any DRIFT tokens.');

  assetsTable.removeClass('d-none');

  return hasAsset;
}

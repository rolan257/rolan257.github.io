const server = new StellarSdk.Server(gData.api.horizon);

async function getBalances() {
  let balance, amount, hasAsset = false;

  gData.account.sAccount = await server.loadAccount(gData.account.pk);

  for (balance of gData.account.sAccount.balances) {
    amount = parseFloat(balance.balance);

    if (_.has(balance, 'asset_code')) {
      console.log(amount + ' ' + balance.asset_code);

      if ((balance.asset_code == 'DRIFT') && amount) {
        hasAsset = true;
        alert('You have ' + amount + ' DRIFT');
      }
    }
    else
      console.log(amount + ' XLM');
  }

  if (!hasAsset)
    alert('You don\'t have any DRIFT tokens.');

  return hasAsset;
}

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

if (!process.env.THIRDWEB_CLIENT_ID) {
  throw new Error('THIRDWEB_CLIENT_ID não está configurado nas variáveis de ambiente');
}

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID,
});

const wallets = [
  inAppWallet({
    auth: {
      options: ["google"],
    },
  }),
];

function WalletConnectButton() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{
        size: "compact",
        showThirdwebBranding: false,
      }}
    />
  );
}

// Renderizar o componente no elemento
const container = document.getElementById('wallet-connect-button');
ReactDOM.render(<WalletConnectButton />, container); 
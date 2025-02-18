import { createThirdwebClient, ConnectButton } from "@thirdweb-dev/react";
import React from 'react';
import { createRoot } from 'react-dom/client';
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

// Atualizar para usar createRoot (React 18)
const container = document.getElementById('wallet-connect-button');
const root = createRoot(container);
root.render(<WalletConnectButton />); 
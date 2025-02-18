import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import React from 'react';
import { createRoot } from 'react-dom/client';

if (!process.env.THIRDWEB_CLIENT_ID) {
  throw new Error('THIRDWEB_CLIENT_ID não está configurado nas variáveis de ambiente');
}

function WalletConnectButton() {
  return (
    <ThirdwebProvider 
      clientId={process.env.THIRDWEB_CLIENT_ID}
      activeChain="ethereum"
    >
      <ConnectWallet
        theme="dark"
        btnTitle="Entrar"
        modalSize="compact"
      />
    </ThirdwebProvider>
  );
}

const container = document.getElementById('wallet-connect-button');
const root = createRoot(container);
root.render(<WalletConnectButton />); 
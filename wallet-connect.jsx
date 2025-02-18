import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import React from 'react';

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;

if (!clientId) {
  throw new Error('VITE_THIRDWEB_CLIENT_ID não está configurado nas variáveis de ambiente');
}

export default function App() {
  return (
    <ThirdwebProvider 
      clientId={clientId}
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
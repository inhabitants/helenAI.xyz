import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <ThirdwebProvider 
      clientId="3076cba3ba05f39fceaa810ce8a45596"
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
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Elemento 'wallet-connect-button' não encontrado");
} 
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import React from 'react';

export default function App() {
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
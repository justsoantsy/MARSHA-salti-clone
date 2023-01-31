import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';


const ConnectWallet = () => {
  const { chains, provider } = configureChains(
    [polygon],
    [
      alchemyProvider({ apiKey: process.env.LeeyLykozPfCugbyKbSDzhkn2wvwGSpr }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
      theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
      chains={chains}
      >
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ConnectWallet;
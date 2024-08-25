'use client'

import { PropsWithChildren } from 'react'
import { PetraWallet } from 'petra-plugin-wallet-adapter'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design'
import React from 'react'
import {
  Aptos,
  AptosConfig,
  Network,
  APTOS_COIN,
  AccountAddressInput,
} from '@aptos-labs/ts-sdk'

const wallets = [new PetraWallet()]
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <body className="grow">
      <AptosWalletAdapterProvider
        plugins={wallets}
        autoConnect={true}
        dappConfig={{
          network: Network.TESTNET,
          aptosConnectDappId: 'dapp-id',
        }}
      >
        <WalletSelector />
        <div className="mt-16">{children}</div>
      </AptosWalletAdapterProvider>
    </body>
  )
}

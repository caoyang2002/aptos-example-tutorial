import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design'
import React, { useEffect, useState } from 'react'
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { SyntheticEvent } from 'react'
// import Account from './Account'
import { useWallet } from '@aptos-labs/wallet-adapter-react'

function Wallet() {
  return (
    <div className="flex flex-col rounded bg-black p-1">
      <WalletSelector />
    </div>
  )
}
export default Wallet

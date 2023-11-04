import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../images/logo.svg'

const Balance: FC = () => {
  return (
    <section className="w-full bg-primary-soft-red text-white flex flex-row items-center justify-between rounded-xl space-x-12 px-6 py-6">
      <div className="space-y-1">
        <p className="text-sm text-slate-100">My balance</p>
        <h1 className="text-2xl font-bold">$921.48</h1>
      </div>
      <div className="flex flex-0 h-full items-center justify-center">
        <Image src={Logo} width={'52'} alt="Logo" />
      </div>
    </section>
  )
}

export default Balance

import rawData from '../data.json'
import Balance from '@/components/Balance/Balance'
import StatementChart from '@/components/Chart/StatementChart'
import { DailyAmount } from '@/components/Chart/types'

import { DM_Sans } from 'next/font/google'

const DMsans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main
      className={`container flex min-h-screen space-y-6 flex-col items-center justify-center w-full ${DMsans.className}`}
    >
      <Balance />
      <StatementChart statement={rawData as DailyAmount[]} />
    </main>
  )
}

import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-3 p-6 bg-slate-400'>
        <Link href="\"> Home</Link>
        <Link href="\contact"> contact</Link>
        <Link href="\address"> address</Link>
    </div>
  )
}

export default Header
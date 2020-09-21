import React from 'react'
import { DFooter, DMenu, DHeader } from '../components'
import { User } from '../mock'
import '../scss/main.scss'

type LayoutProps = {

}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <DHeader profile={User.profile}/>
      <DMenu/>
      <main className="main">
        {children}
      </main>
      <DFooter/>
    </>
  )
}

export default DefaultLayout

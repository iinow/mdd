import React from 'react'
import { Menus } from '../config'
import { UserProfile } from '../model/user'
import { Avatar } from '@material-ui/core'
import '../scss/DHeader.scss'

type DHeaderProps = {
  profile: UserProfile
}

const DHeader: React.FC<DHeaderProps> = ({ profile }) => {
  return (
    <header className="appbar">
      <div className="navi-left">
        <i className="fas fa-bars"/>
      </div>
      <div className="logo">
        로고
      </div>
      <div className="navi-right">
        <button className="button is-small is-rounded">
          로그아웃
        </button>
        <div>

        </div>
      </div>
    </header>
  )
}

export default DHeader

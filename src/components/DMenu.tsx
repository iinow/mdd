import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/DMenu.scss'

const DMenu: React.FC = () => {
  return (
    <aside className="menu">
      <div className="menu-title">
        <div className="menu-title-name">
          le's Journal
        </div>
        <i className="fas fa-chevron-down"/>
      </div>
      <div className="search">
        <div className="control has-icons-left">
          <input className="input is-rounded is-small" type="text" placeholder={'Search journal...'}/>
          <span className="icon is-small is-left">
            <i className="fa fa-search"/>
          </span>
        </div>
        <Link to={'/setting'}>
          <i className="fas fa-cog"/>
        </Link>
      </div>
      <div className="menu-sub">
        <ul>
          <li>
            <Link to="/new-diary">
              <i className="fas fa-plus-circle"/>
              <span>
                New Entry
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-diary">
              <i className="fas fa-th-list"/>
              <span>
                View All Entries
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-diary">
              <i className="fas fa-star"/>
              <span>
                View Starred Entries
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="entries">
        <ul>
          {
            Array.apply(null, new Array(20)).map((v, index) => (
              <li key={index}>
                <span className="title">이양</span>
                <div>
                  <i className="fas fa-bed"/>
                  <span className="date">Sun. 9/20/2020</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default DMenu

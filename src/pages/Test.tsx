import React from 'react'
import '../scss/Test.scss'

const Test: React.FC = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="">

          <main className="main">

            <header className="is-clearfix">
              <div className="cats is-pulled-right has-text-right">
                <small>Bulma Theme<br/>Dashboard<br/> <span
                  className="has-text-weight-bold has-text-white">v.0.1</span></small>
              </div>
              <div>
                <h2>Dashboard</h2>
                <small>Dashboard sdff sdfdsfdsf cvfvxgfd</small>
              </div>
              <hr></hr>
            </header>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">329</p>
                  <p className="subtitle">Total Visits</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">+20 %</p>
                  <p className="subtitle">Total Page Views</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">201</p>
                  <p className="subtitle">Unique Visitor</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">12 %</p>
                  <p className="subtitle">Purchases</p>
                </article>
              </div>
            </div>

            <header className="is-clearfix">
              <div className="cats is-pulled-right has-text-right">
                <small>Bulma Theme<br/>Dashboard<br/> <span
                  className="has-text-weight-bold has-text-white">v.0.1</span></small>
              </div>
              <div>
                <h2>Bulma Boxes</h2>
                <small>Dashboard sdff sdfdsfdsf cvfvxgfd</small>
              </div>
              <hr></hr>
            </header>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box transparent">
                  <p className="title">329</p>
                  <p className="subtitle">Total Visits</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">+20 %</p>
                  <p className="subtitle">Total Page Views</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">201</p>
                  <p className="subtitle">Unique Visitor</p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child box accent">
                  <p className="title">-12 %</p>
                  <p className="subtitle">Purchases</p>
                </article>
              </div>
            </div>

            <header className="is-clearfix">
              <div className="cats is-pulled-right has-text-right">
                <small>Dashboard Theme<br/>Bulma Elements<br/> <span
                  className="has-text-weight-bold has-text-white">v.7.2</span></small>
              </div>
              <div>
                <h2>Bulma Elements</h2>
                <small>Bulma Elements are essential interface elements<br/> that only require a single CSS
                  class.</small>
              </div>
              <hr></hr>
            </header>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <div>
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                      <ul>
                        <li><a href="#">Bulma</a></li>
                        <li><a href="#">Components</a></li>
                        <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
                      </ul>
                    </nav>
                    <div className="content">
                      <p>A simple breadcrumb component to improve your navigation experience.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <div className="tabs is-centered">
                    <ul>
                      <li><a>Elements</a></li>
                      <li className="is-active"><a>Components</a></li>
                      <li><a>Widgets</a></li>
                      <li><a>Tiles</a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <p>Simple responsive horizontal navigation tabs, with different styles.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">

              <div className="tile is-parent">
                <article className="tile is-child box">
                  <nav className="pagination" role="navigation" aria-label="pagination">
                    <a className="pagination-previous">Previous</a>
                    <a className="pagination-next">Next page</a>
                    <ul className="pagination-list">
                      <li>
                        <a className="pagination-link" aria-label="Goto page 1">1</a>
                      </li>
                      <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                      </li>
                      <li>
                        <a className="pagination-link" aria-label="Goto page 45">45</a>
                      </li>
                      <li>
                        <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                      </li>
                      <li>
                        <a className="pagination-link" aria-label="Goto page 47">47</a>
                      </li>
                      <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                      </li>
                      <li>
                        <a className="pagination-link" aria-label="Goto page 86">86</a>
                      </li>
                    </ul>
                  </nav>
                </article>
              </div>
            </div>

            <header className="is-clearfix">
              <div className="cats is-pulled-right has-text-right">
                <small>Bulma Theme<br/>Dashboard<br/> <span
                  className="has-text-weight-bold has-text-white">v.0.1</span></small>
              </div>
              <div>
                <h2>Custom Stat Cards</h2>
                <small>Custom stat cards to easily display large numbers, <br/>great for any kind of simple metrics and
                  dashboard content.</small>
              </div>
              <hr></hr>
            </header>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box transparent">
                  <div className="statcard">
                    <h3 className="statcard-number">28,745</h3>
                    <span className="statcard-desc">Page views</span>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box transparent">
                  <div className="statcard">
                    <h3 className="statcard-number">
                      72,134
                      <small className="delta-indicator delta-positive">5%</small>
                    </h3>
                    <span className="statcard-desc">Page views</span>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <div className="statcard">
                    <h3 className="statcard-number">12,938</h3>
                    <span className="statcard-desc">Page views</span>
                  </div>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child box accent">
                  <div className="statcard">
                    <h3 className="statcard-number">12,938</h3>
                    <span className="statcard-desc">Page views</span>
                  </div>
                </article>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}

export default Test

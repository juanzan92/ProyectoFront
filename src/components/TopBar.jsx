import React from 'react';

class TopBar extends React.Component {

  render() {
    return (
      <>
      <div className="topbar">
        <div className="topbar-column">
          <a className="hidden-md-down" href="mailto:support@smarket.com">
            <i className="icon-mail" />&nbsp; support@smarket.com
          </a>
          <a className="hidden-md-down">
            <i className="icon-bell" />&nbsp; +(54) 351-2370691
          </a>
          <a className="social-button sb-facebook shape-none sb-dark" href="#" target="_blank">
            <i className="socicon-facebook" />
          </a>
          <a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank">
            <i className="socicon-instagram" />
          </a>
        </div>
      </div>

      </>
    )
  }
}
export default TopBar;
import React from 'react';



class TopBar extends React.Component {

  render() {
    return (
      <><div className="topbar">
        <div className="topbar-column">
          <a className="hidden-md-down" href="mailto:support@smarket.com">
            <i className="icon-mail" />&nbsp; support@smarket.com</a>
            <a className="hidden-md-down" href="tel:0810 888 2948">
              <i className="icon-bell" />&nbsp; 0810 99 2948</a>
              <a className="social-button sb-facebook shape-none sb-dark" href="#" target="_blank">
                <i className="socicon-facebook" /></a>
                <a className="social-button sb-twitter shape-none sb-dark" href="#" target="_blank">
                  <i className="socicon-twitter" /></a><a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i className="socicon-instagram" /></a><a className="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i className="socicon-pinterest" /></a>
        </div>
      </div>

      </>
    )
  }
}
export default TopBar;
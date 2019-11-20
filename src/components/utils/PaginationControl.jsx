import React from "react";

class PaginationControl extends React.Component {
  render() {
    return (
      <nav class="pagination">
        <div class="column">
          <ul class="pages">
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>...</li>
            <li>
              <a href="#">12</a>
            </li>
          </ul>
        </div>
        <div class="column text-right hidden-xs-down">
          <a class="btn btn-outline-secondary btn-sm" href="#">
            Next&nbsp;<i class="icon-arrow-right"></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default PaginationControl;

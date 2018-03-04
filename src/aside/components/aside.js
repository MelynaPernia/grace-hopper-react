import React from 'react';
import './aside.css'
class Article extends React.Component {
  render() {
    return (
      <table className="summary-table">
        <thead>
          <tr>
            <th  colspan="2">Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">
              <img src="./assets/images/Grace-Hopper.jpg"/>
              <p>Rear Admiral Grace M. Hopper, 1984</p>
            </td>
          </tr>
          <tr>
            <th> Nickname(s)</th>
            <td>"Amazing Grace"</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>December 9, 1906 New York City, New York, U.S.</td>
          </tr>
          <tr>
            <th>Place of burial</th>
            <td><a href="https://en.wikipedia.org/wiki/Arlington_National_Cemetery" target="_blank">Arlington National Cemetery</a></td>
          </tr>
          <tr>
            <th>Allegiance</th>
            <td><img src="./assets/images/united-states.png"/> United States of America</td>
          </tr>
          <tr>
            <th>Service/branch</th>
            <td><img src="./assets/images/united-states-navy.png"/><a href="https://en.wikipedia.org/wiki/United_States_Navy"> United States Navy</a></td>
          </tr>          
        </tbody>
      </table>
    )
  }
}
export default Article;
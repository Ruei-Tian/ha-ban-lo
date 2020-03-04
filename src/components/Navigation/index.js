import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { compose } from 'recompose';

import { ifAuth } from '../Context/AuthUser';
import { withFirebase } from '../Context/Firebase';
import { cacheData } from '../Context/DataInSessionStorage';

import '../../css/common.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSuggestionShown: false,
      isMenuOpen: false,
      suggestionList: []
    };
  }

  openMenu = (e) => {
    e.preventDefault();
    this.setState({
      isMenuOpen: true
    });
  }

  closeMenu = (e) => {
    this.setState({
      isMenuOpen: false,
      isSuggestionShown: false,
      value: ''
    });
  }

  inputChange = (e) => {
    this.setState({
      isSuggestionShown: true,
      value: e.target.value
    });
    this.renderSuggestionsList();
  }

  clickSuggestion = (e) => {
    this.setState({
      isSuggestionShown: false,
      value: e.target.textContent
    });
  }

  renderSuggestionsList = () => {
    const { DataInSessionStorage } = this.props;
    const { value } = this.state;
    const updataData = DataInSessionStorage.cacheData
      .filter((item) => item.cocktail_name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    const ifSuggestions = updataData.length > 0;
    this.setState({
      isSuggestionShown: ifSuggestions,
      suggestionList: [...updataData]
    });
  }

  render() {
    const { userData } = this.props;
    const {
      value, isSuggestionShown, isMenuOpen, suggestionList
    } = this.state;
    return (
      <nav className="scroll">
        <div className={`click-to-close-nav-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => this.closeMenu(e)} />
        <div className="nav-containter">
          <div className="menu-toggle" onClick={(e) => this.openMenu(e)}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ha-ban-lo.appspot.com/o/assets%2Fha-ban-lo%2Ficon_menu_black.png?alt=media&token=7f30038f-dc13-491b-b5a1-aea205eb347f" alt="" />
            <a href="#">MENU</a>
          </div>
          <h1><Link to="/">hā-pan</Link></h1>
          <button type="button" className="member-btn">
            <HashLink to={userData.authUser ? `/account/${userData.authUser.uid}` : '/#member'}>YOUR DRINK</HashLink>
          </button>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="close" onClick={(e) => this.closeMenu(e)}>
              <img src="https://firebasestorage.googleapis.com/v0/b/ha-ban-lo.appspot.com/o/assets%2Fha-ban-lo%2Fclose.png?alt=media&token=c47d304f-dcbb-4166-b8cc-ed2bbf5cb727" alt="" />
            </div>
            <ul className="menu-link" onClick={(e) => this.closeMenu(e)}>
              <li>
                <Link
                  to={{
                    pathname: '/gallery',
                    state: {
                      searchTarget: undefined
                    }
                  }}
                >
CLASSIC COCKTAIL
                </Link>
              </li>
              <li>
                <Link to="/bartending-ideas">BARTENDING IDEAS</Link>
              </li>
              <li>
                <Link to="/taiwanbar">TAIWAN BAR</Link>
              </li>
            </ul>
            <form className="search">
              <div className="search-auto-complete">
                <input type="text" name="search" id="search" autoComplete="off" value={value} onChange={(e) => this.inputChange(e)} placeholder="Cocktail Name" />
                <ul className={`search-suggestion ${isSuggestionShown ? 'down' : ''}`}>
                  {
                    suggestionList.map((item, i) => (
                      <li
                        className="item"
                        key={i}
                        onClick={(e) => this.clickSuggestion(e)}
                      >
                        {item.cocktail_name}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <button
                type="button"
              >
                <Link
                  onClick={this.closeMenu}
                  to={{
                    pathname: '/gallery',
                    state: {
                      searchTarget: value
                    }
                  }}
                >
search
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
export default compose(
  ifAuth,
  withFirebase,
  cacheData
)(Navigation);

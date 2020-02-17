/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import ColorThief from 'colorthief';
import { ifAuth } from '../../components/Context/AuthUser';
import { withFirebase } from '../../components/Context/Firebase';
import { cacheData } from '../../components/Context/DataInSessionStorage';
import {
  GlassOfBrandy,
  GlassOfChampagne,
  GlassOfHighball,
  GlassOfMartini,
  GlassOfShot,
  GlassOfUFO,
  GlassOfWhisky
} from '../../components/SVG';

import '../../css/cocktailDetail.css';
import Loading from '../../components/Loading';

class CocktailDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailId: '',
      isCollected: false,
      index: 0
    };

    this.getLastCocktail = this.getLastCocktail.bind(this);
    this.getNextCocktail = this.getNextCocktail.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    this.setState({
      cocktailId: location.state.cocktailID
    });
  }

  getLastCocktail(e) {
    e.preventDefault();
    const { DataInSessionStorage } = this.props;
    const { cocktailId, index } = this.state;
    const targetIndex = DataInSessionStorage.cacheData.findIndex((item) => item.cocktail_id === cocktailId);
    if (DataInSessionStorage.cacheData[targetIndex - 1] === 'undefiend') {
      alert('There is no more cocktail');
      return;
    }
    // console.log(targetIndex);
    if (index === 0) {
      this.setState({
        cocktailId: DataInSessionStorage.cacheData[targetIndex - 1].cocktail_id,
        index: targetIndex - 1
      });
    } else {
      this.setState({
        cocktailId: DataInSessionStorage.cacheData[index - 1].cocktail_id,
        index: index - 1
      });
    }
  }

  getNextCocktail(e) {
    e.preventDefault();
    const { DataInSessionStorage } = this.props;
    const { cocktailId, index } = this.state;
    const targetIndex = DataInSessionStorage.cacheData.findIndex((item) => item.cocktail_id === cocktailId);
    // console.log(targetIndex);
    if (index === 0) {
      this.setState({
        cocktailId: DataInSessionStorage.cacheData[targetIndex + 1].cocktail_id,
        index: targetIndex + 1
      });
    } else {
      this.setState({
        cocktailId: DataInSessionStorage.cacheData[index + 1].cocktail_id,
        index: index + 1
      });
    }
  }

  render() {
    const { cocktailId } = this.state;
    return (
      <>
        <div className="wrap-detail">
          <main className="main-detail">
            <button className="last" onClick={(e) => this.getLastCocktail(e)} type="button">last</button>
            <div className="detail-box">
              <div className="pic" />
              <div className="blank" />
              <Content cocaktailId={cocktailId} />
            </div>
            <button className="next" onClick={(e) => this.getNextCocktail(e)} type="button">next</button>
          </main>
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

class CollectButtonBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collected: false
    };
    this.collect = this.collect.bind(this);
  }

  componentDidMount() {
    const { userData, cocaktailId } = this.props;
    if (userData.authUser) {
      const isCollected = userData.userCollections.findIndex((id) => id === cocaktailId) !== -1;
      this.setState({
        isCollected
      });
    }
  }

  collect(e, itemId) {
    e.preventDefault();
    const { DataInSessionStorage, firebase, userData } = this.props;
    const { isCollected } = this.state;
    const targetDataObj = DataInSessionStorage.cacheData.filter((item) => item.cocktail_id === itemId)[0];
    if (userData.authUser === null) {
      alert('Please Sign in!');
      return;
    }
    if (isCollected) {
      const question = window.confirm('Are you sure to remove this from your collection?');
      if (!question) {
        return;
      }
      firebase.db.collection('members').doc(userData.authUser.uid).collection('member_collections').doc(itemId)
        .delete()
        .then(() => {
          this.setState({
            isCollected: false
          });
        });
    } else {
      firebase.db.collection('members').doc(userData.authUser.uid).collection('member_collections').doc(itemId)
        .set(targetDataObj)
        .then(() => {
          this.setState({
            isCollected: true
          });
        });
    }
  }

  render() {
    const { isCollected } = this.state;
    const { cocaktailId } = this.props;
    return (
      <button className="collect" type="button" onClick={(e) => this.collect(e, cocaktailId)}>
        <img src={isCollected ? '../imgs/hearts.png' : '../imgs/heart.png'} alt="plus" />
      </button>
    );
  }
}

const CollectButton = compose(withFirebase, cacheData, ifAuth)(CollectButtonBase);

class AddButtonBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collected: false,
      ingredientId: ''
    };

    this.addIngredients = this.addIngredients.bind(this);
  }

  componentDidMount() {
    const { userData, target } = this.props;
    if (userData.authUser) {
      const isCollected = userData.userIngredients.findIndex((name) => name === target) !== -1;
      if (isCollected) {
        this.setState({
          collected: true
        });
      }
    }
  }

  addIngredients(e) {
    e.preventDefault();
    const { collected, ingredientId } = this.state;
    const { target, userData, firebase } = this.props;
    console.log(target);
    if (userData.authUser === null) {
      alert('Please Sign in!');
      return;
    }
    if (collected) {
      firebase.db.collection('members').doc(userData.authUser.uid).collection('member_ingredients').doc(ingredientId)
        .delete()
        .then(() => {
          this.setState({
            collected: false
          });
        });
    } else {
      firebase.db.collection('all_ingredient').where('ingredient_name', '==', target)
        .get()
        .then((docQuery) => {
          let targetObj = null;
          docQuery.forEach((doc) => {
            targetObj = doc.data();
          });
          firebase.db.collection('members').doc(userData.authUser.uid).collection('member_ingredients').doc(targetObj.ingredient_id)
            .set(targetObj)
            .then(() => {
              this.setState({
                collected: true,
                ingredientId: targetObj.ingredient_id
              });
            });
        })
        .catch(() => alert('Sorry, something wrong, try to reload your page!'));
    }
  }

  render() {
    const { collected } = this.state;
    return (
      <div className={`add-to-my-ingredients ${collected ? 'collected' : ''}`} onClick={(e) => this.addIngredients(e)}>
        <img src={collected ? '../imgs/ok.png' : '../imgs/plus.png'} alt="plus" />
      </div>
    );
  }
}
const AddButton = compose(withFirebase, cacheData, ifAuth)(AddButtonBase);

class ContentBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPlette: [],
      isLoading: false,
      isCollected: false
    };
    this.img = React.createRef();
    this.getImgColor = this.getImgColor.bind(this);
  }

  componentDidMount() {
    console.log('hi');
    this.setState({
      isLoading: true,
      colorPlette: []
    });
  }

  getImgColor(e, length) {
    const colorThief = new ColorThief();
    const img = this.img.current;
    const colorPletteRGB = colorThief.getPalette(img, length);
    this.setState({
      isLoading: false,
      colorPlette: [...colorPletteRGB]
    });
  }

  render() {
    const { DataInSessionStorage, cocaktailId } = this.props;
    const targetDetail = DataInSessionStorage.cacheData.filter((cocktail) => cocktail.cocktail_id === cocaktailId);
    return (
      targetDetail.map((item) => (
        <div className="content" key={item.cocktail_id}>
          <img
            src={`${item.cocktail_pic}?time=${new Date().valueOf()}`}
            ref={this.img}
            alt="none"
            className="invisibleImg"
            onLoad={(e) => this.getImgColor(e, item.cocktail_ingredients.length)}
            crossOrigin="anonymous"
          />
          <h2>
            {item.cocktail_name}
          </h2>
          <CollectButton cocaktailId={cocaktailId} />
          <p>{item.cocktail_category}</p>
          <div className="ingredient-content">
            <div className="ingredient-description">
              <h3>Ingredients</h3>
              <ul className="ingredient-list">
                {
                item.cocktail_ingredients.map((ingredient, i) => (
                  <li className="item" key={`${item.cocktail_ingredients_type[i]}+${i}`}>
                    <span className="measure">{item.cocktail_measures[i]}</span>
                    <span className="name">{ingredient}</span>
                    <AddButton target={ingredient} />
                  </li>
                ))
              }
              </ul>
              <p className="intro">{item.cocktail_introduction}</p>
            </div>

            <div className="ingedient-info">
              <div className="svg">
                <GlassComponent glassType={item.cocktail_glass_type} colors={this.state} />
              </div>
              <div className="glass">
                <p>{item.cocktail_glass}</p>
              </div>
            </div>
          </div>
          <Link
            className="back-to-gallery"
            to={{
              pathname: '/gallery',
              state: {
                searchTarget: undefined
              }
            }}
          >
← Go Back
          </Link>
        </div>
      )));
  }
}

function GlassComponent(props) {
  const { glassType, colors } = props;
  let glassSVG = null;
  if (glassType === 'GlassOfBrandy') {
    glassSVG = <GlassOfBrandy mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfChampagne') {
    glassSVG = <GlassOfChampagne mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfHighball') {
    glassSVG = <GlassOfHighball mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfMartini') {
    glassSVG = <GlassOfMartini mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfShot') {
    glassSVG = <GlassOfShot mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfUFO') {
    glassSVG = <GlassOfUFO mainColor={colors} />;
    return glassSVG;
  }
  if (glassType === 'GlassOfWhisky') {
    glassSVG = <GlassOfWhisky mainColor={colors} />;
    return glassSVG;
  }
}

const Content = compose(withFirebase, cacheData, ifAuth)(ContentBase);

export default compose(
  ifAuth,
  withFirebase,
  cacheData
)(CocktailDetailPage);

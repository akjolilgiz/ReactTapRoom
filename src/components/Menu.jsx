import React from "react";
import Tap from "./Tap";
import MenuList from "./MenuList";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuList: [
        {
          name: "Ruby Zozzle",
          brewer: "Hi-Wheel",
          description: "Sparkling Wine & Grapefruit",
          abv: "6.8",
          price: "12",
          remaining: 40
        },
        {
          name: "Tart N Juicy",
          brewer: "Epic",
          description: "Sour IPA",
          abv: "4.5",
          price: "6",
          remaining: 40
        }
        // {
        //   name: "Hamm's",
        //   brewer: "Miller/Coors",
        //   description: "American Lager",
        //   abv: "4.7",
        //   price: "3",
        //   remaining: 40
        // },
        // {
        //   name: "Prismatic",
        //   brewer: "Ninkasi",
        //   description: "Juicy IPA",
        //   abv: "5.9",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "Juicy Haze",
        //   brewer: "New Belgium",
        //   description: "India Pale Ale",
        //   abv: "7.5",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "8 Hop",
        //   brewer: "New Belgium",
        //   description: "Pale Ale",
        //   abv: "5.5",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "High Road",
        //   brewer: "Walking Man Brewing",
        //   description: "Scotch / Wee Heavy",
        //   abv: "9.2",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "Helldorado",
        //   brewer: "Firestone Walker Brewing Company",
        //   description: "Barrel Aged Barleywine - Blonde",
        //   abv: "13.2",
        //   price: "7",
        //   remaining: 40
        // },
        // {
        //   name: "Canadian Breakfast Stout",
        //   brewer: "Founders Brewing Co.",
        //   description: "Stout",
        //   abv: "11.6",
        //   price: "10",
        //   remaining: 40
        // },
        // {
        //   name: "Alpha",
        //   brewer: "Block 15 Brewing Company",
        //   description: "IPA - American",
        //   abv: "6.4",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "Rye Lager",
        //   brewer: "Chuckanut Brewery",
        //   description: "Rye Beer",
        //   abv: "5.7",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "American Wheat",
        //   brewer: "Chuckanut Brewery",
        //   description: "Pale Wheate Ale - American",
        //   abv: "5.2",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "Divination",
        //   brewer: "Holy Mountain Brewing",
        //   description: "Saison - Oak Foudre w/ Orange Peel",
        //   abv: "5.8",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "Trigo",
        //   brewer: "Founders Brewing Co.",
        //   description: "Lager - IPL(India Pale Lager",
        //   abv: "6.3",
        //   price: "5.50",
        //   remaining: 40
        // },
        // {
        //   name: "G.O.A.T.U.S",
        //   brewer: "Structures Brewing",
        //   description: "IPA - Black/Cascadian Dark Ale",
        //   abv: "7",
        //   price: "6",
        //   remaining: 40
        // },
        // {
        //   name: "RPM IPM",
        //   brewer: "Boneyard Beer",
        //   description: "IPA - American",
        //   abv: "6.6",
        //   price: "5.50",
        //   remaining: 40
        // },
        // {
        //   name: "Zazzle",
        //   brewer: "Cloudburst Brewing",
        //   description: "7",
        //   abv: "8.3",
        //   price: "7",
        //   remaining: 40
        // }
      ]
    };
    this.handleSoldTap = this.handleSoldTap.bind(this);
    this.handleNewTap = this.handleNewTap.bind(this);
    this.handleFillingUp = this.handleFillingUp.bind(this);
    this.handleSortByHighestPrice = this.handleSortByHighestPrice.bind(this);
    this.handleSortByLowestPrice = this.handleSortByLowestPrice.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(index) {
    var newMenuList = this.state.MenuList.slice();
    var splicedMenuList = newMenuList.splice(index, 1);
    this.setState({ MenuList: splicedMenuList });
  }
  handleSortByHighestPrice() {
    var newMenuList = this.state.MenuList.slice();
    var sortedMenu = newMenuList.sort(function(a, b) {
      return b.price - a.price;
    });
    this.setState({ MenuList: sortedMenu });
  }
  handleSortByLowestPrice() {
    var newMenuList = this.state.MenuList.slice();
    var sortedMenu = newMenuList.sort(function(a, b) {
      return a.price - b.price;
    });
    this.setState({ MenuList: sortedMenu });
  }
  handleSoldTap(index) {
    var newMenuList = this.state.MenuList.slice();
    newMenuList[index].remaining--;
    this.setState({ MenuList: newMenuList });
  }
  handleFillingUp(index) {
    var newMenuList = this.state.MenuList.slice();
    newMenuList[index].remaining++;
    this.setState({ MenuList: newMenuList });
  }
  handleNewTap(newTap) {
    var newMenuList = this.state.MenuList.slice();
    newMenuList.push(newTap);
    this.setState({ MenuList: newMenuList });
  }
  render() {
    var sortButtonStyle = {
      height: "50px",
      width: "90px"
    };
    var sortStyle = {
      height: "25px",
      width: "180px",
      backgroundColor: "silver",
      marginLeft: "622"
    };
    return (
      <div>
        <div style={sortStyle}>Sort By Price</div>
        <button style={sortButtonStyle} onClick={this.handleSortByHighestPrice}>
          $$$
        </button>
        <button style={sortButtonStyle} onClick={this.handleSortByLowestPrice}>
          $
        </button>

        <switch>
          <Route
            path="/admin"
            render={props => (
              <Admin
                menuList={this.state.MenuList}
                currentRouterPath={props.location.pathname}
                onAlert={this.handleAlert}
                onFillingUp={this.handleFillingUp}
                onNewTap={this.handleNewTap}
                onDelete={this.handleDelete}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <MenuList
                menuList={this.state.MenuList}
                onSoldTap={this.handleSoldTap}
                onSortByHighestPrice={this.handleSortByHighestPrice}
                onSortByLowestPrice={this.handleSortByLowestPrice}
              />
            )}
          />
        </switch>
      </div>
    );
  }
}
export default Menu;

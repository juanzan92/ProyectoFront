import React from "react";
import wrapper from "../../components/Wrapper";

import ListingCategoriesTitle from "../../components/listing-category/CategoryTitle";
import ShopToolbar from "../../components/listing-category/ShopToolbar";
import OportunityGrid from "../../components/listing-category/OportunityGrid";
import PaginationControl from "../../components/utils/PaginationControl";
import ProductFilter from "../../components/listing-category/ProductsFilter";

class ListingCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: [],
      priceMin: 0,
      priceMax: 200000,
      brands: [],
      checkedItems: [],
      sortingBy: "minMax",
      priceFilter: [0, 99999999999]
    };

    this.getItems();
    this.handleBrandFilter = this.handleBrandFilter.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.orderItems = this.orderItems.bind(this);
  }

  getMarcasFromItems() {
    const { items } = this.state;
    let myBrand = [];
    items.forEach(item => myBrand.push(item.attributes[0].value));

    myBrand = this.compressArray(myBrand);

    this.setState({
      brands: myBrand
    });
  }

  compressArray(original) {
    var compressed = [];
    // make a copy of the input array
    var copy = original.slice(0);
    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {
      var myCount = 0;
      // loop over every element in the copy and see if it's the same
      for (var w = 0; w < copy.length; w++) {
        if (original[i] === copy[w]) {
          // increase amount of times duplicate is found
          myCount++;
          // sets item to undefined
          delete copy[w];
        }
      }

      if (myCount > 0) {
        var a = new Object();
        a.value = original[i];
        a.count = myCount;
        compressed.push(a);
      }
    }

    return compressed;
  }

  getItems() {
    let { category_id, max_amount, min_amount } = this.props.match.params;
    if (!max_amount || !min_amount) {
      max_amount = 200000;
      min_amount = 0;
    }

    const data = {
      price: { max_amount: 20000, min_amount: 0 }
    };

    const url = `http://localhost:8080/catalog/items/listing/${category_id}`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        myJson = myJson.filter(item => item.item_status === "ACTIVE");
        this.setState({
          items: myJson,
          filteredItems: myJson,
          priceMin: this.getMin(myJson),
          priceMax: this.getMax(myJson)
        });
        this.getMarcasFromItems();
      });
  }

  getMax(vectorItems) {
    let vectorPrices = [];
    vectorItems.forEach(x => vectorPrices.push(x.actual_price));
    let max = Math.max.apply(null, vectorPrices);
    return max;
  }

  getMin(vectorItems) {
    let vectorPrices = [];
    vectorItems.forEach(x => vectorPrices.push(x.actual_price));
    let min = Math.min.apply(null, vectorPrices);
    return min;
  }

  orderItems(filter, arrayToSort) {
    let { filteredItems } = this.state;

    arrayToSort.length > 0
      ? (filteredItems = arrayToSort)
      : (filteredItems = filteredItems);

    if (filter === "maxMin") {
      filteredItems.sort((a, b) => b.actual_price - a.actual_price);
      this.setState({ filteredItems: filteredItems, sortingBy: filter });
    } else if (filter === "minMax") {
      filteredItems.sort((a, b) => a.actual_price - b.actual_price);
      this.setState({ filteredItems: filteredItems, sortingBy: filter });
    } else {
      filteredItems.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({ filteredItems: filteredItems, sortingBy: filter });
  }

  handleBrandFilter(brand) {
    const { items, checkedItems } = this.state;

    if (!checkedItems.includes(brand)) {
      checkedItems.push(brand);
    } else if (checkedItems.length > 0) {
      let index = checkedItems.indexOf(brand);
      checkedItems.splice(index, 1);
    }

    this.getAllInOne(items, "brand");
  }

  handlePriceFilter(price) {
    const { items } = this.state;

    let auxFiltered = items.filter(
      item => item.actual_price >= price[0] && item.actual_price <= price[1]
    );

    this.getAllInOne(auxFiltered, "price", price);
  }

  getAllInOne(filteredArray, filterBy, filterValue) {
    let exitArray = [];
    var { checkedItems, priceFilter } = this.state;
    if (filterBy === "price") {
      if (checkedItems.length !== 0) {
        exitArray = filteredArray.filter(item =>
          checkedItems.includes(item.attributes[0].value)
        );
      } else {
        exitArray = filteredArray;
      }

      this.setState({ priceFilter: filterValue });
    } else {
      checkedItems.length === 0
        ? (exitArray = filteredArray)
        : (exitArray = filteredArray.filter(item =>
            checkedItems.includes(item.attributes[0].value)
          ));

      exitArray = exitArray.filter(
        item =>
          item.actual_price >= priceFilter[0] &&
          item.actual_price <= priceFilter[1]
      );
    }

    this.orderItems(this.state.sortingBy, exitArray);
  }

  render() {
    const { filteredItems, brands, priceMin, priceMax } = this.state;
    const { category_id } = this.props.match.params;

    if (filteredItems.length > 0) {
      return (
        <>
          <ListingCategoriesTitle category_name={category_id} />
          <div class="container padding-bottom-3x mb-1">
            <div class="row">
              <div class="col-xl-9 col-lg-8 order-lg-2">
                <ShopToolbar orderItems={this.orderItems} />
                {<OportunityGrid items={filteredItems} />}
                {/*<PaginationControl />*/}
              </div>
              <div class="col-xl-3 col-lg-4 order-lg-1">
                <ProductFilter
                  brands={brands}
                  priceMin={priceMin}
                  priceMax={priceMax}
                  handleBrandFilter={this.handleBrandFilter}
                  handlePriceFilter={this.handlePriceFilter}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="spinner-border text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export default wrapper(ListingCategories);

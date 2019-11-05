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
      items: []
    };

    this.getItems();
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
        this.setState({
          items: myJson
        });
      });
  }

  render() {
    const { items } = this.state;
    const { category_id } = this.props;

    if (items.length > 0) {
      return (
        <>
          <ListingCategoriesTitle category={category_id} />
          <div class="container padding-bottom-3x mb-1">
            <div class="row">
              <div class="col-xl-9 col-lg-8 order-lg-2">
                <ShopToolbar />
                {<OportunityGrid items={items} />}
                <PaginationControl />
              </div>
              <div class="col-xl-3 col-lg-4 order-lg-1">
                <ProductFilter />
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

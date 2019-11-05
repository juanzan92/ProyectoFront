import React from "react";
import wrapper from "../../components/Wrapper";

import ListingCategoriesTitle from "../../components/listing-category/CategoryTitle";

class ListingCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getItems() {
    const { category_id, max_amount, min_amount } = this.props.match;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/items/listing/${category_id}`;
    fetch(url, {
      method: "POST",
      body: {
        price: {
          max_amount: `${max_amount}`,
          min_amount: `${min_amount}`
        }
      }
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
    return (
      <>
        <ListingCategoriesTitle />
      </>
    );
  }
}

export default wrapper(ListingCategories);

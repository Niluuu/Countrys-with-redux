import React, { Component } from 'react'
import './App.css';
import { connect } from "react-redux";
import { fetchProducts, filter, search_text } from "./productActions";
import Input from './Input'
import  CountryTable  from './CountryTable';
import LinearProgress from '@material-ui/core/LinearProgress';

export class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.props.text.length < 1) {
      alert("write something")
    }else{
      this.props.dispatch(filter())  
    }
  }

  handleChange = (event) => {
    this.props.dispatch(search_text(event.target.value))
  }

   render() {
    const { error, loading, products, text, filtered } = this.props;
    console.log("filtered",filtered)

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <LinearProgress />;
    }

    return (
      <div>
        <Input 
          text={text} 
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          />
          {
            filtered === null || !filtered || filtered.length === 0 || text === "" ? (
              <div>
                {/* all */}
                <CountryTable products={products} />
              </div>
              ) : (
              <div>
                {/* filtered */}
                <CountryTable products={filtered} />
              </div>
          )}

      </div>
    );
   
  }
}


const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  text: state.products.text,
  filtered: state.products.filtered
});


export default connect(mapStateToProps)(App)


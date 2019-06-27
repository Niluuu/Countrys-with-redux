import React, { Component } from 'react'
import './App.css';
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


export class App extends Component {
  state = {
    filtered: [],
    value: ""
  }
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleChage = (e) => {
    const { value } = this.state.value
    this.setState({ value: e.target.value })
    console.log("val", value)
  }

   render() {
    const { error, loading, products } = this.props;
    // console.log("pr",products)

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <InputBase
            placeholder="Search Country by name"
            onChange={this.handleChage}
            value={this.state.value}
          />
          <IconButton aria-label="Search" >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="flex-start"
         >
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name of country</TableCell>
                <TableCell align="right">Capitals</TableCell>
                <TableCell align="right">Algha code</TableCell>
                <TableCell align="right">Flags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { products.map(country => (
                  <TableRow key={country.area} >
                    <TableCell component="th" scope="row">{country.name}</TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.alpha3Code}</TableCell>
                    <TableCell style={{backgroundImage: `url(${country.flag})`, backgroundSize: "cover", height: "30px", width: "50px" }} align="right"></TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </Grid>
      </div>
             
    );
  }
}


const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});


export default connect(mapStateToProps) (App)


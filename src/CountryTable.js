import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export class CountryTable extends Component {
  render() {
    const { products } = this.props
    return (
      <div>
         <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name of country</strong></TableCell>
                <TableCell align="right">Capitals</TableCell>
                <TableCell align="right">Algha code</TableCell>
                <TableCell align="right">Flags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { products.map(country => (
                  <TableRow key={country.population} >
                    <TableCell component="th" scope="row">{country.name}</TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.alpha3Code}</TableCell>
                    <TableCell 
                      style={{backgroundImage: `url(${country.flag})`, backgroundSize: "cover", height: "30px", width: "50px" }} align="right">
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default CountryTable

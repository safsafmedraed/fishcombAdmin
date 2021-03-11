import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {
    CButton, CCol
} from '@coreui/react'
import { Link } from 'react-router-dom';

const Tables = ({Marketplace : {products}}) => {
    return (
        <>
            <Table hover variant="pramiry">
                <thead>
                    <tr>
                        <th>Number Events</th>
                        <th>Event Name</th>
                        <th>Quantity</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {products && products.map((products) => (
                        <tr key={products.id} products={products}  >
                            <td>{products && products.id}</td>
                            <td>{products && products.name}</td>
                            <td>{products && products.stock} </td>
                            <td>
                                <Link to={`/product/${products.id}`} >
                                    <CButton block variant="outline" color="info"  >Details</CButton>
                                </Link>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}

Tables.prototype = {
    Marketplace  : PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Marketplace : state.Marketplace,
    products: state.products
})
export default connect(mapStateToProps, null)(Tables);



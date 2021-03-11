import React, { useEffect } from 'react'
import { getallproducts } from '../../Redux/Actions/Market';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from '../base/tables/Tables';
import Navbars from '../base/navbars/Navbars';

const Marketplace = ({ getallproducts, Marketplace: { product } }) => {
    useEffect(() => {
        getallproducts()
    }, [getallproducts])
    return (<div>
        <Navbars />


        <div>
            <span>
                {product && product.name}
            </span>
        </div>
    </div>)
}

Marketplace.prototype = {
    getallproducts: PropTypes.func.isRequired,
    Marketplace: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    Marketplace: state.Marketplace,
})

export default connect(mapStateToProps, { getallproducts })(Marketplace);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOneProduct } from '../../Redux/Actions/Market';

const SingleProduct = ({getOneProduct, match , Marketplace : {product}}) => {
    useEffect(() => {
        getOneProduct(match.params.id);
    }, [getOneProduct, match.params.id ])

    return (
        <div>
            { product && product.name }
        </div>
    )
}
SingleProduct.prototype={
    getOneProduct: PropTypes.func.isRequired,
    Marketplace  : PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Marketplace: state.Marketplace,
})
export default connect(mapStateToProps, {getOneProduct}) (SingleProduct)

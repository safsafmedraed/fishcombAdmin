import React, { useEffect } from 'react'
import { getallproducts } from '../../Redux/Actions/Market';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from '../base/tables/Tables';
import CNavbars from './NavBars';
import Table from './Table';
const Marketplace = ({ getallproducts }) => {
    useEffect(() => {
        getallproducts()
    }, [getallproducts])
    return (<div>
        <CNavbars />
        <Table />
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
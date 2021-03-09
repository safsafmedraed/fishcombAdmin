import React,{useEffect} from 'react'
import {getallproducts} from '../../Redux/Actions/Market';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from '../base/tables/Tables';
import Navbars from '../base/navbars/Navbars';

const Marketplace =({getallproducts})=>{
    useEffect(() => {
        getallproducts()
    },[getallproducts])
    return (<div>
        <Navbars />
        
        <Tables />
        <div>
            <span>
                
            </span>
        </div>
    </div>)
    }
    
Marketplace.prototype={
    getallproducts:PropTypes.func.isRequired,
}
const mapStateToProps =state=>({
    Marketplace:state.Marketplace,
})

export default connect(mapStateToProps, {getallproducts}) (Marketplace);
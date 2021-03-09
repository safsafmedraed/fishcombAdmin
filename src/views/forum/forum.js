import React, {useEffect} from 'react';
import { getAllthreads } from '../../Redux/Actions/Forum';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from '../base/tables/Tables';
import Navbars from '../base/navbars/Navbars';

const Forum = ({getAllthreads}) =>{
    useEffect(() => {
        getAllthreads()
    }, [getAllthreads])
    return (<div>
        <Navbars />
        <Tables />
    </div>)
}
Forum.prototype={
    getAllthreads: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Thread : state.Thread,
})
export default connect (mapStateToProps, { getAllthreads }) (Forum);
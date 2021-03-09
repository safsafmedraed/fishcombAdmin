import React, { useEffect } from 'react';
import { getAllthreads } from '../../Redux/Actions/Forum';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from './Table';
import Navbars from './Navbars';
import { CRow, CCol } from '@coreui/react';

const Forum = ({ getAllthreads }) => {
    useEffect(() => {
        getAllthreads()
    }, [getAllthreads])
    return (<div>
        <Navbars />
        <CRow className='pt-4'>
            <CCol xs={12}>
                <Tables />
            </CCol>
        </CRow>

    </div>)
}
Forum.prototype = {
    getAllthreads: PropTypes.func.isRequired,
    Thread: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Thread: state.Thread,
})
export default connect(mapStateToProps, { getAllthreads })(Forum);
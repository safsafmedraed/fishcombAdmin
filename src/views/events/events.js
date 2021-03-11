import React , { useEffect }  from 'react'
import Tables from './Table';
import NavBars from './NavBars';
import { CRow, CCol } from '@coreui/react';
import { getAllEvent } from '../../Redux/Actions/Events';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Events = ({getAllEvent }) => {
    useEffect(() => {
        getAllEvent()
    }, [getAllEvent])
    return (<div>
        <NavBars />
        <CRow className='pt-4'>
            <CCol xs={12}>
                <Tables />
            </CCol>
        </CRow>
    </div>)
}
Events.prototype = {
    getAllEvent: PropTypes.func.isRequired,
    Events: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Events: state.Events
})
export default connect(mapStateToProps, { getAllEvent })(Events)

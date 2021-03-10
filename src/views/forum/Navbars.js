import React, {  } from 'react'
import {
    CNavbar,
    CForm,
    CInput,
    CButton,
    CCol
} from '@coreui/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchThread } from '../../Redux/Actions/Forum';

const CNavbars = ( { searchThread } ) => {
    // eslint-disable-next-line
    const [filter, setFilter] = React.useState('title');
    const [value, setValue] = React.useState('');
    const handleChange1 = e => {
        setValue(e.target.value)
    }
    const onsubmit1 = e => {
        e.preventDefault();
        searchThread(filter, value)
    }
    return (
        <>
            <CNavbar light color="light">
                <CForm inline onSubmit={e => onsubmit1(e)} >
                    <CCol xs={8}>
                        <CInput
                            className="mr-sm-5"
                            placeholder="Search"
                            size="sm-7"
                            value={value} onChange={handleChange1}
                        />
                    </CCol>
                    <CButton color="outline-info" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
            </CNavbar>
        </>
    )
}
CNavbars.prototype={
    searchThread: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Thread : state.Thread,
})
export default   connect (mapStateToProps, {  searchThread })(CNavbars)

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


const CNavbars = (  ) => {
    // eslint-disable-next-line
  
    return (
        <>
            <CNavbar light color="light">
                <CForm inline >
                    <CCol xs={8}>
                        <CInput
                            className="mr-sm-5"
                            placeholder="Search"
                            size="sm-7"
                            
                        />
                    </CCol>
                    <CButton color="outline-info" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
            </CNavbar>
        </>
    )
}


export default  CNavbars

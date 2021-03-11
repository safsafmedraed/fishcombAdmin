import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
const Profile = ({ Auth: { user } }) => {
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="6" md="4">
                    <CCard>
                        <CCardHeader>
                            Profile
                            <div className="card-header-actions">
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            <img src={user && user.attributes.profile_image} width='auto' height='250' />
                            <CCol md="12">
                                <CLabel>{user && user.attributes.first_name} {user && user.attributes.last_name}</CLabel>
                            </CCol>
                            <CCol md="12">
                                <CLabel>{user && user.attributes.phone}</CLabel>
                            </CCol>
                            <CCol md="12">
                                <CLabel>Birthday {user && user.attributes.birthday}</CLabel>
                            </CCol>
                            <CCol md="12">
                                <CLabel>Location {user && user.attributes.location}</CLabel>
                            </CCol>
                            <CCol md="12">
                                <CLabel>{user && user.attributes.about}</CLabel>
                            </CCol>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs={12} sm={6} md={8}>
                    <CCard>
                        <CCardHeader>
                            Edit Your Profile
                </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Profile</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <p className="form-control-static">Admin</p>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">First Name</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="text-input" placeholder="Text" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="email-input">Last Name </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="password-input">UserName</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="email-input">Phone</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="date-input">Date Brithday</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">About</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="5"
                                            placeholder="Content..."
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Profile Image</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" name="file-input" />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="md" color="info">Update Profile</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}
Profile.prototype = {
    Auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    Auth: state.Auth
})
export default connect(mapStateToProps, null)(Profile);

import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'src/Redux/Actions/Auth';
import { Avatar } from '@material-ui/core';



const TheHeaderDropdown = ({ logout, Auth: {user} }) => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Avatar
            src={
              user && user.attributes.profile_image
            }
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
          {user && user.attributes.first_name} {user && user.attributes.last_name}
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account settings</strong>
        </CDropdownItem>

        <CDropdownItem to='/profile'>
            <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem to='/home'
            onClick={logout}>
          <CIcon name="cil-lock-locked" className="mfe-2"  />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
TheHeaderDropdown.prototype ={
  logout: PropTypes.func.isRequired,
  Auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({ Auth: state.Auth })

export default  connect(mapStateToProps, { logout} )  (TheHeaderDropdown);

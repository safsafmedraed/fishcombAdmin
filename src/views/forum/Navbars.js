import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNavbar,
    CNavbarNav,
    CNavbarBrand,
    CNavbarText,
    CToggler,
    CNavLink,
    CDropdown,
    CForm,
    CInput,
    CButton,
    CImg
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const CNavbars = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const [navbarText, setNavbarText] = useState(false)

    return (
        <>
            <CNavbar light color="light">
                <CForm inline>
                    <CInput
                        className="mr-sm-2"
                        placeholder="Search"
                        size="sm"
                    />
                    <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
            </CNavbar>
        </>
    )
}

export default CNavbars

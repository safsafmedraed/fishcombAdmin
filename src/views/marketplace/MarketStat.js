import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  import postsData from '../users/PostsData'


  const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['Item','Date', 'Price', 'Buyers']

  const MarketStat=()=>{return(
      <>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <h2> MarketPlace Stats</h2>   
                </CCardHeader>
            <CCardBody>
            <CDataTable
              items={postsData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.Views)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
      
  )}
  export default MarketStat
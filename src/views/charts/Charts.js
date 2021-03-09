import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/reusable'

const Charts = () => {

  return (
    <CCardGroup rows className = "cols-2 " >
      <CCard className='mb-1'>
        <CCardHeader>
          Posts 
          
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] //api number of posts per month 

              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

    

     
      <CCard className='mb-1 ml-2'>
      <CCardHeader>
          Pie Chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10] //api number of posts per user  
              }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

     

     
    </CCardGroup>
  )
}

export default Charts

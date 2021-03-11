import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {
    CButton, CCol
} from '@coreui/react'
import { Link } from 'react-router-dom';

const Tables = ({Events :{events}}) => {
    return (
        <>
            <Table hover variant="pramiry">
                <thead>
                    <tr>
                        <th>Number Events</th>
                        <th>Event Name</th>
                        <th>Name User</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {events && events.map((events) => (
                        <tr key={events.id} events={events}  >
                            <td>{events && events.id}</td>
                            <td>{events && events.name}</td>
                            <td> </td>
                            <td>
                                <Link to={`event/${events.id}`} >
                                    <CButton block variant="outline" color="info"  >Details</CButton>
                                </Link>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}

Tables.prototype = {
    Events: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Events: state.Events,
})
export default connect(mapStateToProps, null)(Tables);



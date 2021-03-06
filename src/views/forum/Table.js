import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {
    CButton, CCol
} from '@coreui/react'
import { Link } from 'react-router-dom';

const Tables = ({ Thread: { threads } }) => {
    return (
        <>
            <Table hover variant="pramiry">
                <thead>
                    <tr>
                        <th>Number Threads</th>
                        <th>Title</th>
                        <th>Name User</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {threads && threads.map((threads) => (
                        <tr key={threads.id} threads={threads}  >
                            <td>{threads && threads.data.id}</td>
                            <td>{threads && threads.data.title}</td>
                            <td>{threads && threads.data.user.data.attributes.first_name} {threads && threads.data.user.data.attributes.last_name}</td>
                            <td>
                                <Link to={`/thread/${threads.data.id}`}>
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
    Thread: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    Thread: state.Thread,
    thread: state.Thread
})
export default connect(mapStateToProps, null)(Tables);



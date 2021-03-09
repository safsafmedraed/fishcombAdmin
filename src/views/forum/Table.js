import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const Tables = ({ Thread: { thread } }) => {
    return (
        <>
            <Table hover variant="dark">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Name User</th>
                    <th>
                    </th>
                </tr>
                </thead>
            <tbody>
                {thread && thread.map((threads) => (
                    <tr key={threads.id} threads={threads}  >
                        <td>{threads && threads.data.title}</td>
                        <td>{threads && threads.data.user.data.attributes.first_name} {threads && threads.data.user.data.attributes.last_name}</td>
                        <td>
                            <button>
                                Details
                            </button>
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
})
export default connect(mapStateToProps, null)(Tables);



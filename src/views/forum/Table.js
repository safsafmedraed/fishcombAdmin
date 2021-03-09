import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Table = ({ Thread: { thread } }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Total</th>
                        <th>Transaction_Id</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {thread && thread.map((threads) => (
                        <tr  key={threads.id} threads={threads}  >
                        <td>{threads && threads.data.title}</td>
                        <td>{threads && threads.data.title}</td>
                        <td>{threads && threads.data.title}</td>
                      </tr>
                      )
                      )}
                </tbody>
            </table>
        </>
    )
}
Table.prototype = {
                Thread: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
                Thread: state.Thread,
})
export default connect(mapStateToProps,null)(Table);



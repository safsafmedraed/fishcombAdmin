import React, { useEffect } from 'react';
import { getOneThread } from '../../Redux/Actions/Forum';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const SingleThread = ({ match, getOneThread ,thread: {thread}}) => {
    
    useEffect(() => {
        getOneThread(match.params.id);
    }, [getOneThread, match.params.id])
    return (
        <div>
           {thread && thread.data.title}
        </div>
    )
}
SingleThread.prototype = {
    getOneThread: PropTypes.func.isRequired,
    Thread: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    thread: state.thread,
})
export default connect(mapStateToProps, { getOneThread })(SingleThread)

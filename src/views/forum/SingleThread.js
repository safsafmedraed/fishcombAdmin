import React, { useEffect } from 'react';
import { getOneThread } from '../../Redux/Actions/Forum';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const SingleThread = ({ match, getOneThread ,Thread: {thread}}) => {
    
    useEffect(() => {
        getOneThread(match.params.id);
    }, [getOneThread, match.params.id])
    return (
        <div>
           {thread && thread?.data?.title}
        </div>
    )
}
SingleThread.prototype = {
    getOneThread: PropTypes.func.isRequired,
    Thread: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Thread: state.Thread,
})
export default connect(mapStateToProps, { getOneThread })(SingleThread)

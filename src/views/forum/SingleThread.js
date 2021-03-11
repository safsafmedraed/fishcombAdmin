import React, { useEffect } from 'react';
import { getOneThread } from '../../Redux/Actions/Forum';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const SingleThread = ({ match, getOneThread ,thread: {threads}}) => {
    
    useEffect(() => {
        getOneThread(match.params.id);
    }, [getOneThread, match.params.id])
    return (
        <div>
           {threads && threads.data.title}
        </div>
    )
}
SingleThread.prototype = {
    getOneThread: PropTypes.func.isRequired,
    threads: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    thread: state.Thread,
    threads: state.threads,
})
export default connect(mapStateToProps, { getOneThread })(SingleThread)

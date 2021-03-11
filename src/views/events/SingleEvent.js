import React, { useEffect } from 'react';
import { getOneEvent } from '../../Redux/Actions/Events';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const SingleEvent = ({ match, getOneEvent ,Events :{event}}) => {
    
    useEffect(() => {
        getOneEvent(match.params.id);
    }, [getOneEvent, match.params.id])
    return (
        <div>
           {event && event.name}
        </div>
    )
}
SingleEvent.prototype = {
    getOneEvent: PropTypes.func.isRequired,
    Events: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Events: state.Events,
})
export default connect(mapStateToProps, { getOneEvent })(SingleEvent)
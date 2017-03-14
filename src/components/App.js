import React, { PropTypes } from 'react';

function App(props) {
    return (
        <div>
            <div>{props.color}</div>
        </div>
    );
}

App.propTypes = {
    color: PropTypes.string
};

export default App;

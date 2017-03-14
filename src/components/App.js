import React, { PropTypes } from 'react';

function App(props) {
    return (
        <div>
            <p>something for the screen?</p>
            <div>hi {props.color}</div>
        </div>
    );
}

App.propTypes = {
    color: PropTypes.string
};

export default App;

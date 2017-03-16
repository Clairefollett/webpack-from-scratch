import React, { PropTypes } from 'react';

const App = ({color}) => (
        <div>
            <p>something for the screen?</p>
            <div>hi {color}</div>
        </div>
    );

App.propTypes = {
    color: PropTypes.string
};

export default App;
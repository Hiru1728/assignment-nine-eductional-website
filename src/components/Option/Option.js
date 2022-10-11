import React from 'react';

const Option = ({ option }) => {

    const results = ['Right Answer', 'Wrong Answer'];
    return (
        <div>
            {
                results.map(result => (<div>
                    <input type="radio" value={result} name="radiovalues" />
                    <b>{option}</b>
                </div>))
            }
        </div>
    );
};

export default Option;
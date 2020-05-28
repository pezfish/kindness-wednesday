import React from 'react';
import PropTypes from 'prop-types';
import { IndexTemplate } from '../../templates/IndexTemplate';

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return <IndexTemplate content={data} />;
    } else {
        return <div>Loading...</div>;
    }
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default IndexPagePreview;

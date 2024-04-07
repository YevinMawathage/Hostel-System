import React from 'react';

const LargeImage = () => {

    const imageUrl = process.env.PUBLIC_URL + 'map.png';

    return (
        <div>
            <img src={imageUrl} alt="Large display" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default LargeImage;
import React from 'react';

export const Loading = (show) => {
    if(show.show) {
        return (
            <div className="col-12">
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                <p>Loading . . .</p>
            </div>
        );
    }
};
import React from "react";

const SkeletonLoader = () => {
    return (
        <div className="col-6 col-md-4 text-decoration-none">
            <div className="skeleton-card" style={{ backgroundColor: '#343A40', borderRadius: '8px', padding: '10px' }}>
                <div className="skeleton-image" style={{ height: '200px', backgroundColor: '#495057', borderRadius: '4px' }} />
                <div className="skeleton-text" style={{ width: '70%', height: '20px', backgroundColor: '#6c757d', margin: '10px 0', borderRadius: '4px' }} />
                <div className="skeleton-text" style={{ width: '50%', height: '20px', backgroundColor: '#6c757d', borderRadius: '4px' }} />
                {/* Uncomment this section if you want action icons */}
                {/* <div className="skeleton-actions">
                    <div className="skeleton-icon" style={{ width: '30px', height: '30px', backgroundColor: '#6c757d', borderRadius: '50%' }} />
                    <div className="skeleton-icon" style={{ width: '30px', height: '30px', backgroundColor: '#6c757d', borderRadius: '50%' }} />
                </div> */}
            </div>
        </div>
    );
};

export default SkeletonLoader;

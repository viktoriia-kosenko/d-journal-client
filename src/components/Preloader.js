import React from 'react';

const Preloader = () => {
  return (
    <div className="container z-depth-2" style={{ height: '50vh' }}>
      <div
        className="preloader-wrapper big active"
        style={{ marginTop: '20vh' }}
      >
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

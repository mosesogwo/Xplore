import React from 'react';

const PackageDetails = props => {
  const { packageInfo } = props;
  return (
    <div>
      <p>Details</p>
      <div className="package">
        <div className="package-img">
          <img src={packageInfo.image} width={200} height={200} />
        </div>
        <div className="package-title">
          <p>{packageInfo.destination}</p>
          <p>{packageInfo.price}</p>
        </div>
      </div>
    </div>
  )
}

export default PackageDetails;
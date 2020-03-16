import React from 'react';
import PropTypes from 'prop-types';


const Package = props => {
  const {
    wishlist, username, packageInfo, addToWishList, removeFromWishList
  } = props;

  const expandDetails = event => {
    const detailsDiv = event.target.parentNode.parentNode.querySelector('.package-details');
    if (event.target.tagName.toLowerCase() !== 'button') {
      detailsDiv.classList.toggle('hidden');
    }
  };

  const addToWishListBtn = id => {
    const wishlistIds = wishlist.map(wish => wish.id);
    if (username === '') {
      return false;
    } if (wishlistIds.includes(id)) {
      return (<button 
        type="button" 
        className="added-wish-btn" 
        onClick={() => removeFromWishList(id)}>Remove from Wishlist</button>);
    }
    return (<button type="button" onClick={() => addToWishList(id)}>Add to Wishlist</button>);
  };

  return (
    <div className="package" onClick={expandDetails} onKeyPress={expandDetails} key={packageInfo.id} role="switch" aria-checked="false" tabIndex="-1">

      <div className="package-img">
        <img src={packageInfo.image} className="package-img" alt="package" />
      </div>

      <div className="package-brief">
        <div>{packageInfo.destination}</div>
        <div>
          N
          {packageInfo.price}
        </div>
      </div>

      <div className="package-details hidden">
        <p>{packageInfo.details}</p>
        {addToWishListBtn(packageInfo.id)}
      </div>
    </div>
  );
};

Package.propTypes = {
  wishlist: PropTypes.instanceOf(Array).isRequired,
  username: PropTypes.string.isRequired,
  packageInfo: PropTypes.instanceOf(Object).isRequired,
  addToWishList: PropTypes.func.isRequired,
};
export default Package;

import React from 'react';

const Package = props => {
  const { wishlist, username, packageInfo, addToWishList } = props;

  const   expandDetails = event => {
    console.log(event.target.tagName)
    const detailsDiv = event.target.parentNode.parentNode.querySelector('.package-details');
    if (event.target.tagName.toLowerCase() !== 'button') {
      detailsDiv.classList.toggle('hidden');
    }
  }

  const addToWishListBtn = id => {
    const wishlistIds = wishlist.map(wish => wish.id);
    if (username === '') {
      return false;
    } if (wishlistIds.includes(id)) {
      return (<button type="button" className="added-wish-btn">Added to Wishlist</button>);
    }
    return (<button type="button" onClick={() => addToWishList(id)}>Add to Wishlist</button>);
  }

  return (
    <div className="package" onClick={expandDetails} onKeyPress={expandDetails} key={packageInfo.id} role="switch" aria-checked="false" tabIndex="-1">

      <div className="package-img">
        <img src={packageInfo.image} className="package-img" alt="package" />
      </div>

      <div className="package-brief">
        <div>{packageInfo.destination}</div>
        <div>
          N{packageInfo.price}
        </div>
      </div>

      <div className="package-details hidden">
        <p>{packageInfo.details}</p>
        {addToWishListBtn(packageInfo.id)}
      </div>
    </div>
  )
}

export default Package;
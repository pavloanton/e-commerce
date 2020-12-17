import React from "react";

const DetailProduct = ({ itemId }) => {
  return (
    <>
      <div className="col-12 col-sm-4 mb-5" key={ itemId.id }>
        <div>
          <div>
            <img 
              src={itemId.img}
              alt={itemId.title}
              className="img-fluid"
            />
            </div>
              <div>
                <h5>{itemId.title}</h5>
              <div>
                ${itemId.price} USD
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default DetailProduct;
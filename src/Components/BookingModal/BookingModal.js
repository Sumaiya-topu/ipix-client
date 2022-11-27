import React from "react";

const BookingModal = ({ order, setOrder }) => {
  const {
    _id,
    model_name,
    condition,
    location,
    mobile_number,
    original_price,
    posted_on,
    productPhotoUrl,
    resale_price,
    seller_email,
    sold,
    year_of_purchase,
    years_of_use,
  } = order;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyers_name = form.name.value;
    const buyers_email = form.email.value;
    const price = form.price.value;
    const phone_number = form.phone_number.value;
    const meeting_location = form.meeting_location.value;
    /*console.log(
      buyers_name,
      buyers_email,
      price,
      phone_number,
      meeting_location
    );*/

    const booking = {
      product_id: _id,
      buyers_name,
      buyers_email,
      buyers_phone_number: phone_number,
      meeting_location,
    };

    // TODO : send datav to the server and once data is saved display toast

    console.log(booking);
    setOrder(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{model_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-5"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full "
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input w-full "
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              value={`Official Price : ${original_price} || Sale Price : Negotiable`}
              disabled
              className="input w-full "
            />
            <input
              name="phone_number"
              type="text"
              placeholder="Phone Number"
              className="input w-full "
            />
            <input
              name="meeting_location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full "
            />

            <br />
            <input className=" btn w-full " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

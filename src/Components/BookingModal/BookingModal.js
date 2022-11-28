import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ order, setOrder }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { _id, model_name, original_price, resale_price, productPhotoUrl } =
    order;

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
      model_name,
      productPhotoUrl,
      original_price,
      resale_price,
      buyers_name,
      buyers_email,
      buyers_phone_number: phone_number,
      meeting_location,
    };
    fetch("https://ipix-server.vercel.app/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(null);
        toast.success("Booking Confirmed");
      });

    console.log(booking);
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
            className="grid grid-cols-1 gap-3 mt-5 rounded-sm"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full rounded-sm "
              value={user.displayName}
              disabled
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input w-full rounded-sm "
              value={user.email}
              disabled
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              value={`Official Price : ${original_price} || Sale Price : ${resale_price}`}
              disabled
              className="input w-full rounded-sm "
            />
            <input
              name="phone_number"
              type="text"
              placeholder="Phone Number"
              className="input w-full rounded-sm "
            />
            <input
              name="meeting_location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full rounded-sm "
            />

            <br />
            <input
              className=" btn w-full rounded-sm "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

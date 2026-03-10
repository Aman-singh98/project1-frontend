// import { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";

// function DeliveryForm({ show, onClose, onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     onSubmit(formData);
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//       style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
//     >
//       <Card style={{ width: "420px" }}>
//         <Card.Body>

//           <h5 className="mb-3">Delivery Details</h5>

//           <Form.Control
//             className="mb-2"
//             placeholder="Full Name"
//             name="name"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-2"
//             placeholder="Phone"
//             name="phone"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-2"
//             placeholder="Email"
//             name="email"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-2"
//             placeholder="Address"
//             name="address"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-2"
//             placeholder="City"
//             name="city"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-2"
//             placeholder="State"
//             name="state"
//             onChange={handleChange}
//           />

//           <Form.Control
//             className="mb-3"
//             placeholder="Pincode"
//             name="pincode"
//             onChange={handleChange}
//           />

//           <Button
//             variant="warning"
//             className="w-100"
//             onClick={handleSubmit}
//           >
//             Proceed to Payment
//           </Button>

//           <Button
//             variant="secondary"
//             className="w-100 mt-2"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>

//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default DeliveryForm;

import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function DeliveryForm({ show, onClose, onSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

  };

  const validateForm = () => {

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Invalid pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = () => {

    if (!validateForm()) return;

    onSubmit(formData);

  };

  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
      style={{ background: "rgba(0,0,0,0.6)", zIndex: 9999 }}
    >

      <Card className="shadow-lg w-100" style={{ maxWidth: "450px" }}>

        <Card.Body>

          <h5 className="mb-3 text-center fw-bold">
            Delivery Details
          </h5>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.name}</small>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.phone}</small>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.email}</small>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.address}</small>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.city}</small>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.state}</small>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.pincode}</small>
          </Form.Group>

          <Button
            variant="warning"
            className="w-100 fw-semibold"
            onClick={handleSubmit}
          >
            Proceed to Payment
          </Button>

          <Button
            variant="outline-secondary"
            className="w-100 mt-2"
            onClick={onClose}
          >
            Cancel
          </Button>

        </Card.Body>
      </Card>
    </div>
  );

}

export default DeliveryForm;

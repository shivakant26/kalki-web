import React, { useState } from "react";
import "./ContactUs.css";
import SectionHeading from "../../components/common/SectionHeading";
import { FaLocationDot , FaPhone  } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
    serviceInquiry: false,
    consentSMS: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact-page">
      <div className="center-wr">
        <SectionHeading secTitle="Contact Us" />
        <div className="contact-us">
          <div className="column column-text">
            <h1>
              Start Conversation With
              <br /> Kalki Group
            </h1>
            <p>
              You can count on us for professional, timely and reliable
              accounting & tax services. If you’re ready to get started, just
              fill out this form and we’ll be in touch.
            </p>
            <div className="address">
                <div className="address-group">
                    <span><FaLocationDot /></span>
                    <p>1234 Street Name
                <br />
                City, State, ZIP Code</p>
                </div>
                <div className="address-group">
                    <span><FaPhone /></span>
                    <p>(123) 456-7890</p>
                </div>
                <div className="address-group">
                    <span><IoMdMail /></span>
                    <p>info@example.com</p>
                </div>
            </div>
          </div>
          <div className="column column-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactNo"
                placeholder="Contact No"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="checkbox-group">
                <div className="terms">
                  <span className="span-chek">
                    <input
                      type="checkbox"
                      name="serviceInquiry"
                      checked={formData.serviceInquiry}
                      onChange={handleChange}
                      required
                    />
                  </span>
                  <span>
                    I confirm this is a service inquiry and not an advertising
                    message or solicitation. By clicking “Submit”, I acknowledge
                    and agree to the creation of an account and to the
                    <a href=""> Terms of Service</a> and
                    <a href=""> Privacy Policy.</a>
                  </span>
                </div>
                <div className="terms">
                  <span className="span-chek">
                    <input
                      type="checkbox"
                      name="consentSMS"
                      checked={formData.consentSMS}
                      onChange={handleChange}
                      required
                    />
                  </span>
                  <span>
                    I consent to receive SMS messages and agree with the
                    <a  href="#"> Terms of Service.</a>
                  </span>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

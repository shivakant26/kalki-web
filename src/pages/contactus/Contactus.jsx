import React, { useState } from "react";
import "./ContactUs.css";
import SectionHeading from "../../components/common/SectionHeading";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [formData , setFormData] = useState({
    consentSMS: "",
    serviceInquiry :""
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
                <span>
                  <FaLocationDot />
                </span>
                <p>
                  1234 Street Name
                  <br />
                  City, State, ZIP Code
                </p>
              </div>
              <div className="address-group">
                <span>
                  <FaPhone />
                </span>
                <p>(123) 456-7890</p>
              </div>
              <div className="address-group">
                <span>
                  <IoMdMail />
                </span>
                <p>info@kalki.com</p>
              </div>
            </div>
          </div>
          <div className="column column-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-field w-50">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.firstName?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
                <div className="form-field w-50">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.lastName?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="error">Required*</p>
                )}
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="contactNo"
                  placeholder="Contact No"
                  {...register("contactNo", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.contactNo?.type === "required" && (
                  <p className="error">Required*</p>
                )}
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Message"
                  {...register("message", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                ></textarea>
                {errors?.message?.type === "required" && (
                  <p className="errors">Required*</p>
                )}
              </div>
              <div className="checkbox-group">
                <div className="terms">
                  <span className="span-chek">
                    <input
                      type="checkbox"
                      name="serviceInquiry"
                      checked={formData.serviceInquiry}
                      onChange={handleChange}
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
                    />
                  </span>
                  <span>
                    I consent to receive SMS messages and agree with the
                    <a href="#"> Terms of Service.</a>
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

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <article id="contact">
        <div class="form_card1">
          <div class="form_card2">
            <form class="form">
              <p class="form_heading">Contact Us</p>

              <div class="form_field">
                <input
                  required=""
                  placeholder="Name"
                  class="input_field"
                  type="text"
                />
              </div>

              <div class="form_field">
                <input
                  required=""
                  placeholder="Email"
                  class="input_field"
                  type="email"
                />
              </div>

              <div class="form_field">
                <input
                  required=""
                  placeholder="Subject"
                  class="input_field"
                  type="text"
                />
              </div>

              <div class="form_field">
                <textarea
                  required=""
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  class="input_field"
                ></textarea>
              </div>
              <button type="submit" class="sendMessage_btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contact;

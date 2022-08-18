import emailjs from 'emailjs-com';
import React from 'react';

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3hx0sjp', e.target, 'user_QN2PPY2dAPqcgUhnD4kAw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

const SendEmail = () => {
    return (
        <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>docmeet@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9624902493</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" class="btn btn-success">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    )
}

export default SendEmail
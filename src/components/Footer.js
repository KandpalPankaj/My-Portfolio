import React, { Component } from "react";
import "./Footer.scss";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-bytesize/location';
import telephoneIcon from '@iconify/icons-bytesize/telephone';
import gmailIcon from '@iconify/icons-mdi/gmail';

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span className="so">
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
          </span>
        );
      });
    }

    return (
      <footer id="contact">
        <div className="col-md-12">
          <div>
            <div className="overlay-mf"></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="contact-mf">
                    <div className="box-shadow-full">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="title-box-2">
                            <h5 className="title-left">Send A Message</h5>
                            <div className="underline"></div>
                          </div>
                          <div>
                            <form
                              action="https://formspree.io/xdoeonlo"
                              method="POST"
                              className="contactForm"
                            >
                              {/* <div id="sendmessage">
                                Your message has been sent. Thank you!
                              </div> */}
                              {/* <div id="errormessage"></div> */}
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      name="name"
                                      // className="form-control"
                                      id="name"
                                      placeholder="Your Name"
                                      data-rule="minlen:4"
                                      data-msg="Please enter at least 4 chars"
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      // className="form-control"
                                      name="email"
                                      id="email"
                                      placeholder="Your Email"
                                      data-rule="email"
                                      data-msg="Please enter a valid email"
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      // className="form-control"
                                      name="subject"
                                      id="subject"
                                      placeholder="Subject"
                                      data-rule="minlen:4"
                                      data-msg="Please enter at least 8 chars of subject"
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <textarea
                                      // className="form-control"
                                      id="message"
                                      name="message"
                                      rows="5"
                                      data-rule="required"
                                      data-msg="Please write something for us"
                                      placeholder="Message"
                                    ></textarea>
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <button
                                    type="submit"
                                    className="button button-a button-big button-rouded"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">Get in Touch</h5>
                            <div className="underline"></div>
                          </div>
                          <div className="more-info">
                            <p id="lead" >
                              Whether you want to get in touch, talk about a
                              project collaboration, or just say hi, I'd love to
                              hear from you.
                              <br />
                              Simply fill the from and send me an email.
                            </p>
                            <div className="social-links">{networks}</div>
                            <div className="address">
                              
                                <div><Icon icon={locationIcon} />53 Jogyura Thal Pithoragarh, Uttarakhand, 262652</div>
                                <div><Icon icon={telephoneIcon}/> +91-8393991084</div>
                                <div><Icon icon={gmailIcon} /> pkandpal28@gmail.com</div>
                                </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy;{" "}
              {this.props.sharedBasicInfo
                ? this.props.sharedBasicInfo.name
                : "???"}
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

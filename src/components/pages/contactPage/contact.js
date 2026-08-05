import React, { useState } from "react";
import "./contact.css";
import { TailSpin } from "react-loader-spinner";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import PageHero from "../../PageHero.js";
import { Stagger, Reveal } from "../../motion/Reveal.js";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61561200076591&mibextid=JRoKGi",
    icon: <FaFacebookF />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aidworks-foundation/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aidworksfoundation/",
    icon: <FaInstagram />,
  },
];

function Contact() {
  const [emailReceipt, setEmailReceipt] = useState(false);

  function reload() {
    window.location.reload();
  }

  function emailReceiptChange() {
    setEmailReceipt(!emailReceipt);
  }

  /* Marks a field as invalid and focuses it. */
  function flagError(field, errorId) {
    document.getElementById(errorId).hidden = false;
    field.focus();
    field.classList.add("field--invalid");
  }

  function clearError(field, errorId) {
    document.getElementById(errorId).hidden = true;
    field.classList.remove("field--invalid");
  }

  async function onclickSubmit(e) {
    e.preventDefault();

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var category = document.getElementById("category");
    var desc = document.getElementById("desc");

    if (firstName.value === "") {
      flagError(firstName, "firstNameErr");
      return;
    }
    clearError(firstName, "firstNameErr");

    if (lastName.value === "") {
      flagError(lastName, "lastNameErr");
      return;
    }
    clearError(lastName, "lastNameErr");

    if (email.value === "") {
      flagError(email, "emailErr");
      return;
    }
    clearError(email, "emailErr");

    if (category.value === "0") {
      flagError(category, "categoryErr");
      return;
    }
    clearError(category, "categoryErr");

    if (desc.value === "") {
      flagError(desc, "descErr");
      return;
    }
    clearError(desc, "descErr");

    // textContent, not innerHTML — this value comes straight from the user.
    document.getElementById("nameConf").textContent = firstName.value;
    document.getElementById("loader").hidden = false;
    setTimeout(function () {
      document.getElementById("loader").hidden = true;
      document.getElementById("thanksBox").hidden = false;
      document.getElementById("formParent").hidden = true;
    }, 2000);

    try {
      await fetch(
        "https://fancy-butterfly-7762.officialaidworksfoundation.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            category: category.value,
            desc: desc.value,
            emailReceipt: emailReceipt,
          }),
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="contactPage">
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        accent="Us"
        lead="Have any questions? We'd love to hear from you!"
      />

      <div id="loader" className="loader" hidden={true}>
        <TailSpin color="#2C66EE" />
      </div>

      <section className="aw-section contact">
        <div className="aw-container">
          <div id="formParent" hidden={false}>
            <Stagger className="contact__grid" gap={0.1}>
              <div className="contact__aside">
                <Reveal as="h2" className="aw-display aw-h2 contact__heading">
                  We'd love to <em>hear from you</em>
                </Reveal>

                <Reveal>
                  <p className="contact__type">
                    <TypeAnimation
                      sequence={[
                        "Partnership Information?",
                        3000,
                        "Volunteer Opportunities?",
                        3000,
                        "Website Malfunction?",
                        3000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </p>
                </Reveal>

                <Reveal>
                  <p className="aw-lead contact__asideText">
                    Fill out the form and a member of the AidWorks Foundation
                    team will get back to you. You can also find us on social.
                  </p>
                </Reveal>

                <Reveal className="contact__socials">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      className="contact__social"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </Reveal>
              </div>

              <Reveal scale className="aw-card contact__card">
                <form id="contactForm" onSubmit={(e) => onclickSubmit(e)}>
                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="firstName" className="contact__label">
                        First Name
                      </label>
                      <input id="firstName" className="contact__input" />
                      <label id="firstNameErr" className="contact__err" hidden={true}>
                        First Name Required
                      </label>
                    </div>

                    <div className="contact__field">
                      <label htmlFor="lastName" className="contact__label">
                        Last Name
                      </label>
                      <input id="lastName" className="contact__input" />
                      <label id="lastNameErr" className="contact__err" hidden={true}>
                        Last Name Required
                      </label>
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">
                      Your Email
                    </label>
                    <input id="email" className="contact__input" />
                    <label id="emailErr" className="contact__err" hidden={true}>
                      Email Required
                    </label>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="category" className="contact__label">
                      What can we help you with?
                    </label>
                    <select id="category" className="contact__input contact__select">
                      <option value="0">- Select -</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership Information">
                        Partnership Information
                      </option>
                      <option value="Website Malfunction/Feedback">
                        Website Malfunction/Feedback
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    <label id="categoryErr" className="contact__err" hidden={true}>
                      Please select an option
                    </label>
                  </div>

                  <div className="contact__field">
                    <textarea
                      id="desc"
                      className="contact__input contact__textarea"
                      rows={5}
                      maxLength="300"
                      placeholder="Type here. . ."
                    ></textarea>
                    <label id="descErr" className="contact__err" hidden={true}>
                      Description Required
                    </label>
                  </div>

                  <label className="contact__check">
                    <input
                      type="checkbox"
                      checked={emailReceipt}
                      value={emailReceipt}
                      onChange={emailReceiptChange}
                    />
                    <span>Email me my receipt</span>
                  </label>

                  <button
                    type="submit"
                    onClick={onclickSubmit}
                    className="aw-btn aw-btn--primary aw-btn--lg contact__submit"
                  >
                    Submit
                  </button>
                </form>
              </Reveal>
            </Stagger>
          </div>

          <div id="thanksBox" className="aw-card contact__thanks" hidden={true}>
            <div className="contact__thanksTitle">Contact Form</div>
            <div className="contact__thanksText">
              Thank you{" "}
              <b>
                <span id="nameConf"></span>
              </b>{" "}
              for filling out our form! Your input is valuable and will help us
              serve you better!
            </div>

            <div className="contact__thanksActions">
              <button
                className="aw-btn aw-btn--primary"
                onClick={reload}
                type="button"
              >
                Submit Another Form
              </button>
              <a className="aw-btn aw-btn--ghost" href="/">
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

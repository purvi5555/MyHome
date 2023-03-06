import React from "react";
import image1 from "../images/donate_gif2.gif";
export default function Donate() {
  return (
    <div className="padmob">
      <h1 className="mb-5" style={{ textAlign: "center" }}>
        Make your donation today!!
      </h1>
      <div class="login-page my-3">
        <div class="avatar my-2 ">
          {/*<img src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png" alt="Avatar"/>*/}
          <img src={image1} alt="Avatar" />
        </div>
        <div class="formdonate">
          <form>
            <div className="my-2">
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="my-2">
              <input
                type="text"
                class="form-control form-control-lg"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="col-sm-10">
              <div class="form-check">
                <label class="form-check-label mx-3">
                  <input
                    class="form-check-input radio-inline "
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  Give Once
                </label>
                <label class="form-check-label mx-3">
                  <input
                    class="form-check-input radio-inline"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  Give Monthly
                </label>
              </div>
            </div>
          </form>
          <div class="mb-3">
            <div className="my-5">
              <input
                type="text"
                class="form-control form-control-lg"
                id="enterAmount"
                placeholder="Enter the amount"
              />
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary">
            Donate
          </button>
        </div>
      </div>
      <div className="container">
      <h1 style={{ textAlign: "center" }}>Other ways to donate !!</h1>
      <div class="row my-5">
        <div class="col mx-2">
          <div>
          <i  class="fa-solid fa-building-columns fa-7x "></i>
          </div>
          <h3 className="my-2 ">Bank Transfer</h3>
          <p>
            Transfer to the following account:
            <br />
            Account Name: My Home
            <br />
            Bank: Natwest | Sort Code: 56 00 09 Account number: 3176 3847
          </p>
        </div>
        <div class="col mx-2">
          <i class="fa-solid fa-phone-volume fa-7x"></i>
          <h3 className="my-2">Donate by Phone</h3>
          <p>
            Call our donation line on 0207 100 8866 and one of our team will be
            happy to assist with your donation.
          </p>
        </div>
        <div class="col">
          <i class="fa-solid fa-credit-card fa-7x"></i>
          <h3 className="my-2">Direct Debits</h3>
          <p>
            Download and complete the Direct Debit form and and post to: My Home, Orphan House, 10 Manchester Road, Indore
          </p>
        </div>
        <div class="col">
          <i class="fa-solid fa-money-check-dollar fa-7x"></i>
          <h3 className="my-2">Donate By Cheque</h3>
          <p>
            Please make cheques payable to: My Home and post to: My Home, Orphan House, 10 Manchester Road, Indore
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

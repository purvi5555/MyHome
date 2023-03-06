import React from "react";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import about1 from "../images/about1.png";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.webp";

export default function About() {
  return (
    <div>
      <div className="container padmob">
        <h1 className="my-5" style={{ textAlign: "center" }}>
          {" "}
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptate, esse natus sed velit distinctio quaerat cum laborum sequi
          vitae at necessitatibus vel saepe veniam itaque odit perferendis
          nostrum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores minus exercitationem dolorum eum velit nulla, esse itaque
          dolore mollitia adipisci illo modi, quidem laudantium quam in
          similique assumenda veritatis iure, voluptates voluptas. Nisi, magnam
          deleniti sequi perspiciatis alias quibusdam velit necessitatibus! In
          cumque dolor nesciunt facere voluptas modi aliquam atque.
        </p>
        <h1 className="pt-5" style={{ textAlign: "center" }}>
          {" "}
          Our History
        </h1>
        <h5 className="pb-3" style={{ textAlign: "center" }}>
          {" "}
          Where we came from........
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptate, esse natus sed velit distinctio quaerat cum laborum sequi
          vitae at necessitatibus vel saepe veniam itaque odit perferendis
          nostrum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores minus exercitationem dolorum eum velit nulla, esse itaque
          dolore mollitia adipisci illo modi, quidem laudantium quam in
          similique assumenda veritatis iure, voluptates voluptas. Nisi, magnam
          deleniti sequi perspiciatis alias quibusdam velit necessitatibus! In
          cumque dolor nesciunt facere voluptas modi aliquam atque.
        </p>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src={about1} className="card-img-top" alt="..."  width="400" height="250" />
    </div>
    <div class="col">
    <img src={about2} className="card-img-top" alt="..."  width="400" height="250" />
    </div>
    <div class="col">
    <img src={about3} className="card-img-top" alt="..."  width="400" height="250"/>
    </div>
  </div>
</div>

        <h1 className="my-5" style={{ textAlign: "center" }}>
          Meet Our Team
        </h1>

        {/*<div className="row my-3">
          <div className="card mx-3 " style={{ width: "22rem" }}>
            <img src={team1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card mx-3" style={{ width: "22rem" }}>
            <img src={team2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Smith Shakspere</h5>
              <p className="card-text">Co Founder</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card mx-2" style={{ width: "22rem" }}>
            <img src={team3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
  </div>*/}
  <div className="rowcardabout">
        <div className="card mx-2 leftm my-5" style={{ width: "22rem" }}>
          <img src={team1} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
          </div>
        </div>
        <div className="card mx-2 leftm my-5" style={{ width: "22rem" }}>
          <img src={team2} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">Smith Shakspere</h5>
              <p className="card-text">Co Founder</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
          </div>
        </div>
        <div className="card mx-2 leftm my-5" style={{ width: "22rem" }}>
          <img src={team3} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

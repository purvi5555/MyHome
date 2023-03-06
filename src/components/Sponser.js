import React from "react";
import { Link } from "react-router-dom";
import child1 from "../images/child1.jpg";
import child2 from "../images/child2.jpg";
import child3 from "../images/child3.jpg";
import child4 from "../images/child4.jpg";
import child5 from "../images/child5.jpg";
import child6 from "../images/child6.webp";
import child7 from "../images/child7.jpg";
import child8 from "../images/child8.jpg";
import child9 from "../images/child9.webp";
import SponserMenu from "./SponserMenu";

export default function Sponser() {
  return (
    <div>
      <div className="container padmob">
        <h1 className="mt-3" style={{ textAlign: "center" }}>
          {" "}
          Sponser an Orphan
        </h1>
        <h5 className="pb-3" style={{ textAlign: "center" }}>
          Together, We Can Make a Change....{" "}
        </h5>
        <p className="my-5">
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
      </div>
      {/*1st row*/}
      <div className="rowcard">
        <div className="card mx-4 leftm my-5" style={{ width: "23rem" }}>
          <img src={child7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Aayush Pal</h5>
            <p style={{ fontSize: "15px" }}>
              <i class="fa-solid fa-mars-stroke-up icon-cog"></i> Male
            </p>
            <p className="card-text pt-2">
              This boy from India is called Aayush Pal and he is 17 years old.
              When his father, Late Mr Arun, died on Wednesday 20th June 2012,
              Aayush was just 6 years old. His father died Cancer. Aayush is now
              being looked after by his Mother. The only support they have is
              Handouts.
            </p>
            <p
              style={{
                color: "red",
                fontFamily: "museo-sans",
                fontSize: "18px",
              }}
            >
              Orphan ID : 10001
            </p>
            <a href="#" className="btn btn-primary">
              Sponser
            </a>
          </div>
        </div>
        <div className="card mx-4 leftm my-5" style={{ width: "23rem" }}>
          <img src={child8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Majeb Harab</h5>
            <p style={{ fontSize: "15px" }}>
              <i class="fa-solid fa-mars-stroke-up icon-cog"></i> Male
            </p>
            <p className="card-text pt-2">
              This little boy from Palestine is called Majed Harab and he is 10
              years old. When his father, Hussam Khalil Harab, died on Sunday
              24th June 2007, Majed was just 4 years old. His father died War.
              Majed is now being looked after by his Mother. The only support
              they have is Handouts.
            </p>
            <p
              style={{
                color: "red",
                fontFamily: "museo-sans",
                fontSize: "18px",
              }}
            >
              Orphan ID : 10005
            </p>
            <a href="#" className="btn btn-primary">
              Sponser
            </a>
          </div>
        </div>
        <div className="card mx-4 leftm my-5" style={{ width: "23rem" }}>
          <img src={child9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sarah Chatterjee</h5>
            <p className="card-text pt-2">
              This girl from India is called Sarah Chatterjee and she is 18
              years old. When her father, Aman Chatterjee, died on Tuesday 29th
              November 2011, Sarah Chatterjee was just 8 years old. Her father
              died Illness. Rani Chatterjee is now being looked after by her
              Mother. The only support they have is Handouts.
            </p>
            <p
              style={{
                color: "red",
                fontFamily: "museo-sans",
                fontSize: "18px",
              }}
            >
              Orphan ID : 10002
            </p>
            <a href="#" className="btn btn-primary">
              Sponser
            </a>
          </div>
        </div>
      </div>
      {/*2nd row*/}
      {/*   <div className="rowcard">
        <div className="card mx-4 my-3 leftm " style={{width: "23rem"}}>
            <img src={child4} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Rupa Bania</h5>
              <p><i class="fa-solid fa-venus icon-cog"></i> Female</p>
              <p className="card-text pt-2">This girl from India is called Rupa Bania and she is 15 years old. When her father, Murlilaal Bania, died on Friday 17th June 2005, Rupa was just 4 years old. Her father died Accident. Rupa is now being looked after by her Mother. The only support they have is Handouts.
</p>
<p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10003</p>
              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
          <div className="card mx-4 my-3" style={{width: "23rem" }}>
            <img src={child5} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Jilsana Khatoon</h5>
              <p><i class="fa-solid fa-venus icon-cog"></i> Female</p>
              <p className="card-text pt-2">This young lady from India is called Jilsana Khatoon and she is 16 years old. When her father, Suleman, died on Monday 18th April 2011, Jilsana was just 4 years old. Her father died Natural. Jilsana is now being looked after by her Mother. The only support they have is Handouts.
</p>
<p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10004</p>
              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
          <div className="card mx-4 my-3" style={{width: "23rem"}}>
            <img src={child6} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Fiza Hilal</h5>
              <p><i class="fa-solid fa-venus icon-cog"></i> Female</p>
              <p className="card-text pt-2">This little girl from Jammu & Kashmir India is called Fiza Hilal and she is 12 years old. When her father, Hilal Ahmad, died on Monday 26th April 2010, Fiza was just born. Her father died Missing. Fiza is now being looked after by her Mother. The only support they have is Handouts.
</p>
<p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10006</p>
              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
  </div>*/}
      {/*3rd row*/}
      {/*<div className="rowcard">
        <div className="card mx-4 leftm my-5" style={{width: "23rem"}}>
            <img src={child1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Kajal Kumari Yadav</h5>
              <p><i class="fa-solid fa-venus icon-cog"></i> Female</p>
              <p className="card-text pt-2">This little girl from Nepal is called Kajal Kumari Yadav and she is 8 years old. When her father, Dinesh Kumar Yadav, died on Thursday 23rd August 2018, Kajal Kumari was just 3 years old. Her father died Natural Causes. Kajal Kumari is now being looked after by her Mother. The only support they have is Handouts.
</p>
              <p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10007</p>

              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
          <div className="card mx-4 my-5" style={{width: "23rem" }}>
            <img src={child2} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Aaryan Kumar</h5>
              <p style={{fontSize:'15px'}}><i class="fa-solid fa-mars-stroke-up icon-cog"></i> Male</p>
              <p className="card-text pt-2">This little boy from India is called Aaryan Kumar and he is 19 years old. When his father, Late Jakiulla, died on Tuesday 10th March 2020, Adnan was just 5 years old. His father died Heart attack. Aaryan is now being looked after by his Mother. The only support they have is Handouts.</p>
              <p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10007</p>

              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
          <div className="card mx-4 my-5" style={{width: "23rem"}}>
            <img src={child3} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Raju Bansal </h5>
              <p style={{fontSize:'15px'}}><i class="fa-solid fa-mars-stroke-up icon-cog"></i> Male</p>
              <p className="card-text pt-2">This little boy from India is called  and he is 8 years old. When his father, Aaditya Bansal, died on Sunday 6th June 2010, Abdul was just 2 years old. His father died Natural Death. Raju is now being looked after by his Mother. The only support they have is Handouts.
</p>
              <p style={{color:'red', fontFamily:'museo-sans',fontSize:'18px'}}>Orphan ID : 10007</p>

              <a href="#" className="btn btn-primary">Sponser</a>
            </div>
          </div>
     </div>
*/}
      <div className="float-right my-3" style={{ marginLeft: "1150px" }}>
        <Link className="nav-link " to="/moreSponser">
          <button type="button" class="btn btn-primary btn-lg float-right">
            More.....
          </button>
        </Link>
      </div>
    </div>
  );
}

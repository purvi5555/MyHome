import React from "react";
import volunteer1 from "../images/volunteer1.jpg";
import volunteer2 from "../images/volunteer2.jpg";
import volunteer3 from "../images/volunteer3.jpg";
export default function Volunteering() {
  return (
    <div>
      <div>
        <div class="container my-3 padmob ">
          <div class="row">
            <div class="col">
              <h1 className="my-3">Get Involved</h1>
              <p style={{ fontSize: "18px" }}>
                More and more these days people are looking for ways to
                volunteer in India, there is something about this country that
                has an appeal for those who are wanting to do good in the world.
                <br />
                <br />
                There is a huge multitude of ways that visitors and volunteers
                can help out here on our orphanage. Occasionally things go so
                well that volunteers end up returning time and time again… some
                even end up joining us on staff.
                <br />
                <br />
                We prefer to individually work out somewhat of a timetable for
                each visitor that fits in with our children’s home duties,
                school and tuition timetables.
                <br />
                <br />
              </p>
            </div>
            <div className="col leftm mt-5 imgBox">
              <img
                id="image-section"
                className="rounded "
                src={volunteer1}
                alt="..."
                width="380"
                height="280"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container my-3">
        <div class="row">
          <div className="col mx-2 mt-5 ">
            <img
              className="rounded "
              src={volunteer2}
              alt="..."
              width="380"
              height="280"
            />
          </div>
          <div class="col">
            <h1 className="my-3">Volunteer Work</h1>
            <p style={{ fontSize: "18px" }}>
              Generally we like to find out from a volunteer what area of ‘work’
              might interest them the most. That said, we are not always able to
              provide the exact job that a volunteer might want to do. We want
              your time with us to be productive, beneficial and enjoyable for
              everyone. Volunteer work can be things like:
              <ul className="my-3">
                <li>Reading to children / Library management</li>
                <li>Helping out on the farm/workshop</li>
                <li>Painting & construction</li>
                <li>Gardening & landscaping</li>
                <li>Running activities/games</li>
                <li>Cooking or cleaning</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="container my-3">
          <div class="row">
            <div class="col">
              <h1 className="my-3">Special Projects</h1>
              <p style={{ fontSize: "18px" }}>
                From time to time visitors want to run or assist in special
                projects. Some volunteers even choose to fund raise for specific
                projects before coming out to the Mission. It is very important
                that these projects be discussed with/approved by a member of
                our Board first. Unfortunately we are not always able to
                implement projects the way that you might suggest; we will
                always try to communicate the reasoning for this to you as best
                as possible; we ask for your understanding in this.
                <br />
                <br />
                The complexities of the law, systems on the Mission and our
                community can make some suggestions difficult to implement.
                Please know that we keep the well-being of our children and the
                Mission as our first priority.
              </p>
            </div>
            <div className="col  mt-5 leftm">
              <img
                className="rounded"
                src={volunteer3}
                alt="..."
                width="380"
                height="280"
              />
            </div>
          </div>
        </div>
      </div>

      <form className="formvol my-5" action="takeaction.php" method="post">
        <h1>Apply for Volunteer !!!</h1>

        <fieldset>
          <legend>
            <span class="number">1</span>Enter Your Details
          </legend>
          <div className="form row ">
            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="first_name" />
            </div>
            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
              <label for="lastName">Last Name:</label>
              <input type="text" id="lastName" name="last_name" />
            </div>
          </div>
          {/* */}
          <label for="universityname">Address:</label>
              <input type="text" id="address" name="address" />
          <div className="form row ">
            <div className="form-group col-lg-4 col-md-12 col-sm-12 col-12">
              <label for="cityname">City:</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="form-group col-lg-5 col-md-12 col-sm-12 col-12">
            <label for="cityname">State:</label>
              <input type="text" id="state" name="state" />
            </div>
            <div className="form-group col-lg-3 col-md-12 col-sm-12 col-12">
            <label for="cityname">Zip:</label>
              <input type="text" id="zip" name="zip" />
            </div>

          </div>
          {/* */}
          <div className="form row ">
            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
              <label for="mail">Email:</label>
              <input type="email" id="mail" name="email" />
            </div>

            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
              <label for="contactnumber">Contact No:</label>
              <input type="text" id="contactno" name="user_number" />
            </div>
          </div>
          <label for="vol">
            Why you want to be Volunteer:
          </label>
          <textarea id="vol" name="vol"></textarea>
        </fieldset>


        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

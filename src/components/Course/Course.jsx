import Btn from "../Btn/Btn";
import "./Course.css";
import CourseOne from "../../assets/course-one.png";
import CourseTwo from "../../assets/course-two.png";
import CourseThree from "../../assets/course-three.png";
import CourseFour from "../../assets/course-four.png";
import CourseFive from "../../assets/course-five.png";
import CourseSix from "../../assets/course-six.png";

const Course = () => {
  return (
    <div className="course">
      <div className="course-wrapper container">
        <h3 className="course-title">Biz orgatadigan kurslar</h3>
        <div className="course-list">
          <div className="course-item_one">
            <ul className="course-item_list">
              <li className="course-item_item item-one">
                <img className="item-one_img" src={CourseOne} alt="" />
                <div className="course-item_item-content">
                  <p>Dasturlash</p>
                  <Btn />
                </div>
              </li>
              <li className="course-item_item item-two">
                <img className="item-two_img" src={CourseTwo} alt="" />
                <div className="course-item_item-content">
                  <p>Dasturlash</p>
                  <Btn />
                </div>
              </li>
              <li className="course-item_item item-three">
                <img className="item-three_img" src={CourseThree} alt="" />
                <div className="course-item_item-content">
                  <p>Dasturlash</p>
                  <Btn />
                </div>
              </li>
              <li className="course-item_item item-four">
                <img className="item-four_img" src={CourseFour} alt="" />
                <div className="course-item_item-content">
                  <p>Dasturlash</p>
                  <Btn />
                </div>
              </li>
            </ul>
          </div>
          <div className="course-item_two">
            <ul>
              <li className="course-item_item item-five">
                <img className="item-five_img" src={CourseFive} alt="" />
                <div className="course-item_item-content item-conten_five">
                  <p>Dasturlash</p>
                  <Btn />
                </div>
              </li>
              <li>
                <img src={CourseSix} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

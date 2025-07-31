import Aside from './viewComponents/Aside.jsx';
import TechStack from './viewComponents/TechStack.jsx';
import TraineeDetails from './viewComponents/TraineeDetails.jsx';
import CourseViewDetailHeader from './viewComponents/CourseViewDetailHeader.jsx';
import './CourseView.css';

function CourseView2() {
    const navigate = useNavigate(); // ✅ Define navigate

    const handleRegisterClick = () => {
        navigate("/Register"); // 
    };
    return (
        <div className="maincontainer">
            <div className="course-header">
                <div className="course-title">
                    <span>Course</span><span>s</span>
                </div>
                <div className="back-link">
                    <div className="chevron">
                        <img src="/assets/chevron_backward.png" alt="chevron_backward" />
                    </div>
                    <div className="back-text">
                        <p>Back</p>
                    </div>
                </div>
            </div>

            <div className="course-content">
                <div className="course-details">
                    <CourseViewDetailHeader
                        title="Digital Marketing"
                        price="₹6000.00"
                        category="Marketing"
                    />


                    <div className="course-hero">
                        <div className="course-image">
                            <img src="../src/assets/python.png" alt="Course Visual" />
                        </div>
                    </div>

                    <div>
                        <div className="description-title">
                            <p>Description :</p>
                        </div>
                        <div className="description-text">
                            <p>
                                A Python Full Stack course equips learners with the skills needed to
                                develop both front-end and back-end components of web applications using
                                Python and related technologiesdevelop both front-end and back-end components of web applications using
                                Python and related technologies.
                            </p>
                        </div>
                    </div>

                    <TechStack />
                    <TraineeDetails />

                    <div className="course-meta">
                        <div className="meta-item">
                            <div className="meta-label"><p>Category</p></div>
                            <div className="meta-value"><p>Fullstack Development</p></div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-label"><p>Timing Duration</p></div>
                            <div className="meta-value"><p>3 Months</p></div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-label"><p>Cost</p></div>
                            <div className="meta-value"><p>6000</p></div>
                        </div>
                        <div>
                            <div className="register-btn">
                                <div ><button onClick={handleRegisterClick}>Register Now  &rarr;</button>
                             
                                    <img src="/assets/arrow_forward.png" alt="arrow forward" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <Aside />
            </div>
        </div>
    );
}

export default CourseView2;

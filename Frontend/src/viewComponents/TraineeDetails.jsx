import "../CourseView.css"; // ✅ Correct path



function TraineeDetails() {
    return (
        <>
            {/* TRAINEE DETAILS */}
            <div className="trainee-details">
                <div className="trainee-image">
                    <img src="../src/assets/face.png" alt="face" />
                </div>
                <div>
                    <div className="trainee-info-name">
                        <p>John Doe</p>
                    </div>
                    <div className="trainee-info-exp">
                        <p>2+ Years Experience in software Development</p>
                    </div>
                </div>
            </div>
            <div className="trainee-description">
                <p>
                    The trainer is a dedicated software development professional with over two
                    years of industry experience. They have actively contributed to real-world
                    projects, showcasing proficiency in programming languages such as
                    JavaScript and Python, along with frameworks like React. With a strong
                    grasp of web development, application design, and agile methodologies,
                    they bring both technical expertise and practical knowledge to their
                    training sessions. Read more...
                </p>
            </div>
            {/* END OF TRAINEE DETAILS */}
        </>
    );
}

export default TraineeDetails;

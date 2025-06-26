import '../CourseView.css'

function CourseViewDetailHeader({ title, price,category }) {
    return (
        <div>
            {/* COURSE TITLE AND PRICE */}
            <div className="course-title-price">
                <div className="course-title-text">
                    <p>{title}</p>
                </div>
                <div className="course-price">
                 <p>{price}</p>
                </div>
            </div>
            {/* END OF COURSE TITLE AND PRICE */}
            {/* COURSE RATINGS */}
            <div className="course-ratings">
                <div className="rating-value">
                    <p>4.5</p>
                </div>
                <div className="stars">
                    <div className="star">
                       <img
                                    src="../src/assets/star_filled_full.png"
                                    alt="star_filled_full"
                                />
                    </div>
                    <div className="star">
                        <img
                                    src="../src/assets/star_filled_full.png"
                                    alt="star_filled_full"
                                />
                    </div>
                    <div className="star">
                       <img
                                    src="../src/assets/star_filled_full.png"
                                    alt="star_filled_full"
                                />
                    </div>
                    <div className="star">
                       <img
                                    src="../src/assets/star_filled_full.png"
                                    alt="star_filled_full"
                                />
                    </div>
                    <div className="star">
                        <img
                                    src="../src/assets/star_filled_full.png"
                                    alt="star_filled_full"
                                />
                    </div>
                </div>
                <div className="rating-count">
                    <p>(1,235)</p>
                </div>
            </div>
            {/* END OF COURSE RATINGS */}
            {/* LOCATION AND TIME */}
            <div className="location-time">
                <div className="location">
                    <p>Banglore</p>
                </div>
                <div className="category">
                    <div className="category-icon">
                        <img src="../src/assets/stacks.png" alt="stacks" />
                    </div>
                    <div>
                         <p>{category}</p>
                    </div>
                </div>
                <div className="duration">
                    <div className="timer-icon">
                        <img src="../src/assets/timer.png" alt="timer" />
                    </div>
                    <div>
                        <p>3 Months</p>
                    </div>
                </div>
            </div>
            {/* END OF LOCATION AND TIME */}
        </div>

    );
}
export default CourseViewDetailHeader;
import "../Css/Reviews.css";
import GraphIcon from "../assets/icons/graph.png";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      icon: GraphIcon,
      comment:
        "'EverStream Solution transformed our yard into a beautiful outdoor space. Their landscaping team was professional and attentive to our needs. Highly recommended'",
      name: "Sarah Oleymi",
      job: "Homeowner",
    },
    {
      id: 2,
      icon: GraphIcon,
      comment:
        "'We've been using thier carpet cleaning services for our office building, and the results are always outstanding. Clean, fresh, and done efficiently everytime'",
      name: "Michael Eruja",
      job: "Gay Enthusiast",
    },
    {
      id: 3,
      icon: GraphIcon,
      comment:
        "'Their photography services have helped sell properties faster. The quality of images truly showcase each property's best features.'",
      name: "Precious Owo",
      job: "Tech bro",
    },
  ];
  return (
    <>
      <div className="review-page">
        <header className="review-headline">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </header>

        <div className="review-cards-layout">
          {reviews.map((review) => (
            <article key={review.id} className="review-card-container">
              <div className="rate-icon">
                <img src={review.icon} alt="icon"></img>
              </div>
              <blockquote className="review-comment">
                {review.comment}
              </blockquote>
              <div className="reviewer-info">
                <h2 className="reviewer-name">{review.name}</h2>
                <p className="reviewer-job">{review.job}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;

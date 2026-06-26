import "./Reviews.css";
import { FaCommentDots, FaStar, FaUserCircle } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Reviews() {
  return (
    <section className="reviews">

      <div className="reviews-left">

        <div className="comment-icon">
          <FaCommentDots />
        </div>

        <h2>COMENTARIOS</h2>

        <p>(120 reseñas)</p>

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <button>
          Escribir un comentario
        </button>

      </div>

      <div className="reviews-right">

        <button className="review-arrow left">
          <FiChevronLeft />
        </button>

        <div className="reviews-list">

          <div className="review-card">

            <div className="review-header">

              <div className="user">
                <FaUserCircle />
                <span>Romeo Santos</span>
              </div>

              <small>hace 1 semana</small>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              Excelente producto! Me re gustó la calidad,
              volvería a comprar.
            </p>

          </div>

          <div className="review-card">

            <div className="review-header">

              <div className="user">
                <FaUserCircle />
                <span>Romeo Santos</span>
              </div>

              <small>hace 1 semana</small>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              Excelente producto! Me re gustó la calidad,
              volvería a comprar.
            </p>

          </div>

          <div className="review-card">

            <div className="review-header">

              <div className="user">
                <FaUserCircle />
                <span>Romeo Santos</span>
              </div>

              <small>hace 1 semana</small>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              Excelente producto! Me re gustó la calidad,
              volvería a comprar.
            </p>

          </div>

        </div>

        <button className="review-arrow right">
          <FiChevronRight />
        </button>

      </div>

    </section>
  );
}

export default Reviews;
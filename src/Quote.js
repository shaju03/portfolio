import "./Quote.css";
import "boxicons";

function Quote() {
  return (
    <div className="quote">
      <div className="inner-box">
        <div className="copy-quote">
          <h3>
            "GOOD ARTISTS <span>COPY</span>, GREAT <span>ARTISTS</span> STEAL."
          </h3>
          <p>-Pablo Picasso</p>
        </div>
        <p className="life-quote">
          When you wake up every day, you have two choices. You can either be
          positive or negative;an optimist or a pessimist. I choose to be an
          optimist. It's all a matter of perspective.
        </p>
      </div>
    </div>
  );
}

export default Quote;

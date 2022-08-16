import React from "react";
import "../../styles/footer.css";
import {
  FaBeer,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function () {
  return (
    <div className="footer">
      <div className="feet">
        <div className="headFoot">
          <h2>A propos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim
            mollitia dolores consectetur deserunt assumenda. Sint expedita in
            excepturi cumque dolore, vel sapiente eligendi quisquam illo ex
            quam, consectetur dolorum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id, quia repellat. Sed aliquid, autem dolorum
            dolorem nulla ratione similique consectetur ea reiciendis atque
            accusamus repellendus quis? Tenetur repellat architecto cum! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut aut
            quidem provident ratione, quas necessitatibus. Provident optio
            aspernatur deleniti perspiciatis voluptatibus obcaecati consequatur
            similique praesentium officiis? Similique, itaque unde.
          </p>
        </div>
        <div className="Foot">
          <h2>Suivez-Nous</h2>
        </div>
        <div>
          <FaFacebookF className="icone" />
          <FaYoutube className="icone" />
          <FaTwitter className="icone" />
          <FaLinkedinIn className="icone" />
        </div>
      </div>
    </div>
  );
}

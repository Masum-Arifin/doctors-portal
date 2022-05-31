import React from "react";
import baby from "../../assets/images/treatment.png";

const Baby = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={baby} class="w-96 rounded-lg shadow-2xl" />
        <div class="mx-24">
          <h1 class="text-5xl font-bold mx-">
            Exceptional Dental Care, <br /> on Your Terms
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Baby;

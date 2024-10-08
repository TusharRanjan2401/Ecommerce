import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/policy.jpg"
            alt="contact"
            style={{ width: "100%", padding: "80px" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">Add policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

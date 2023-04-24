import React from "react";
import styles from "@/styles/Pricing.module.css";
function Pricing() {
  const tiers = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99/month",
      features: [
        "10 GB of storage",
        "Unlimited projects",
        "Source code access",
        "Basic support",
      ],
    },
    {
      id: 2,
      name: "Pro",
      price: "$19.99/month",
      features: [
        "50 GB of storage",
        "Unlimited projects",
        "Source code access",
        "Priority support",
        "API access",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$29.99/month",
      features: [
        "100 GB of storage",
        "Unlimited projects",
        "Source code access",
        "Priority support",
        "API access",
        "Advanced analytics",
      ],
    },
  ];
  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {tiers.map((tier) => (
          <div key={tier.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
            <h3 className="text-4xl font-bold mb-8">{tier.price}</h3>
            <ul className="text-lg mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            {/* <div className="flex justify-center mt-auto">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Sign up
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

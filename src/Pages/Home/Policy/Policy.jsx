import { Truck, RefreshCcw, Headphones, Gift, CreditCard } from "lucide-react";
import './Policy.css';

const Policy = () => {
  const policy = [
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "FREE SHIPPING!",
      desc: "On Orders Over 3000 Taka.",
      bg: "bg-red-400",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-white" />,
      title: "EXCHANGE POLICY",
      desc: "Fast & Hassle Free",
      bg: "bg-green-400",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: "ONLINE SUPPORT",
      desc: "24/7 Everyday",
      bg: "bg-purple-400",
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "REWARD POINTS",
      desc: "Earn 1% Cashback",
      bg: "bg-yellow-400",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "PAYMENT METHOD",
      desc: "Credit Card, bKash & PayPal",
      bg: "bg-blue-400",
    },
  ];

  return (
   <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 mt-">
  {policy.map((item, index) => (
    <div
      key={index}
      className="card flex flex-row items-center gap-3 border p-4 rounded-lg cursor-pointer"
    >
      <div className={`icon-box relative p-3 rounded-md ${item.bg}`}>
        {item.icon}
      </div>
      <div className="card-content">
        <h4 className="font-semibold text-gray-800">{item.title}</h4>
        <p className="text-sm text-gray-500">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default Policy;


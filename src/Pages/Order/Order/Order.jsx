

import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useProduct from "../../../hooks/useProduct";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OfferdOrderTab from "../OrderTab/OfferdOrderTab";

const Order = () => {
  const categorys = ["Offerd", "perfume", "face Cream", "shampoo"];
  const { category } = useParams();

  const initialIndex = categorys.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [product] = useProduct();

  const Offerd = product.filter((item) => item.category === "Offerd");
  const perfume = product.filter((item) => item.category === "perfume");
  const faceCream = product.filter((item) => item.category === "face Cream");
  const shampoo = product.filter((item) => item.category === "shampoo");

  return (
    <div>
      <Helmet>Order Product</Helmet>
      <Cover
        title="Order Product"
        img="https://static.vecteezy.com/system/resources/thumbnails/001/257/352/small/golden-podium-for-cosmetic-ads-collection-with-ribbon.jpg"
      ></Cover>
      <div className="mt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center mb-10 text-lg font-semibold flex justify-center gap-8 ">
            <Tab
              className="px-4 py-2 cursor-pointer focus:outline-none border-b-2 "
              selectedClassName="text-yellow-600 border-b-2 border-yellow-600"
            >
              Todays offer

            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer focus:outline-none border-b-2 "
              selectedClassName="text-yellow-600 border-b-2 border-yellow-600"
            >
              Perfume
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer focus:outline-none border-b-2 "
              selectedClassName="text-yellow-600 border-b-2 border-yellow-600"
            >
              Face Cream
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer focus:outline-none border-b-2 "
              selectedClassName="text-yellow-600 border-b-2 border-yellow-600"
            >
              Shampoo
            </Tab>
          </TabList>
          <TabPanel>
            <OfferdOrderTab items={Offerd}></OfferdOrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={perfume}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={faceCream}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={shampoo}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;

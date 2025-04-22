import React, { useEffect, useState } from "react";
import TabsNavigation from "./TabsNavigation";
import SlotsView from "./SlotsView";
import axios from "axios";

const ManagementMain = () => {
  const [allSlots, setAllSlots] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://mocki.io/v1/1e0ded6b-ba02-48c0-a636-ec92291f0b4a")
        .then((res) => res?.data)
        .then((res) => setAllSlots(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="p-3 bg-neutral-100 rounded">
      <h1 className="text-center text-xl font-semibold py-3">
        Slots/Events Management
      </h1>
      <div className="shadow-lg bg-white rounded sticky top-0 w-lg">
        <TabsNavigation />
      </div>
      <div className="">
        <SlotsView allSlots={allSlots} />
      </div>
    </div>
  );
};

export default ManagementMain;

import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TabsNavigation = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedTabMode, setSelectedTabMode] = useState(1);

  let tabs = [
    { id: 1, label: "Meetup" },
    { id: 2, label: "Events" },
  ];
  let tabsMode = [
    { id: 1, label: "Offline" },
    { id: 2, label: "Virtual" },
  ];

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab.id);
  };
  const handleSelectedModeTab = (tab) => {
    setSelectedTabMode(tab.id);
  };
  return (
    <>
      <div className="justify-center p-2 grid gap-4 ">
        <div className="border rounded-lg px-2 py-1 flex items-center gap-3 justify-center bg-gray-200">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <button
                className={`text-black border rounded-lg  py-1 px-8 hover:bg-slate-100 ${
                  selectedTab === tab.id ? "bg-white text-orange-800" : ""
                }`}
                onClick={() => handleSelectedTab(tab)}
              >
                {tab?.label}
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 ">
          <button className="  hover:text-white hover:bg-orange-800 hover:rounded-full">
            <KeyboardArrowLeftIcon />
          </button>
          <div>Apr 21 - Apr 27</div>
          <button className="hover:bg-slate-50 hover:text-orange-800 hover:border-orange-800 border rounded-lg px-1">
            Next Week
          </button>
          <button className=" flex justify-end hover:text-white hover:bg-orange-800 hover:rounded-full">
            <KeyboardArrowRightIcon />
          </button>{" "}
        </div>
        <div className="flex justify-around">
          {" "}
          {tabsMode.map((tab) => (
            <div key={tab.id}>
              <button
                className={`text-black border rounded-lg  py-1 px-8 hover:bg-slate-100 ${
                  selectedTabMode === tab.id ? "bg-white text-orange-800" : ""
                }`}
                onClick={() => handleSelectedModeTab(tab)}
              >
                {tab?.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabsNavigation;

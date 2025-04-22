import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const SlotsView = ({ allSlots }) => {
  return (
    <div className="p-3 ">
      <div>
        {" "}
        <span className=" px-2 m-1 bg-orange-800 border rounded"></span>Open
        Times
      </div>
      <div>
        {allSlots.length > 0 ? (
          allSlots?.map((slot) => (
            <>
              <div
                id={slot?.id}
                className="p-3 flex flex-col gap-3 py-3 my-3 bg-white shadow border rounded"
              >
                <div className="flex gap-20 gap-3 ">
                  <div className="flex gap-2 ">
                    <div className="">
                      <ApartmentIcon fontSize="small" sx={{ color: "gray" }} />
                      {slot?.name}
                    </div>
                    |
                    <div>
                      <LocationOnIcon fontSize="small" sx={{ color: "gray" }} />
                      {slot?.location}
                    </div>
                  </div>
                  <div className="md:flex gap-2 bg-gray-100 rounded-lg px-2">
                    <LocationOnIcon fontSize="small" sx={{ color: "gray" }} />
                    {slot?.distance}
                  </div>
                </div>
                <div className="flex gap-3 overflow-x-auto py-3 ">
                  {slot?.slots.map((timeSlot) => (
                    <div className=" border rounded-lg p-2 grid gap-3 hover:bg-slate-50 w-24">
                      <div className="text-nowrap">{timeSlot?.date}</div>
                      <div className=" justify-center grid ">
                        <div className="bg-[#F6D9A1]  rounded-lg py-0.5 px-2">
                          {timeSlot?.availableSlots}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="text-center">No Slots Avalaible for this week</div>
        )}
      </div>
    </div>
  );
};

export default SlotsView;

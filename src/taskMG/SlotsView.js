import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const SlotsView = ({ allSlots }) => {
  return (
    <div className="p-3">
      <div>
        <span className="px-2 m-1 bg-orange-800 border rounded"></span>
        Open Times
      </div>

      <div>
        {allSlots.length > 0 ? (
          allSlots.map((slot) => (
            <div
              key={slot?.id}
              className="p-3 flex flex-col gap-3 py-3 my-3 bg-white shadow border rounded"
            >
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-1">
                    <ApartmentIcon fontSize="small" sx={{ color: "gray" }} />
                    <span>{slot?.name}</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon fontSize="small" sx={{ color: "gray" }} />
                    <span>{slot?.location}</span>
                  </div>
                </div>

                <div className="md:flex items-center gap-2 bg-gray-100 rounded-lg px-2">
                  <LocationOnIcon fontSize="small" sx={{ color: "gray" }} />
                  {slot?.distance}
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto py-3">
                {slot?.slots.map((timeSlot, index) => {
                  const date = new Date(timeSlot?.date);
                  const weekday = date.toLocaleDateString("en-US", {
                    weekday: "short",
                  });
                  const monthDay = date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <div
                      key={`${slot?.id}-${index}`}
                      className="min-w-[96px] h-[96px] border rounded-lg p-2 flex flex-col justify-between items-center hover:bg-slate-50 text-center shrink-0"
                    >
                      <div className="font-medium">{weekday}</div>
                      <div className="text-sm text-gray-600">{monthDay}</div>
                      <div className="bg-[#F6D9A1] rounded-lg py-0.5 px-2">
                        {timeSlot?.availableSlots}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No Slots Available for this week
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotsView;

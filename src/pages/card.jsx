import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const card = () => {
  return (
    <div className="flex justify-end pr-28 h-fit my-8 relative">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mt-[-95px]">
        <div className="px-6 py-4">
          <div className=" text-sm">Course fees</div>
          <p className="text-gray-700 text-base mb-4">
            <span className="text-2xl font-bold">₹5,000 fees</span>
          </p>
          <div className="">
            <p className="text-bold">What's included:</p>
            <ul className="text-gray-700 text-base">
              <li className="flex items-center mb-2">
                <OndemandVideoIcon className="px-1" /> 5 on demand videos
              </li>
              <li className="flex items-center mb-2">
                <OndemandVideoIcon className="px-1" /> 2 livestream sessions
              </li>
              <li className="flex items-center mb-2">
                <ChatBubbleOutlineIcon className="px-1" /> Live Dsa session with
                Nityanad charan Das
              </li>
              <li className="flex items-center mb-2">
                <ChatBubbleOutlineIcon className="px-1" />
                An Active Whatsapp Community
              </li>
            </ul>
          </div>
          <button className="bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 px-4 mt-4 w-60 rounded-3xl items-center ml-10">
            Register Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;

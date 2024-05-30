import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts";
import { UploadIcon, AttachIcon } from "@/components/icons";
import { useState } from "react";

const rules = [
  {
    id: 1,
    title: "Be Specific",
    description: "Be specific with your question",
  },
  {
    id: 2,
    title: "Ask One Question At A Time",
    description:
      "Single question will help in get in-depth answers to your question.",
  },
  {
    id: 3,
    title: "Use Keywords",
    description: "Use of keywords will help find your desired topic quickly.",
  },
  {
    id: 4,
    title: "Provide Context",
    description: "Give context to your question for better understanding .",
  },
];

const NewChat = () => {
  const [boxVisible, setBoxVisible] = useState(true);

  const _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      alert("Submitted!");
      event.preventDefault();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] py-4 px-2 relative flex flex-col items-center">
        <header className="h-[40px] flex items-center p-4 absolute top-0 left-0 bg-neutral-800/80 backdrop-blur-lg w-full">
          <h1 className="font-light text-[16px] text-neutral-500">New Chat</h1>
        </header>
        <div className="chat-area flex flex-col h-[calc(100%-72px)] w-full max-w-[640px] mx-auto gap-4 pt-[40px] overflow-y-scroll px-2">
          {boxVisible && (
            <div className="box bg-[#1E1E1E] p-4 border-[1px] border-white/20 md:border-white rounded-xl">
              <div className="flex items-center justify-between gap-2">
                <div className="icon min-w-[24px]"></div>
                <h3 className="text-xl">{"Let’s get started"}</h3>
                <CrossIcon
                  onClick={() => setBoxVisible(false)}
                  className="max-w-[24px] cursor-pointer hover:opacity-70"
                />
              </div>
              <div className="rules space-y-10 md:px-10 py-6">
                {rules.map((rule) => (
                  <div key={rule.id} className="rule flex gap-4">
                    <h6 className="number min-w-[40px] h-[40px] border-white border-[1px] rounded-full flex items-center justify-center">
                      {rule.id}
                    </h6>
                    <div className="content space-y-1">
                      <h3 className="title text-lg">{rule.title}</h3>
                      <p className="description text-base opacity-70">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="chat-box h-[72px] bg-[#424857] rounded-xl w-full max-w-[640px] mx-auto">
          <form
            onSubmit={_onSubmit}
            className="h-full flex items-center p-4 gap-2"
          >
            <input
              className=" text-white bg-transparent outline-none flex-grow !h-[72px]"
              type="text"
              placeholder="Ask Qanoon-Bot..."
            />
            <Button
              size={"icon"}
              type="button"
              className="aspect-square text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white"
            >
              <AttachIcon className="w-[24px] h-[24px]" />
            </Button>
            <Button
              size={"icon"}
              type="submit"
              className="bg-second aspect-square text-white rounded-full bg-neutral-800 hover:bg-primary hover:text-white"
            >
              <UploadIcon className="w-[24px] h-[24px]" />
            </Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

const CrossIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793L2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default NewChat;

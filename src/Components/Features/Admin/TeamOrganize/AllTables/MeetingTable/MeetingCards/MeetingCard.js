import React from "react";

const MeetingCard = ({ meeting }) => {
    const { meetingWith, date, meetingLink, meetingTopic } = meeting;
    const result = new Date(date);
    const time = result.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    // console.log(`${a}:${b}`);
    // if (meeting) {
    //     console.log(meeting);
    // }
    return (
        <div>
            <div className="w-64 rounded-xl bg-white p-3 m-auto drop-shadow-md">
                <div className="flex justify-between text-green-400">
                    <p>{meetingWith}</p>
                    <img
                        className="w-7 rounded-full"
                        src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/298535184_3335161630078341_50621954687104169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbrNDCT5hJroVFCIuhc19Q_FvO6cAZXwn8W87pwBlfCd8T1GY39ygZgFI8DIrW2DZQMxx0uQWGtPyf8En960VD&_nc_ohc=ZhxwVKi7wKoAX8Ugq-q&_nc_oc=AQmGekLZM8RC22kDHjR1aHmiJChuiQM6nO3GCPv99DJHoCs7cbfEEK8OMowv8Fg6G7Q&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8qfV86JoLF6NP0gspH6Lz694Gyr7wy5ek_iR1KqBbZuw&oe=6300FAFE"
                        alt=""
                    />
                </div>
                <div className="my-3 text-gray-400">
                    <p className="text-sm my-1">Topic: {meetingTopic}</p>
                    <p className="flex items-center text-xs">
                        <span className="mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                        </span>
                        {time}
                    </p>
                </div>
                <div className="flex justify-end">
                    <a
                        href={meetingLink}
                        target="_blank"
                        className="relative rounded-md bg-green-400 hover:bg-green-300 px-2 text-white"
                        rel="noreferrer"
                    >
                        Join
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MeetingCard;

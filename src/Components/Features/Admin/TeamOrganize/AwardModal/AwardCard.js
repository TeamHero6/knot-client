import React from "react";

const AwardCard = ({ award }) => {
    console.log(award);
    return (
        <div className="bg-transparent border-l-4 border-orange-500 px-4 py-2 rounded-md shadow-xl">
            <div class="flex justify-between text-green-400">
                <div className="flex items-center">
                    <p className="text-gray-600 mr-2">Monir Hossain</p>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-exclamation-triangle text-amber-400 mr-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                        </svg>
                    </span>
                </div>
                <img
                    class="w-7 rounded-full"
                    src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/298535184_3335161630078341_50621954687104169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbrNDCT5hJroVFCIuhc19Q_FvO6cAZXwn8W87pwBlfCd8T1GY39ygZgFI8DIrW2DZQMxx0uQWGtPyf8En960VD&_nc_ohc=ZhxwVKi7wKoAX8Ugq-q&_nc_oc=AQmGekLZM8RC22kDHjR1aHmiJChuiQM6nO3GCPv99DJHoCs7cbfEEK8OMowv8Fg6G7Q&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8qfV86JoLF6NP0gspH6Lz694Gyr7wy5ek_iR1KqBbZuw&oe=6300FAFE"
                    alt=""
                />
            </div>
            <div className="mt-3">
                <p className="my-1 text-gray-500 font-semibold">
                    Congratulation! You are {award.awardTitle}
                </p>
                <p className="h-24 text-gray-400 overflow-auto">
                    {award.successMessage}
                </p>
            </div>
            <div>
                <p className="text-right text-xs text-gray-400">
                    {award.AwardDate}
                </p>
            </div>
        </div>
    );
};

export default AwardCard;

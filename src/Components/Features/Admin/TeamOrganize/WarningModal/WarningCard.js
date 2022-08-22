import React from "react";

const WarningCard = () => {
    return (
        <div className="bg-red-100 border-l-4 border-red-500 px-4 py-2 rounded-md">
            <div class="flex justify-between text-green-400">
                <div className="flex items-center">
                    <p className="text-gray-600">Monir Hossain</p>
                    <button className="bg-red-500 text-white text-[10px] py-1 px-2 rounded-xl ml-2">
                        Hight
                    </button>
                </div>
                <img
                    class="w-7 rounded-full"
                    src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/298535184_3335161630078341_50621954687104169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbrNDCT5hJroVFCIuhc19Q_FvO6cAZXwn8W87pwBlfCd8T1GY39ygZgFI8DIrW2DZQMxx0uQWGtPyf8En960VD&_nc_ohc=ZhxwVKi7wKoAX8Ugq-q&_nc_oc=AQmGekLZM8RC22kDHjR1aHmiJChuiQM6nO3GCPv99DJHoCs7cbfEEK8OMowv8Fg6G7Q&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8qfV86JoLF6NP0gspH6Lz694Gyr7wy5ek_iR1KqBbZuw&oe=6300FAFE"
                    alt=""
                />
            </div>
            <div className="mt-3">
                <p className="h-24 text-gray-400 overflow-auto">
                    Seems you are doing late consitently. Please be serious or
                    We will take action againt you any time.
                </p>
            </div>
            <div>
                <p className="text-right text-xs text-gray-400">
                    August 17, 2022
                </p>
            </div>
        </div>
    );
};

export default WarningCard;

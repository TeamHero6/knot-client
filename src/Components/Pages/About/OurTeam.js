import React from "react";
import PersonCard from "./PersonCard";

const OurTeam = () => {
    const teams = [
        {
            id: 1,
            name: "Abdullah Al Habib",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-1/273613283_2263347400470766_7396777399028024787_n.jpg?stp=c122.131.186.186a_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG_LXrxmuVq2ZdQ39VW-rOGs5KO5Pd_rE2zko7k93-sTZGuWhGh3fAyOJrCe9soIRn4OeCUSWTMeGhi1xxJrzPj&_nc_ohc=02vL2cerw5wAX_-akcW&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9eAufVA4X1yMAF8eeUkqYvrmRm-aY9m6KCcVwHJvpBTQ&oe=62E38EBC",
            fb: "https://www.facebook.com/habibdc2018/",
            email: "abdullahalhabib100@gmail.com",
        },
        {
            id: 2,
            name: "Monir Hossain Rabby",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/257249068_3124859467775226_6783626932182437554_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEWQa4WtatE5evB3WjuLULsdJQwt0vLeX50lDC3S8t5fgZrNP9z4rlzyKwFW5iDh7TSgDZYnaC8UHQBYqDwDvvz&_nc_ohc=KZy0Ms-wMyUAX_bUivi&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9PO0wVK2Vbkb9pNQYqsvIm8WoeC2pcyjEZUEJlOMxg_Q&oe=62E2C699",
            fb: "https://www.facebook.com/monirhabderabby/",
            email: "monirhrabby.personal@gmail.com",
        },
        {
            id: 1,
            name: "Abdullah Al Habib",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-1/273613283_2263347400470766_7396777399028024787_n.jpg?stp=c122.131.186.186a_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG_LXrxmuVq2ZdQ39VW-rOGs5KO5Pd_rE2zko7k93-sTZGuWhGh3fAyOJrCe9soIRn4OeCUSWTMeGhi1xxJrzPj&_nc_ohc=02vL2cerw5wAX_-akcW&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9eAufVA4X1yMAF8eeUkqYvrmRm-aY9m6KCcVwHJvpBTQ&oe=62E38EBC",
            fb: "https://www.facebook.com/habibdc2018/",
            email: "abdullahalhabib100@gmail.com",
        },
        {
            id: 2,
            name: "Monir Hossain Rabby",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/257249068_3124859467775226_6783626932182437554_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEWQa4WtatE5evB3WjuLULsdJQwt0vLeX50lDC3S8t5fgZrNP9z4rlzyKwFW5iDh7TSgDZYnaC8UHQBYqDwDvvz&_nc_ohc=KZy0Ms-wMyUAX_bUivi&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9PO0wVK2Vbkb9pNQYqsvIm8WoeC2pcyjEZUEJlOMxg_Q&oe=62E2C699",
            fb: "https://www.facebook.com/monirhabderabby/",
            email: "monirhrabby.personal@gmail.com",
        },
    ];
    return (
        <div>
            <div className="flex flex-col items-center mt-28">
                <h2 className="text-3xl md:text-5xl font-semibold">Our Team</h2>
                <div className="border-2 w-20 border-cyan-400 inline-block mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-4 px-2">
                {teams.map((person) => (
                    <PersonCard
                        key={person.id}
                        {...{
                            name: person.name,
                            img: person.img,
                            fb: person.fb,
                            email: person.email,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { storage } from "../../../../firebase.init";
import { updateName, updatePhoto } from "../../../../Redux/Auth/authAction";

const ProfileSettings = () => {
    const loggerInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // All states
    const [edit, setEdit] = useState(false);
    const [changes, setChanges] = useState(false);
    const [updatenamein, setUpdateNamein] = useState("");
    const [updatedEmail, setUpdatedEmail] = useState();
    const [userPhoto, setUserPhoto] = useState("");
    const [loadingForPhoto, setLoadingForPhoto] = useState(false);

    useEffect(() => {
        const { name, email, userPhoto } = loggerInfo.loggerInfo;
        setUpdateNamein(name);
        setUpdatedEmail(email);
        setUserPhoto(userPhoto);
    }, [loggerInfo]);

    // update profile photo
    const uploadProfilePhotoHandler = async (e) => {
        setLoadingForPhoto(true);
        const photo = e.target.files[0];
        const profilePhotoRef = ref(storage, `logos/${photo.name + v4()}`);
        await uploadBytes(profilePhotoRef, photo).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUserPhoto(url);
                if (url) {
                    // update photo in DB
                    const photoInfo = { email: updatedEmail, photoUrl: url };
                    fetch(
                        "https://knot-business-solution-server.herokuapp.com/updateProfilePhoto",
                        {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(photoInfo),
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                return;
                            }
                        });
                    // update profile photo to redux store
                    dispatch(updatePhoto(url));
                    setLoadingForPhoto(false);
                }
            });
        });
    };

    // update name
    const updateNameHandler = () => {
        const info = { email: updatedEmail, name: updatenamein };
        console.log(info);
        fetch(
            "https://knot-business-solution-server.herokuapp.com/updateName",
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    return;
                }
            });
        dispatch(updateName(updatenamein));
    };

    return (
        <div className="w-full drop-shadow-lg bg-white py-6">
            {/* Header */}
            <div className="flex justify-between px-6 md:px-12 mb-1">
                <h3 className="text-2xl font-semibold">My Profile</h3>
                <div className="flex items-center text-lg hover:text-black">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square text-gray-400 mr-1"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                        </svg>
                    </span>
                    <span
                        className="text-gray-400 cursor-pointer hover:text-gray-500"
                        onClick={() => setEdit(!edit)}
                    >
                        Edit
                    </span>
                </div>
            </div>
            <hr />
            {/* user profile */}
            <section className="my-6 px-6 md:flex">
                <div className="w-auto flex flex-col items-center flex-initial mr-0 md:mr-12">
                    {/*Profile Photo*/}
                    <img
                        src={userPhoto}
                        alt=""
                        className="w-[150px] h-[150px] rounded-full"
                    />
                    <div
                        className={`bg-cyan-400 px-3 py-2 rounded-2xl text-white mt-3 ${
                            edit ? "block" : "hidden"
                        }`}
                    >
                        <label htmlFor="profilePhoto">
                            {loadingForPhoto ? (
                                <>
                                    <span className="flex justify-between items-center text-xs">
                                        <Puff
                                            height="16"
                                            width="16"
                                            radius="9"
                                            color="white"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle
                                            wrapperClass
                                        />
                                        Uploading...
                                    </span>
                                </>
                            ) : (
                                <>Upload photo</>
                            )}
                        </label>
                        <input
                            type="file"
                            className="hidden"
                            id="profilePhoto"
                            onChange={uploadProfilePhotoHandler}
                        />
                    </div>
                </div>
                {/*Name field*/}
                <div className="w-full md:w-[60%] lg:w-[40%]">
                    <form onSubmit={updateNameHandler}>
                        {/* Name field */}
                        <div>
                            <label
                                className="block text-gray-400 text-sm font-bold my-2"
                                for="username"
                            >
                                Full name
                            </label>
                            <input
                                className={` ${
                                    edit ? "shadow border" : ""
                                } appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="username"
                                type="text"
                                value={updatenamein}
                                name="name"
                                placeholder={`${edit ? "Type your name" : ""}`}
                                onChange={(e) => {
                                    setChanges(true);
                                    setUpdateNamein(e.target.value);
                                }}
                                disabled={!edit}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-400 text-sm font-bold my-2"
                                for="email"
                            >
                                {edit ? (
                                    <>
                                        <span className="mr-1">
                                            Email Address
                                        </span>
                                        <span className="text-gray-400">
                                            (Email Address cannot be changed)
                                        </span>
                                    </>
                                ) : (
                                    "Email Address"
                                )}
                            </label>
                            <input
                                className={` ${
                                    edit ? "shadow border" : ""
                                } appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="email"
                                type="email"
                                value={updatedEmail}
                                disabled
                            />
                        </div>
                        <input
                            type="submit"
                            className={`${
                                changes
                                    ? "bg-cyan-400 text-white"
                                    : "bg-gray-300 text-white"
                            }  px-3 py-2 rounded-2xl shadow mt-3`}
                            value="Save changes"
                            disabled={!changes}
                            onClick={() => {
                                setEdit(false);
                                setChanges(false);
                                updateNameHandler(updateName);
                            }}
                        />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ProfileSettings;

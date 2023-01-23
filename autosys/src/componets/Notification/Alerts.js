import React from "react";
import toast from "react-hot-toast";
import {MdOutlineClose} from "react-icons/md";
import {BiMessageAltError} from "react-icons/bi";

const notify = async (status, description) =>
    toast.custom(
        (t) => (
            <div
                className="notificationWrapper">
                <div className="iconWrapper">
                    <BiMessageAltError/>
                </div>
                <div className="contentWrapper">
                    <h1>{status}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
                    <MdOutlineClose/>
                </div>
            </div>
        ),
        {id: "unique-notification", position: "top-center"}
    );

const Alert = async (status, description) => {
    return await (notify(status, description));
};

export default Alert;
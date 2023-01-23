import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import styles from "../../App.css";

const notify = () =>
    toast.custom(
        (t) => (
            <div
                className="notificationWrapper">
                <div className="iconWrapper">
                    <HiLightningBolt />
                </div>
                <div className="contentWrapper">
                    <h1>New version available</h1>
                    <p>
                        An improved version of VESSEL is now available, refresh to update.
                    </p>
                </div>
                <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
                    <MdOutlineClose />
                </div>
            </div>
        ),
        { id: "unique-notification", position: "top-center" }
    );

const Alert = () => {
    return (
        <div>
            <button onClick={notify}>Notify</button>
            <Toaster />
        </div>
    );
};

export default Alert;
import React from "react";
import { useState } from "react";
import { sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import useSession from '../../hooks/useSession'


export default function ChangeStatus(props) {
    const { authToken } = useSession();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (props.usStatus === 1) {
                sendGet(getServerPath('users/disable/' + props.usId), authToken);
            }
            if (props.usStatus === 0) {
                sendGet(getServerPath('users/enable/' + props.usId), authToken);
            }
            window.location.reload(false);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <button

                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                type="button"
                onClick={(handleSubmit)}
            >
                {props.usStatus === 1 ? 'Disable' : 'Enable'}
            </button>
        </>
    );
}
import React from "react";
import { sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import useSession from '../../hooks/useSession'


export default function ChangeStatus(props) {
    const { authToken } = useSession();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (props.usStatus === 1) {
                await sendGet(getServerPath('employees/changeStatus/' + props.empUuid), authToken);
            }
            if (props.usStatus === 0) {
                await sendGet(getServerPath('employees/changeStatus/' + props.empUuid), authToken);
            }
            window.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

                {props.usStatus === 1 ? <button
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    type="button"
                    onClick={(handleSubmit)}
                >
                    Disable
                </button> : <button
                    className="font-medium text-green-800 hover:underline"
                    type="button"
                    onClick={(handleSubmit)}
                >
                    Enable
                </button>}

        </>
    );
}
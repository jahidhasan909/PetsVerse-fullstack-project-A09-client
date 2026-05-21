"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";



const MyListingAlertDeletd = ({ ownpets }) => {




    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`https://pets-verse-fullstack-project-a09-se.vercel.app/ownpetslisting/${ownpets?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearar ${tokenData?.token}`
            }
        })
        const data = await res.json()
        if (data) {
            toast.error('pets Delete ! ')

            window.location.reload()
        }


    }


    return (
        <div>
            <AlertDialog>
                <Button className=" rounded-full w-full text-red-400 border-red-300" variant="outline" ><TrashBin></TrashBin> Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px] rounded-md">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Pets  permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Footer>
                                <Button className={''} slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} className={'rounded-full'} variant="danger">
                                    Delete Pets
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default MyListingAlertDeletd;
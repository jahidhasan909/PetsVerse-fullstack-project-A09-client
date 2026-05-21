"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";



const ListingAlter = ({ apotpets }) => {




    const handleDelete = async () => {
         const { data: tokenData } = await authClient.token()
        const res = await fetch(`http://localhost:8000/adopt/${apotpets?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearar ${tokenData?.token}`
            }
        })
        const data = await res.json()
        if (data) {
            toast.error('Adoption Delete ! ')
          
            window.location.reload()
        }


    }


    return (
        <div>
            <AlertDialog>
                <Button className="w-full sm:w-auto rounded-full text-red-400 border-red-400" variant="outline" ><TrashBin></TrashBin> Cancel</Button>
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
                                    Delete Adoption
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default ListingAlter;
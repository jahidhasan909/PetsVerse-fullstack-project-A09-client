"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";

export function RequestModal({ _id }) {




    const handleStatusUpdate = async (requestId, status) => {

        try {

            const res = await fetch(
                `http://localhost:8000/adopt/${requestId}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        status,
                        petsId: _id
                    })
                }
            );

            const data = await res.json();

            console.log(data);

            
            const updated = modalData.map((item) => {

                if (item._id === requestId) {
                    return {
                        ...item,
                        status
                    };
                }

                return item;
            });

            setModalData(updated);

        } catch (error) {
            console.log(error);
        }
    };







    const [modalData, setModalData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { data, isPending } = authClient.useSession();

    const fetchRequests = async () => {
        try {
            if (!_id) {
                console.log("missing");
                return;
            }

            setLoading(true);

            console.log("petsId:", _id);

            const res = await fetch(
                `http://localhost:8000/adopt/${_id}`
            );

            const data = await res.json();

            console.log("res:", data);

            setModalData(data || []);
        } catch (error) {
            console.error("Fetch error:",error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        fetchRequests(); 
    };

    if (isPending) {
        return (
            <h1 className="text-center py-4 font-semibold text-black">
                loading..
            </h1>
        );
    }

    return (
        <>
         
            <Button onPress={handleOpen} variant="secondary">
                Requests ({modalData.length})
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
            >
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">

                        
                            <Button
                                className="absolute right-2 top-2 min-w-0 p-1 bg-transparent text-neutral-400 hover:text-black"
                                onPress={() => setIsOpen(false)}
                            >
                                ✕
                            </Button>

                           
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Rocket className="size-5" />
                                </Modal.Icon>

                                <Modal.Heading>
                                    Adoption Requests
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body>
                                {loading ? (
                                    <p className="text-center text-sm">
                                        Loading requests...
                                    </p>
                                ) : modalData.length === 0 ? (
                                    <div className="text-center py-4">
                                        <p className="text-sm text-neutral-500">
                                            No requests for this pet
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">
                                        {modalData.map((req) => (
                                            <div
                                                key={req._id}
                                                className="p-3 border rounded-lg bg-neutral-50"
                                            >
                                                <p className="font-semibold text-black">
                                                    {req.userName}
                                                </p>
                                                <p className="text-xs text-neutral-600">
                                                    {req.userEmail}
                                                </p>






                                                <div className="flex gap-2 mt-3">

                                                    {req.status === "pending" && (
                                                        <>
                                                            <Button
                                                                color="success"
                                                                onPress={() =>
                                                                    handleStatusUpdate(req._id, "approved")
                                                                }
                                                            >
                                                                Approve
                                                            </Button>

                                                            <Button
                                                                color="danger"
                                                                onPress={() =>
                                                                    handleStatusUpdate(req._id, "rejected")
                                                                }
                                                            >
                                                                Reject
                                                            </Button>
                                                        </>
                                                    )}

                                                    {req.status === "approved" && (
                                                        <p className="text-green-500 font-semibold">
                                                            Approved
                                                        </p>
                                                    )}

                                                    {req.status === "rejected" && (
                                                        <p className="text-red-500 font-semibold">
                                                            Rejected
                                                        </p>
                                                    )}

                                                </div>














                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Modal.Body>

                            {/* FOOTER */}
                            <Modal.Footer>
                                <Button
                                    className="w-full bg-black text-white"
                                    onPress={() => setIsOpen(false)}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
}
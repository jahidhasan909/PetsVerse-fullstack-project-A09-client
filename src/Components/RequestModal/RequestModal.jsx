"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";

export function RequestModal({ _id }) {
    const [modalData, setModalData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { data, isPending } = authClient.useSession();

    const fetchRequests = async () => {
        try {
            if (!_id) {
                console.log("❌ petsId missing");
                return;
            }

            setLoading(true);

            console.log("🔥 Fetching for petsId:", _id);

            const res = await fetch(
                `http://localhost:8000/adopt/${_id}`
            );

            const data = await res.json();

            console.log("✅ API response:", data);

            setModalData(data || []);
        } catch (err) {
            console.error("❌ Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        fetchRequests(); // 🔥 fetch on open (BEST PRACTICE)
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
            {/* OPEN BUTTON */}
            <Button onPress={handleOpen} variant="secondary">
                Requests ({modalData.length})
            </Button>

            {/* MODAL */}
            <Modal
                isOpen={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
            >
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">

                            {/* CLOSE BUTTON */}
                            <Button
                                className="absolute right-2 top-2 min-w-0 p-1 bg-transparent text-neutral-400 hover:text-black"
                                onPress={() => setIsOpen(false)}
                            >
                                ✕
                            </Button>

                            {/* HEADER */}
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Rocket className="size-5" />
                                </Modal.Icon>

                                <Modal.Heading>
                                    Adoption Requests
                                </Modal.Heading>
                            </Modal.Header>

                            {/* BODY */}
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
                                                <Button>Approve</Button>
                                                <Button>Reject</Button>
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
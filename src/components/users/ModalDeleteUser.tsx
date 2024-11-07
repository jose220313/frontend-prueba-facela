import React, {useState} from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import useUserStore, {IUser} from "@/app/stores/user-store";

interface ModalAddUserProps {
    user?: IUser;
}

const ModalAddOrEditUser: React.FC<ModalAddUserProps> = ({user}) => {
    const {deleteUser} = useUserStore();
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'destructive'} className="ml-2">
                    <Trash/>
                </Button>

            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete user</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Are you sure you want to delete the user?
                </DialogDescription>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                    <Button variant="destructive" onClick={() => deleteUser(user?.id || 0)}>
                       <Trash /> Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ModalAddOrEditUser;
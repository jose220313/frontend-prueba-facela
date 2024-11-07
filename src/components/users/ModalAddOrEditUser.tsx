import React, {useEffect, useState} from 'react';
import InputMask from 'react-input-mask';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Edit, UserPlus} from "lucide-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import useUserStore, {IUser} from "@/app/stores/user-store";

interface ModalAddUserProps {
    user?: IUser;
}

const ModalAddOrEditUser: React.FC<ModalAddUserProps> = ({user}) => {
    const {addUser, updateUser} = useUserStore();
    const [open, setOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: user?.fullname || '',
            email: user?.email || '',
            phone: user?.phone || ''
        },
        validationSchema: Yup.object().shape({
            fullname: Yup.string().required('Fullname is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().required('Phone is required')
        }),
        onSubmit: async (values, {resetForm}) => {
            if (user) {
                await updateUser({...user, ...values});
            } else {
                await addUser(values);
            }
            resetForm();
            setOpen(false); // Close the modal after saving
        }
    });

    useEffect(() => {
        if (user && open) {
            formik.setValues({
                fullname: user.fullname,
                email: user.email,
                phone: user.phone
            });
        }
    }, [user, open]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className={user ? 'bg-[#232a31]' : 'bg-green-400'}>
                    {user ? <Edit/> : <UserPlus/>} {user ? '' : 'New'}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{user ? 'Edit User' : 'New User'}</DialogTitle>
                </DialogHeader>
                <div className="my-2">
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700">Fullname</label>
                        <input type="text" name="fullname" onChange={formik.handleChange}
                               placeholder="e.g. John Doe"
                               value={formik.values.fullname}
                               className="w-full border border-gray-300 rounded-md p-3"/>
                        {formik.errors.fullname && formik.touched.fullname &&
                            <div className="text-red-500 text-sm">{formik.errors.fullname}</div>}
                    </div>
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" name={"email"} onChange={formik.handleChange} value={formik.values.email}
                               placeholder="e.g. jonhdoe@example.com"
                               className="w-full border border-gray-300 rounded-md p-3"/>
                        {formik.errors.email && formik.touched.email &&
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>}
                    </div>
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <InputMask mask="9999-9999" name="phone" onChange={formik.handleChange}
                                   value={formik.values.phone}
                                   placeholder="e.g. 1234-5678"
                                   className="w-full border border-gray-300 rounded-md p-3"/>
                        {formik.errors.phone && formik.touched.phone &&
                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>}
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                    <Button className="bg-[#232a31]" onClick={() => formik.handleSubmit()}>
                        {user ? <Edit/> : <UserPlus/>} {user ? 'Edit User' : 'Add User'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ModalAddOrEditUser;
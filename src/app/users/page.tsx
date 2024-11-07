'use client';
import React from 'react';
import {NextPage} from "next";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Users} from "lucide-react";
import useUserStore from "@/app/stores/user-store";
import ModalAddOrEditUser from "@/components/users/ModalAddOrEditUser";
import ModalDeleteUser from "@/components/users/ModalDeleteUser";

const Page: NextPage = () => {
    const {getUsers, users, loading} = useUserStore();

    React.useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container mx-auto lg:px-24">
            <div className="container mx-auto py-16">
                <div className="px-4 md:p-0">
                    <h2 className="text-4xl font-semibold mb-2 text-[#333333]">Users</h2>
                    <p className="mb-4 text-[#70747A] text-2xl">Create, update and delete users</p>
                    <div className="flex justify-center md:justify-end mb-2">
                        {users && users.length > 0 && <ModalAddOrEditUser/>}
                    </div>
                </div>
                <div className="p-4 md:p-0">
                    {loading && (
                        <div className="flex justify-center items-center">
                            <span>Loading...</span>
                        </div>
                    )}
                    {!loading && users && users.length === 0 && (
                        <div className="flex gap-3">
                            <div>
                                <Users size={100} className="text-gray-500"/>
                            </div>
                            <div className="flex flex-col justify-center gap-3">
                                <span>No users found</span>
                                <ModalAddOrEditUser/>
                            </div>
                        </div>
                    )}
                    {!loading && users && users.length > 0 && (
                        <Table>
                            <TableHeader className="bg-[#232a31]">
                                <TableRow>
                                    <TableHead className="text-white">id</TableHead>
                                    <TableHead className="text-white">fullname</TableHead>
                                    <TableHead className="text-white hidden md:table-cell">email</TableHead>
                                    <TableHead className="text-white hidden md:table-cell">phone</TableHead>
                                    <TableHead className="text-white">actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.id}</TableCell>
                                        <TableCell>
                                            {user.fullname}
                                            {user.isNew && <span
                                                className="ml-2 bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">new</span>}
                                            {user.isUpdated && <span
                                                className="ml-2 bg-yellow-200 text-slate-900 text-xs font-semibold px-2.5 py-0.5 rounded">updated</span>}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                                        <TableCell className="hidden md:table-cell">{user.phone}</TableCell>
                                        <TableCell className="p-0">
                                            <ModalAddOrEditUser user={user}/>
                                            <ModalDeleteUser user={user}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
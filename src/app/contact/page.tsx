import React from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {NextPage} from "next";

const Page: NextPage = () => {
    return <div className="container mx-auto lg:px-24">
        <div className="container mx-auto py-24">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-2 text-[#333333]">Contact Us</h2>
                <p className="mb-12 text-[#70747A] text-2xl">Keep in touch with us. we are here to help you</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-20">
                <div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <h3 className="text-xl text-[#333333] font-semibold mb-2">Australia</h3>
                            <p className="text-sm text-gray-500 font-bold">Flat Host Pty Ltd</p>
                            <p className="text-[#70747A] text-sm">13/2 Elizabeth Street</p>
                            <p className="text-[#70747A] text-sm">Melbourne VIC 30007</p>
                            <p className="text-[#70747A] text-sm">Australia</p>
                            <p className="text-[#70747A] text-sm">P: +61 3 8376 6284</p>
                        </div>
                        <div>
                            <h3 className="text-xl text-[#333333] font-semibold mb-2">India</h3>
                            <p className="font-bold text-gray-500 text-sm">Flat Host Pty Ltd</p>
                            <p className="text-[#70747A] text-sm">MG Road</p>
                            <p className="text-[#70747A] text-sm">Pulleppady Jn</p>
                            <p className="text-[#70747A] text-sm">Kochi, India</p>
                            <p className="text-[#70747A] text-sm">P:+91 9 8376 6280</p>
                        </div>
                    </div>

                    <div className="relative w-full pb-[42%] h-0 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4598.781087278106!2d-89.27858112426951!3d13.663311999334775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632e5cba892bbd%3A0x883556a53e5ab057!2sINDUSTRIAS%20FACELA%2C%20S.A.%20DE%20C.V.!5e1!3m2!1ses!2ssv!4v1730873730903!5m2!1ses!2ssv"
                            className="absolute top-0 left-0 w-full h-full border-0" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div>
                    <div className="py-2">
                        <Input placeholder="Fullname"/>
                    </div>

                    <div className="py-2">
                        <Input placeholder="Email ID"/>
                    </div>

                    <div className="py-2">
                        <Input placeholder="Mobile Number"/>
                    </div>

                    <div className="py-2">
                        <Textarea placeholder="Your Message"/>
                    </div>

                    <div className="py-2">
                        <Button className="bg-green-400 p-8 w-full">Send Message</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
};

export default Page;
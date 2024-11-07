import React from 'react';
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-12 ">
            <div
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                <div>
                    <h3 className="font-light text-gray-500">CALL US</h3>
                    <p>+1 4528 254 247</p>
                    <p>+1 4002 188 355</p>
                </div>
                <div>
                    <h3 className="font-light font text-gray-500">FOLLOW US</h3>
                    <p>Follow on Twitter</p>
                    <p>Like us on Facebook</p>
                    <p>Join on Linkedin</p>
                </div>
                <div>
                    <h3 className="font-light text-gray-500">COMPANY</h3>
                    <p>About us</p>
                    <p>Latest from Blog</p>
                    <p>Our Team</p>
                </div>
                <div>
                    <h3 className="font-light text-gray-500">EMAIL US</h3>
                    <p>support@mail.com</p>
                    <p>sales@mail.com</p>
                </div>
                <div>
                    <h3 className="font-light text-gray-500">LEGAL TERMS</h3>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Live Chat</p>
                </div>
                <div>
                    <h3 className="font-light text-gray-500">LIVE CHAT</h3>
                    <Button className="bg-green-400 text-xs">CHAT NOW</Button>
                </div>
            </div>
            <p className="mt-8 text-center text-xs text-gray-500">Copyright © 2013. Flathost Inc.</p>
        </footer>
    );
}

export default Footer;
import React from 'react';

interface IFeature {
    icon: string;
    title: string;
    description: string;
}

const Features = () => {
    return (
        <div className="container mx-auto py-20 px-4 sm:px-12 lg:px-24 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                <div>
                    <img src="/images/secure_img.png" alt="Secure & Reliable" className="mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                    <p className="text-[#70747A] text-sm">Flathost servers are having high physical security and power
                        redundancy. Your data will be secure
                        with us.</p>
                </div>
                <div>
                    <img src="/images/fast_img.png" alt="Super Fast" className="mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Super Fast</h3>
                    <p className="text-[#70747A] text-sm">With our ultra modern servers and optical cables, your data
                        will be transferred to end user in
                        milliseconds.</p>
                </div>
                <div>
                    <img src="/images/support_img.png" alt="Customer Support" className="mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                    <p className="text-[#70747A] text-sm">We have a dedicated team of support for sales and support to
                        help you anytime. You can also chat
                        with us.</p>
                </div>
            </div>
            {MoreFeatures()}
        </div>
    );
}

const MoreFeatures = () => {
    const features: IFeature[] = [
        {
            icon: '/images/setup_icon.png',
            title: 'Instant Setup',
            description: 'As soon as you make a successful payment via PayPal or Google Checkout, your web hosting and domain names will be activated immediately. No waiting time whatsoever.'
        },
        {
            icon: '/images/backup_icon.png',
            title: 'Constant Backups',
            description: 'Your hosting account is backed up 4 times a day as standard, with our backup integration. We use dedicated backup servers, providing fast & easy individual file rollback abilities.'
        },
        {
            icon: '/images/git_icon.png',
            title: 'GIT/SVN Support',
            description: 'Web Developers love using version control systems. All of our hosting accounts can use GIT & SVN command line tools on our servers. Simply request SSH access to get started.'
        },
        {
            icon: '/images/script_icon.png',
            title: '280+ Install Scripts',
            description: 'All our hosting accounts allow you to install popular software such as Wordpress, Drupal, Joolma and Magento in one easy step. Upgrading your software is just as easy!'
        },
        {
            icon: '/images/cpanel_icon.png',
            title: 'cPanel Included',
            description: 'All hosting accounts come with the latest version of cPanel. This makes life easy for you to do routine tasks such as setting up email addresses and managing MySQL databases.'
        },
        {
            icon: '/images/php_icon.png',
            title: 'Latest PHP & MySQL',
            description: 'Our network runs the latest stable and secure versions of PHP & MySQL. We also implement strict security and firewall rules protecting your website from unwanted visitors 24/7.'
        }
    ];

    return (
        <div className="container mx-auto py-24">
            <h2 className="text-4xl font-semibold mb-2 text-[#333333]">More Features</h2>
            <p className="mb-12 text-[#70747A] text-2xl">You will get lot of features with flathost</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <img src={feature.icon} alt={feature.title} className="w-12 h-12 mr-4"/>
                        <div>
                            <h3 className="text-xl text-start font-semibold mb-2 text-[#333333]">{feature.title}</h3>
                            <p className="text-[#70747A] text-start text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
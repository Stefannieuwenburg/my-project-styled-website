import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size="2.5rem" color="#0f0f0f" />;

export const footerSocialData = [
    {
        name: "Facebook",
        icon: iconStyle(FaFacebook),
    },
    {
        name: "Instagram",
        icon: iconStyle(FaInstagram),
    },
    
    {
        name: "Twitter",
        icon: iconStyle(FaTwitter),
    },
    {
        name: "LinkedIn",
        icon: iconStyle(FaLinkedin),
    },
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];

import React from 'react';
import { IoIosOptions } from 'react-icons/io';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
   
    {
        id: 2,
        name: "Ease of Use",
        description: "Our system is easy to use and integrate",
        icon: iconStyle(IoIosOptions),
        
    },
    {
        id: 3,
        name: "Maintenance",
        description:
            "Our code is written in highest standards, which makes it highly sustainable",
        icon: iconStyle(GrHostMaintenance),
       
    },
    {
        id: 4,
        name: "24/7 Support",
        description: "Our team is available at all times in case you need us",
        icon: iconStyle(BiSupport),
        
    },
    {
        id: 5,
        name: "Price",
        description: "We offer the highest value/cost ratio",
        icon: iconStyle(BiDollar),
        
    },
    
];

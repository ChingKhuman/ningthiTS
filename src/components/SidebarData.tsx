import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Shop',
                path: '/dashboard/shop',
                icon: <AiOutlineUser />
            },
            {
                title: 'Supplier',
                path: '/dashboard/supplier',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Agents',
        path: '/agent',
        icon: <FaOpencart />
    },
 
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Report',
        path: '/report',
        icon: <FaOpencart />
    },
    {
        title: 'Order',
        path: '/order',
        icon: <FaOpencart />
    },
    {
        title: 'Brand',
        path: '/brand',
        icon: <FaCog />
    }
];
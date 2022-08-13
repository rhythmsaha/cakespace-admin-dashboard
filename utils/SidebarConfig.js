import { MdSpeed, MdCake } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { IoDocumentText } from 'react-icons/io5'
import { FaUserFriends } from 'react-icons/fa'

const sidebarConfig = [
  {
    id: 'menu1',
    type: 'General',
    menus: [{ id: 'link1', title: 'Dashboard', icon: MdSpeed, path: '/' }],
  },

  {
    id: 'menu2',
    type: 'Management',
    menus: [
      {
        id: 'link2',
        title: 'Categories',
        icon: BiCategory,
        path: '/categories',
      },
      { id: 'link3', title: 'Cakes', icon: MdCake, path: '/cakes' },
      {
        id: 'link4',
        title: 'Invoices',
        icon: IoDocumentText,
        path: '/invoices',
      },
      { id: 'link5', title: 'Users', icon: FaUserFriends, path: '/users' },
      { id: 'link6', title: 'Account', icon: AiOutlineUser, path: '/account' },
    ],
  },
]

export default sidebarConfig

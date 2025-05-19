import Link from "next/link"
import { CiBookmarkCheck, CiLogout } from "react-icons/ci"
import { GiElephantHead } from "react-icons/gi"
import { SidebarItem } from "./SidebarItem"
import { MdCategory } from "react-icons/md";
import { IoCalendarClearOutline, IoCheckboxOutline, IoListOutline } from 'react-icons/io5'


const sidebarItems = [
  {
    path: '/dashboard',
    title: 'Dashbard',
    icon: <IoCalendarClearOutline size={30} />
  },
  {
    path: '/dashboard/rest-todos',
    title: 'Rest TODOS',
    icon: <IoCheckboxOutline size={30} />
  },
  {
    path: '/categories',
    title: 'Server Actions',
    icon: <IoListOutline size={30} />
  }
]


export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4 flex flex-col items-center ">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="/" title="home" className="">
            {/* Next/Image */}
            <GiElephantHead size={100} className="text-sky-600 shadow-2xl" />


          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

          {sidebarItems.map(sidebarItem => (
            <SidebarItem {...sidebarItem} key={sidebarItem.title} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  )
}

/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../ui/Avatar'
import { useWindowSize } from 'react-use'
import useAuth from '../../hooks/useAuth'
import MobileSidebar from '../sidebar/MobileSidebar'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Header() {
  const [showNavBar, setShowNavBar] = useState(false)

  const { width } = useWindowSize()
  const { logout } = useAuth()

  const showNavBarHandler = () => {
    setShowNavBar(true)
  }

  const closeNavbarHandler = () => {
    setShowNavBar(false)
  }

  return (
    <>
      <AnimatePresence>
        {showNavBar && (
          <motion.div
            className="fixed left-0  right-0 top-0 bottom-0 z-50 bg-black bg-opacity-10 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileSidebar onClose={closeNavbarHandler} />
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-10 flex h-20 items-center justify-between bg-white bg-opacity-80 px-4 backdrop-blur-sm lg:px-8">
        <div className="flex gap-2">
          {width < 1200 && (
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 active:bg-gray-200"
              onClick={showNavBarHandler}
            >
              <AiOutlineMenu className="text-xl" />
            </button>
          )}
        </div>

        <div className="ml-auto flex items-center gap-4 px-2">
          <button>
            <Avatar
              size="10"
              avatarUrl="https://scontent.frdp4-1.fna.fbcdn.net/v/t1.6435-1/183710831_2965464620344936_3915218019543181030_n.jpg?stp=c750.932.777.777a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SoYPlP8pJVEAX9GFufv&_nc_ht=scontent.frdp4-1.fna&oh=00_AT-iXYnKZ5W5I4dnccw12LPJlg_QYfU_tLgi9z2xPvia2g&oe=631BEE13"
            />
          </button>
        </div>
      </header>
    </>
  )
}
export default Header

import { HomeIcon, SettingsIcon, BellIcon, ExitIcon } from '../Icons'
import MenuItem from './MenuItem'
import Logo from './Logo'
import useAuth from '../../data/hook/useAuth'
export default function SideMenu() {
  const { logout } = useAuth()
  return (
    <aside
      className="
      flex flex-col
      text-gray-700
      bg-gray-200
      dark:bg-gray-900"
    >
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notification" icon={BellIcon} />
      </ul>
      <ul>
        <MenuItem
          text="Exit"
          icon={ExitIcon}
          onClick={logout}
          className={`
            text-red-600
            dark:text-red-400
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}

import { HomeIcon, SettingsIcon, BellIcon } from "../Icons"
import MenuItem from "./MenuItem"
export default function SideMenu() {
    return (
      <aside>
        <ul>
          <MenuItem url="/" text="Home" icon={ HomeIcon }/>
          <MenuItem url="/settings" text="Settings" icon={ SettingsIcon }/>
          <MenuItem url="/notifications" text="Notification" icon={ BellIcon }/>
        </ul>
      </aside>
    )
  }
  
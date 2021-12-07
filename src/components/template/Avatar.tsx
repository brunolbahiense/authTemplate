import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarProps {
  className?: string
}

export default function Avatar(props: AvatarProps) {
  const { user } = useAuth()
  return (
    <Link href="/profile">
      <img
        src={user?.imgUrl ?? '/images/avatar.svg'}
        alt="User's Avatar"
        className={`"h-10 w-10 rounded-full cursor-pointer" ${props.className}`}
      />
    </Link>
  )
}

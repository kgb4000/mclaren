import { logout } from './actions'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <span className="font-heading text-lg font-bold text-gold">Admin</span>
        <form action={logout}>
          <button type="submit" className="text-sm text-white/70 hover:text-gold">
            Log out
          </button>
        </form>
      </header>
      {children}
    </div>
  )
}

import { login } from '../actions'

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams
  const hasError = params?.error === '1'

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 text-white">
      <h1 className="text-3xl font-bold">Admin Login</h1>
      {hasError && (
        <p className="mt-4 rounded border border-red-500/40 bg-red-500/10 px-4 py-2 text-red-300">
          Incorrect password.
        </p>
      )}
      <form action={login} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-white/70">Password</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            className="rounded border border-white/20 bg-black px-4 py-3 text-white outline-none focus:border-gold"
          />
        </label>
        <button
          type="submit"
          className="rounded bg-gold px-4 py-3 font-semibold uppercase text-black transition-colors hover:bg-gold-dark"
        >
          Log In
        </button>
      </form>
    </main>
  )
}

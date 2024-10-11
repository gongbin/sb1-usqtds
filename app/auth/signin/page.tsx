import SignIn from '@/components/Auth/SignIn'

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      <div className="max-w-md mx-auto">
        <SignIn />
      </div>
    </div>
  )
}
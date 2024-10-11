import SignUp from '@/components/Auth/SignUp'

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
      <div className="max-w-md mx-auto">
        <SignUp />
      </div>
    </div>
  )
}
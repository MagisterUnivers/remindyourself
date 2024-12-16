'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { registerUserAction } from "@/services/Firebase/actions"

interface Props {
  isLogin: boolean
}

interface FormData {
  email: string
  password: string
  fullName: string
}

export function AuthForm({ isLogin }: Props) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    fullName: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(!isLoading)
    try {
      // const res = await useSignInWithEmailAndPassword(formData.email, formData.password);
      // console.log({ res });
      // sessionStorage.setItem('user', true)
      // setEmail('');
      // setPassword('');
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    const result = await registerUserAction(formData.email, formData.password, formData.fullName)
    if (result.success) {
      alert('User has been created')
      setIsLoading(false)
    } else {
      alert('There is an error during the registration process')
      setIsLoading(false)
    }
  }

  return (
    <div className={"flex flex-col gap-6 fixed top-[50%] left-[50%] w-[50%] -translate-y-2/4 -translate-x-2/4"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{isLogin ? "Login" : "Register"}</CardTitle>
          <CardDescription>
            {`Enter your email and password below to ${isLogin ? "login" : "register"} to your account`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => isLogin ? handleSignIn(e) : handleSignUp(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => onChange(e)}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => onChange(e)}
                  required />
              </div>
              {!isLogin && (
                <div className="grid gap-2">
                  <Label htmlFor="email">FullName</Label>
                  <Input
                    id="fullName"
                    type="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => onChange(e)}
                    placeholder="John Doe"
                    required
                  />
                </div>
              )}
              <Button
                type="submit"
                className="w-full disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLogin ? "LOGIN" : "REGISTER"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

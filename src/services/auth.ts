import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "@/store/auth"
import { useRouter } from "next/navigation"
import type { LoginFormData } from "@/lib/schemas/auth"

interface LoginResponse {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

async function loginUser(data: LoginFormData): Promise<LoginResponse> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    credentials: "omit",
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export function useLogin() {
  const router = useRouter()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data)
      router.push("/counter")
    },
  })
}

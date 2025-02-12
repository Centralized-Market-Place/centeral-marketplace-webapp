"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, User } from "lucide-react"
import Link from "next/link"
import { useStore } from "@/store/store"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export function Header() {
  const { user, setUser } = useStore()
  const { setTheme, theme } = useTheme()

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16 ml-20">
        <Link href="/" className="font-bold text-xl">
          Marketplace
        </Link>

        <div className="flex items-center justify-end gap-16">

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-5 w-5" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <Button>Login</Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}


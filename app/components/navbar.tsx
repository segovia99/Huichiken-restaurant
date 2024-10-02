"use client"

// import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)


  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Menú", href: "/menu" },
    { name: "Ubicaciones", href: "/ubicaciones" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  ]

  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto max-w-[1216px] flex justify-between items-center">
        <div className="flex items-center">
          {/* Espacio para el logo */}
          <div className="w-16 h-16 rounded-full mr-4">
            {/* Reemplaza esto con tu logo */}
            {/* <span className="sr-only">Logo del Restaurante</span> */}
            <img src="/logo3.png" alt="Logo" width={100} height={100} />
          </div>
          <span className="text-2xl font-bold text-red-600">Huichiken</span>
        </div>

        {/* Enlaces de navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-red-600 hover:text-red-800 text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Botón de pedido */}
        <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Ordenar Ahora
        </Button>

        {/* Menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-1 text-lg text-red-600 hover:text-red-800"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ordenar Ahora
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
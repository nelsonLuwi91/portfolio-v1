import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileSectionProps {
  imageUrl: string
}

export function ProfileSection({ imageUrl }: ProfileSectionProps) {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm John Doe</h1>
            <p className="text-xl text-muted-foreground">Web Developer</p>
          </div>
          <div className="max-w-[600px] text-muted-foreground md:text-xl">
            <p>I build accessible, responsive, and performant web applications with modern technologies.</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#contact">
              <Button size="lg">Contact Me</Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="outline">
                View My Work
              </Button>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-border"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { ProfileSection } from "@/components/profile-section"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SkillCard } from "@/components/skill-card"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define projects with static image paths
const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "E-commerce platform built with WordPress, WooCommerce, & Elementor.",
    imageUrl: "/images/projects/project1.jpg", // Static path to image in public folder
    tags: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS.",
    imageUrl: "/images/projects/project2.jpg", // Static path to image in public folder
    tags: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality.",
    imageUrl: "/images/projects/project3.jpg", // Static path to image in public folder
    tags: ["React", "Redux", "Firebase"],
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data.",
    imageUrl: "/images/projects/project4.jpg", // Static path to image in public folder
    tags: ["JavaScript", "API Integration"],
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A full-stack blog platform with authentication and markdown support.",
    imageUrl: "/images/projects/project5.jpg", // Static path to image in public folder
    tags: ["Next.js", "PostgreSQL"],
  },
  {
    id: "6",
    title: "Real-time Chat App",
    description: "A real-time chat application with private and group messaging.",
    imageUrl: "/images/projects/project6.jpg", // Static path to image in public folder
    tags: ["React", "Socket.io", "Express"],
  },
]

export default function Portfolio() {
  // Profile image path (static)
  const profileImageUrl = "/images/profile/profile.jpg" // Static path to profile image

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ProfileSection imageUrl={profileImageUrl} />

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate web developer with 5+ years of experience building modern web applications. I specialize
              in JavaScript, React, and Node.js, and I'm always eager to learn new technologies.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My journey in web development started when I built my first website in college. Since then, I've worked
              with startups and established companies to create user-friendly and performant web applications.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new web
              technologies.
            </p>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Here are some of the technologies and tools I work with
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
              <SkillCard name="JavaScript" />
              <SkillCard name="TypeScript" />
              <SkillCard name="React" />
              <SkillCard name="Next.js" />
              <SkillCard name="Node.js" />
              <SkillCard name="Express" />
              <SkillCard name="MongoDB" />
              <SkillCard name="PostgreSQL" />
              <SkillCard name="HTML5" />
              <SkillCard name="CSS3" />
              <SkillCard name="Tailwind CSS" />
              <SkillCard name="Git" />
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[78rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Check out some of my recent work
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>

            <div className="w-full max-w-md">
              <ContactForm />
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-muted-foreground">Or reach me directly at:</p>
              <div className="flex gap-4">
                <Link
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@example.com</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
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
      </footer>
    </div>
  )
}

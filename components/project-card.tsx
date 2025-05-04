import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

export function ProjectCard({ title, description, imageUrl, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            View Details
          </Button>
          <Button variant="ghost" size="icon">
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Visit site</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

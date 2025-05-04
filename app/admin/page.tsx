import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FolderOpen, Info } from "lucide-react"

export default function AdminPage() {
  // Sample projects (same as in main page)
  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      imageUrl: "/images/projects/project1.jpg",
    },
    {
      id: "2",
      title: "Portfolio Website",
      imageUrl: "/images/projects/project2.jpg",
    },
    {
      id: "3",
      title: "Task Management App",
      imageUrl: "/images/projects/project3.jpg",
    },
    {
      id: "4",
      title: "Weather Dashboard",
      imageUrl: "/images/projects/project4.jpg",
    },
    {
      id: "5",
      title: "Blog Platform",
      imageUrl: "/images/projects/project5.jpg",
    },
    {
      id: "6",
      title: "Real-time Chat App",
      imageUrl: "/images/projects/project6.jpg",
    },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Portfolio Admin</h1>

      <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-md p-4 mb-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Static Image Management</h3>
            <p className="text-sm mt-1">
              This portfolio uses static images stored in the{" "}
              <code className="bg-amber-100 px-1 rounded">/public/images/</code> folder. To update images, replace the
              files directly in this folder.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile Image</TabsTrigger>
          <TabsTrigger value="projects">Project Images</TabsTrigger>
          <TabsTrigger value="help">Help</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Image</CardTitle>
              <CardDescription>
                Your profile image is stored at <code>/public/images/profile/profile.jpg</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-lg font-medium">How to update your profile image:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Prepare a square image (recommended: 400x400 pixels)</li>
                    <li>
                      Save it as <code className="bg-muted px-1 rounded">profile.jpg</code> (or update the path in the
                      code)
                    </li>
                    <li>
                      Place it in the <code className="bg-muted px-1 rounded">/public/images/profile/</code> folder
                    </li>
                    <li>Refresh your portfolio to see the changes</li>
                  </ol>

                  <div className="flex items-center gap-2 mt-4">
                    <FolderOpen className="h-4 w-4" />
                    <span className="text-sm font-medium">Path: /public/images/profile/profile.jpg</span>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <p className="text-sm text-muted-foreground mb-2">Current Profile Image:</p>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border border-border">
                    <Image
                      src="/images/profile/profile.jpg"
                      alt="Current profile"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Project Images</CardTitle>
              <CardDescription>
                Project images are stored in <code>/public/images/projects/</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">How to update project images:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Prepare images in 16:9 aspect ratio (recommended: 800x450 pixels)</li>
                    <li>
                      Name them according to the project (e.g.,{" "}
                      <code className="bg-muted px-1 rounded">project1.jpg</code>)
                    </li>
                    <li>
                      Place them in the <code className="bg-muted px-1 rounded">/public/images/projects/</code> folder
                    </li>
                    <li>
                      Update the image paths in <code className="bg-muted px-1 rounded">app/page.tsx</code> if needed
                    </li>
                  </ol>

                  <div className="flex items-center gap-2 mt-4">
                    <FolderOpen className="h-4 w-4" />
                    <span className="text-sm font-medium">Path: /public/images/projects/</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Current Project Images</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                      <div key={project.id} className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">{project.title}</h4>
                        <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                          <Image
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              // Fallback to placeholder if image doesn't exist
                              e.currentTarget.src = "/placeholder.svg?height=300&width=500"
                            }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{project.imageUrl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle>Help & Tips</CardTitle>
              <CardDescription>Useful information for managing your portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Image Optimization Tips</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Use JPG for photos and PNG for images with transparency</li>
                    <li>Compress images before adding them to reduce file size</li>
                    <li>
                      Use tools like{" "}
                      <a
                        href="https://squoosh.app/"
                        className="text-primary underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Squoosh
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://tinypng.com/"
                        className="text-primary underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TinyPNG
                      </a>{" "}
                      for compression
                    </li>
                    <li>Keep image dimensions consistent for a polished look</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Updating Content</h3>
                  <p className="text-sm">To update text content, edit the corresponding files in your project:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      Main page content: <code className="bg-muted px-1 rounded">app/page.tsx</code>
                    </li>
                    <li>
                      Profile section: <code className="bg-muted px-1 rounded">components/profile-section.tsx</code>
                    </li>
                    <li>
                      Project cards: <code className="bg-muted px-1 rounded">components/project-card.tsx</code>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Button variant="outline" asChild>
          <Link href="/">Back to Portfolio</Link>
        </Button>
      </div>
    </div>
  )
}

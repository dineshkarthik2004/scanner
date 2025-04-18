import Image from "next/image"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RecentDocuments() {
  // Sample data for recent documents
  const recentDocs = [
    { id: 1, title: "Invoice March 2023", date: "Today, 2:30 PM", thumbnail: "/placeholder.svg?height=120&width=90" },
    { id: 2, title: "Receipt #1234", date: "Yesterday, 10:15 AM", thumbnail: "/placeholder.svg?height=120&width=90" },
    { id: 3, title: "Contract Agreement", date: "Mar 28, 2023", thumbnail: "/placeholder.svg?height=120&width=90" },
    { id: 4, title: "Business Card", date: "Mar 25, 2023", thumbnail: "/placeholder.svg?height=120&width=90" },
  ]

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Documents</h2>
        <Button variant="link" className="text-sm">
          See All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recentDocs.map((doc) => (
          <Card key={doc.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={doc.thumbnail || "/placeholder.svg"}
                  alt={doc.title}
                  width={90}
                  height={120}
                  className="w-full h-32 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 h-8 w-8 rounded-full bg-background/80"
                >
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{doc.title}</h3>
                <p className="text-xs text-muted-foreground">{doc.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


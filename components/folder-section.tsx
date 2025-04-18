import { Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FolderSection() {
  // Sample data for folders
  const folders = [
    { id: 1, name: "Receipts", count: 12 },
    { id: 2, name: "Invoices", count: 8 },
    { id: 3, name: "ID Documents", count: 5 },
    { id: 4, name: "Contracts", count: 3 },
  ]

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Folders</h2>
        <Button variant="link" className="text-sm">
          Manage
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="bg-primary/10 p-2 rounded-md">
              <Folder className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{folder.name}</h3>
              <p className="text-xs text-muted-foreground">{folder.count} documents</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


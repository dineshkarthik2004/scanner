import Link from "next/link"
import { Home, FileText, Settings, HelpCircle, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import RecentDocuments from "@/components/recent-documents"
import FolderSection from "@/components/folder-section"
import { ModeToggle } from "@/components/mode-toggle"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* App Bar - applying visibility and feedback principles */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex items-center justify-between h-14 px-4">
          <h1 className="text-xl font-bold">ScanWise</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search documents</span>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content - applying 80-20 rule to focus on most used features */}
      <main className="flex-1 container px-4 py-6">
        <div className="grid gap-6">
          {/* Quick Actions - applying serial position effect */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/scan">
                <Button className="w-full h-20 flex flex-col gap-1" variant="default">
                  <Plus className="h-6 w-6" />
                  <span>New Scan</span>
                </Button>
              </Link>
              <Link href="/import">
                <Button className="w-full h-20 flex flex-col gap-1" variant="outline">
                  <FileText className="h-6 w-6" />
                  <span>Import File</span>
                </Button>
              </Link>
            </div>
          </section>

          {/* Recent Documents - applying recency principle */}
          <RecentDocuments />

          {/* Folders - applying organization and mental models */}
          <FolderSection />
        </div>
      </main>

      {/* Navigation Bar - applying consistency and standards */}
      <nav className="border-t sticky bottom-0 bg-background">
        <div className="container flex items-center justify-around h-16">
          <Link href="/" className="flex flex-col items-center py-2 px-4 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/documents" className="flex flex-col items-center py-2 px-4 text-muted-foreground">
            <FileText className="h-5 w-5" />
            <span className="text-xs">Documents</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center py-2 px-4 text-muted-foreground">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Link>
          <Link href="/help" className="flex flex-col items-center py-2 px-4 text-muted-foreground">
            <HelpCircle className="h-5 w-5" />
            <span className="text-xs">Help</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}


import Link from "next/link"
import { ArrowLeft, ChevronRight, Search, HelpCircle, BookOpen, MessageCircle, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Help Header - applying consistency */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex items-center h-14 px-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Button>
          </Link>
          <h1 className="font-medium ml-2">Help & Support</h1>
        </div>
      </header>

      {/* Main Content - applying help and documentation */}
      <main className="flex-1 container px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Search - applying flexibility and efficiency */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for help topics" className="pl-9" />
          </div>

          {/* Quick Help - applying recognition rather than recall */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Help</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/help/scanning">
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Scanning Tips</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
              <Link href="/help/editing">
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Editing Guides</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
              <Link href="/help/videos">
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Video Tutorials</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
              <Link href="/help/contact">
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Contact Support</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* FAQ - applying recognition rather than recall */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I scan a document?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    To scan a document, tap the "New Scan" button on the home screen. Position your document within the
                    frame and make sure it's well-lit. Tap the capture button when ready. You can then edit, enhance,
                    and save your document.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I improve scan quality?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    For best results, scan in a well-lit area, keep your device steady, and ensure the document is flat.
                    After scanning, use the enhance tools to adjust brightness, contrast, and sharpness for optimal
                    readability.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I export documents to PDF?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, after scanning and editing your document, tap the "Save" button and select "Export as PDF" from
                    the options. You can then share the PDF via email, messaging apps, or save it to cloud storage.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I organize my documents?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    You can organize documents by creating folders. Go to the Documents tab, tap "Manage Folders" and
                    create folders for different categories. You can then move documents to these folders by selecting a
                    document, tapping "Move" and choosing the destination folder.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I extract text from my scans?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    ScanWise includes OCR (Optical Character Recognition) technology. After scanning, tap on "Extract
                    Text" in the edit menu. The app will process the image and convert visible text to editable format
                    that you can copy or export.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Getting Started Guide - applying learnability */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Getting Started</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="font-medium">Quick Start Guide</h3>
              </div>
              <div className="p-4 space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Tap "New Scan" on the home screen</li>
                  <li>Position your document within the frame</li>
                  <li>Tap the capture button to scan</li>
                  <li>Adjust the crop area if needed</li>
                  <li>Use enhance tools to improve quality</li>
                  <li>Save your document and organize it</li>
                </ol>
                <Button variant="outline" className="w-full">
                  View Full Tutorial
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}


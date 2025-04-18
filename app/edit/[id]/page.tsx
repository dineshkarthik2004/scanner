"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Save, Crop, Rotate3dIcon as Rotate, Sliders, Wand2, Undo, Redo, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function EditPage() {
  const [activeTab, setActiveTab] = useState("enhance")
  const [showHelp, setShowHelp] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Edit Header - applying consistency */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="font-medium">Edit Document</h1>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setShowHelp(!showHelp)}>
                    <HelpCircle className="h-5 w-5" />
                    <span className="sr-only">Help</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show editing help</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - applying user control and freedom */}
      <main className="flex-1 container px-4 py-6 grid gap-6">
        {/* Document Preview - applying visibility of system status */}
        <div className="relative mx-auto max-w-md border rounded-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=450"
            alt="Document preview"
            width={450}
            height={600}
            className="w-full h-auto"
          />

          {/* Help overlay - applying help and documentation */}
          {showHelp && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white p-4">
              <div className="max-w-xs text-center space-y-4">
                <h3 className="font-bold text-lg">Editing Tips</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <Crop className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Use Crop to adjust document boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rotate className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Rotate to correct document orientation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wand2 className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Auto-enhance improves readability automatically</span>
                  </li>
                </ul>
                <Button variant="outline" onClick={() => setShowHelp(false)}>
                  Got it
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Edit History - applying error prevention */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon">
            <Undo className="h-4 w-4" />
            <span className="sr-only">Undo</span>
          </Button>
          <Button variant="outline" size="icon">
            <Redo className="h-4 w-4" />
            <span className="sr-only">Redo</span>
          </Button>
        </div>

        {/* Edit Tools - applying recognition rather than recall */}
        <div className="border rounded-lg overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="enhance">
                <Wand2 className="h-4 w-4 mr-2" />
                Enhance
              </TabsTrigger>
              <TabsTrigger value="crop">
                <Crop className="h-4 w-4 mr-2" />
                Crop
              </TabsTrigger>
              <TabsTrigger value="rotate">
                <Rotate className="h-4 w-4 mr-2" />
                Rotate
              </TabsTrigger>
              <TabsTrigger value="adjust">
                <Sliders className="h-4 w-4 mr-2" />
                Adjust
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enhance" className="p-4 space-y-4">
              <Button className="w-full" variant="secondary">
                Auto Enhance
              </Button>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Contrast</label>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Brightness</label>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Sharpness</label>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="crop" className="p-4 text-center">
              <p className="text-muted-foreground">Drag the corners to adjust crop area</p>
            </TabsContent>

            <TabsContent value="rotate" className="p-4 flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Rotate className="h-4 w-4 -rotate-90" />
                <span className="sr-only">Rotate left</span>
              </Button>
              <Button variant="outline" size="icon">
                <Rotate className="h-4 w-4 rotate-90" />
                <span className="sr-only">Rotate right</span>
              </Button>
            </TabsContent>

            <TabsContent value="adjust" className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Perspective</label>
                  <span className="text-sm text-muted-foreground">0°</span>
                </div>
                <Slider defaultValue={[0]} min={-45} max={45} step={1} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}


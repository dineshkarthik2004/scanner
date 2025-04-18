"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, FlashlightIcon as Flash, Grid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ScanPage() {
  const [flashMode, setFlashMode] = useState("off")
  const [gridVisible, setGridVisible] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Camera Header - applying visibility of system status */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-14 px-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Button>
          </Link>
          <Tabs defaultValue="document">
            <TabsList>
              <TabsTrigger value="document">Document</TabsTrigger>
              <TabsTrigger value="id">ID Card</TabsTrigger>
              <TabsTrigger value="receipt">Receipt</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Camera Viewfinder - applying feedback and visibility */}
      <main className="flex-1 relative bg-black">
        {/* Camera preview placeholder */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] mx-auto border-2 border-white/30 rounded-md overflow-hidden">
            {/* Placeholder for camera feed */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <Camera className="h-16 w-16 text-gray-600" />
            </div>

            {/* Document detection overlay - applying feedback */}
            <div className="absolute inset-0 border-2 border-primary animate-pulse rounded"></div>

            {/* Grid overlay for alignment - applying user control */}
            {gridVisible && (
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                <div className="border-r border-b border-white/20"></div>
                <div className="border-r border-l border-b border-white/20"></div>
                <div className="border-l border-b border-white/20"></div>
                <div className="border-r border-t border-b border-white/20"></div>
                <div className="border border-white/20"></div>
                <div className="border-l border-t border-b border-white/20"></div>
                <div className="border-r border-t border-white/20"></div>
                <div className="border-r border-l border-t border-white/20"></div>
                <div className="border-l border-t border-white/20"></div>
              </div>
            )}

            {/* Instructional text - applying help and documentation */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black/50 mx-auto inline-block px-2 py-1 rounded">
                Position document within frame
              </p>
            </div>
          </div>
        </div>

        {/* Camera controls - applying user control and freedom */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setGridVisible(!gridVisible)}>
                    <Grid className={`h-5 w-5 ${gridVisible ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="sr-only">Toggle grid</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle alignment grid</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button size="lg" className="rounded-full h-16 w-16 flex items-center justify-center">
              <Camera className="h-6 w-6" />
              <span className="sr-only">Take photo</span>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setFlashMode(flashMode === "off" ? "on" : "off")}>
                    <Flash className={`h-5 w-5 ${flashMode === "on" ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="sr-only">Toggle flash</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle flash</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </main>
    </div>
  )
}


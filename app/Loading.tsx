import {  Loader2Icon } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-2">
        <Loader2Icon className="h-10 w-10 animate-spin text-primary" />
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    </div>
  )
}

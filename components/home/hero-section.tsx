import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";


export default function HeroSection(){
    return <section>
        <div className="container">
            <div className="flex">
                <Badge variant={'secondary'} className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-purple-900 via-purple-500 to-purple-300 animate-gradient-x group">
                    <Sparkles className="w-6 h-6 mr-2 text-purple-900 animate-pulse" />
                    <p>Powered by AI</p>
                </Badge>
            </div>
            <h1>Summarie</h1>
            <h2>Generate summaries for your PDF files</h2>
            <Button>Get Started</Button>             
        </div>
    </section>
}
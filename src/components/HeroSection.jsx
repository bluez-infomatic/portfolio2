import{ ArrowDown } from "lucide-react";

export const HeroSection =() => {
   return (
    <section className="relative min-h-screen flex flex-col item-center justify-center px-4" id="hero">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6" >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
                    <span className="opacity-0 animate-fade-in" >Hi , I'm</span>
                    <span  className="text-primary opacity-0 animate-fade-in-delay-1 " > Ganesh</span>
                    <span   className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ">Babu R</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" >
                    A Passionate Front-End Developer dedicated to crafting visually stunning and responsive web interfaces. I specialize in HTML, CSS, JavaScript, and modern frameworks like React. I love turning complex problems into elegant, user-friendly solutions and am constantly learning to stay ahead in the fast-moving world of front-end tech.
                </p>
                <div  className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#project" className="cosmic-button">
                        View My Work

                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce" >
         <span className="text-sm text-muted-foreground mb-2 " >Scroll</span>
         <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
   )
}
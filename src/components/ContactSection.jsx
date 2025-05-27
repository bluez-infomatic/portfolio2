import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils"

export const ContactSection = () => {
    const [buttonText, setButtonText] = useState("Send Message");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Message sent successfully");
        setButtonText("Send Message"); // Reset button text in case it's not default

        setTimeout(() => {
            setButtonText("Sending...");
            setStatus(""); // Optional: clear the message after 2s
        }, 2000);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities and ideas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:ganeshbabumanikandan@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ganeshbabumanikandan@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+916379134594"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 6379134594
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">
                                        Coimbatore, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" className="text-muted-foreground hover:text-primary">
                                    <Instagram />
                                </a>
                                <a href="https://www.linkedin.com/in/ganesh-babu-r-85ab04365/" className="text-muted-foreground hover:text-primary">
                                    <Linkedin />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="GaneshBabu..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmailcom..."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, ......"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {buttonText}
                                <Send size={16} />

                            </button>

                            {status && (
                                <p className="text-green-600 font-semibold text-center mt-2">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "EOD Report",
    description: "EOD Report Landing Page – Built with HTML, CSS, Bootstrap, and JavaScript.",
    image: "./projects/eod.png",
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "PHP", "MYSQL"],
      demoUrl: ""
  },
  {
    id: 2,
    title: "Invoice Form",
    description: "This page is designed to calculate the invoice amount.",
    image: "./projects/invoice.png",
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "PHP", "MYSQL"],
    demoUrl: "https://ganesh1412-developer.github.io/invoice/invoice/index.html"
  },
  {
    id: 3,
    title: "Leave Panel",
    description: "This page provides information about employee leave.",
    image: "./projects/leave.jpg",
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "PHP", "MYSQL"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {project.demoUrl && (
                  <div className="flex justify-center items-center">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/ganesh1412-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

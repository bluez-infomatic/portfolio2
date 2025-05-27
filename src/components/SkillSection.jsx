import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Bootstrap5", level: 90, category: "frontend" },
  { name: "Javascript", level: 80, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Php", level: 75, category: "backend" },
  { name: "MySql", level: 80, category: "backend" },
  { name: "NodeJs", level: 60, category: "backend" },
  { name: "Vs Code", level: 95, category: "tools" },
  { name: "Github", level: 97, category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mb-2 capitalize">{skill.category}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-right mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




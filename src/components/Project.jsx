// Project.js
import React from 'react';
import "../styling/Project.css";

const Project = ({ title, desc, image, techstack = [], links = [] }) => {
    const stackColors = {
        Javascript: "#ADDA44",
        React: "#61DAFB",
        Python: "#306998",
        TensorFlow: "#FF6F00",
        "HTML/CSS": "#D69DFC",
        "Tailwind CSS": "#06B6D4",
        CSS: "#254BDD",
        Github: "#A99AB8",
        MongoDB: "#118D4D",
        Docker: "#1D63ED",
        Cohere: "#355146",
        NextJS: "#A6E7E4",
        TypeScript: "#087ECE",
        Deso: "#1A4B9B",
        Framer: "#F308B1",
        Figma: "#FF7262",
        Flask: "#40ABC0",
        Pandas: "#F7CA22",
        OpenAI: "#D5C8D6",
        Java: "#F09217",
        SQL: "#AAE537",
        SpringBoot: "#69AD3C",
        CodeMirror: "#DA8F9E",
        AlanAI: "#E2743F",
        JSON: "#939393",
        Arduino: "#009297",
        'C++': "#4A7CAC",
    };

    return (
        <div className="project-card noto-normal">
            <div className='image-container'>
                <img className='image-logo' src={image || 'path/to/placeholder.png'} alt={title || 'Project Image'} />
            </div>
            <div className='project-details'>
                <div className='project-header'>
                    <h2 className='project-title'>{title || 'Untitled Project'}</h2>
                    <div className='project-links'>
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-icon">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <p className='project-desc'>{desc || 'No description available.'}</p>
                <div className='techStack'>
                    {techstack.map((tag, index) => {
                        const tagColor = stackColors[tag] || "#000"; 
                        return (
                            <span
                                className='techTag'
                                style={{ backgroundColor: tagColor }}
                                key={index}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;

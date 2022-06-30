import FlipCard from "./flipCard/flipCard";

const Projects = ({ projects }) => {
    return (
        <>
            <h2 className={`title`}>Complete projects</h2>
            <div className="portfolio-list">
                {projects.map((element, index) => (
                    <FlipCard key={index} card={element} />
                ))}
            </div>
        </>
    );
};

export default Projects;

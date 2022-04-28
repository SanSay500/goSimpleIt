import FlipCard from "@/Components/FlipCard"
const Portfolio = ({ projects }) => {
  return (
    <><h3 className="portfolio-title title">Portfolio</h3>
    <div className="portfolio-list">
    {projects.map((element, index) => (
                <FlipCard key={index} card={element}/>
            ))}
    </div>
    </>
  )
}

export default Portfolio

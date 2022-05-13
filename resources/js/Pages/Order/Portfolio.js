import FlipCard from "@/Components/FlipCard"
const Portfolio = ({ projects }) => {
  return (
    <>
      <h3 className="portfolio-title title">Our works</h3>
    <div className="portfolio-list">
    {projects.map((element, index) => (
                <FlipCard key={index} card={element}/>
            ))}
    </div>
    </>
  )
}

export default Portfolio

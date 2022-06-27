// import Portfolio from './Portfolio'
// import { useState, useEffect } from 'react'
// const PortfolioContainer=({portfolioList})=>{
//     let count_project=0;
//     let width=window.innerWidth;
//     if (width > 1024) {
//         count_project=3;
//     } else{ if(width > 576){
//         count_project=2;
//     } else {
//         count_project=1;
//     }}
//     const [stepNext, setStepNext] = useState(count_project);
//     const [stepPrev, setStepPrev] = useState(0);
//     const resizeHandler = () => {
//        let  clientWidth=window.innerWidth;
//       if (clientWidth > 1024) {
//         count_project=3;
//     } else{ if(clientWidth > 576){
//         count_project=2;
//     } else {
//         count_project=1;
//     }

//     }
//         setStepPrev(0);
//         setStepNext(count_project);
//     };

//     useEffect(() => {
//       window.addEventListener("resize", resizeHandler);
//       resizeHandler();
//       return () => {
//         window.removeEventListener("resize", resizeHandler);
//       };
//     }, []);
//     return(
//       <section className="portfolio">
//       <div className="container">
//         <div className='portfolio-wrapper'>
//     <Portfolio projects={portfolioList.slice(stepPrev, stepNext)}/>
//     <div className='btn-container'>
//     {stepPrev > 0
//       ? (
//         <div className="review__more">
//         <button
//           className="review__button"
//           type="button"
//           onClick={() => {
//             setStepNext(stepPrev);
//             if (stepPrev-count_project < 0 ) {
//                 setStepPrev(0)
//             } else {
//                 setStepPrev(stepPrev - count_project)
//             }

//         }}
//         >
//           Prev page
//         </button>
//       </div>
//         )
//       : (
//           ''
//         )}
//     {portfolioList.length > stepNext
//       ? (
//         <div className="review__more">
//         <button
//           className="review__button"
//           type="button"
//           onClick={() => {
//             setStepPrev(stepNext)
//             setStepNext(stepNext + count_project)
//         }}
//         >
//           Next page
//         </button>
//       </div>
//         )
//       : (
//           ''
//         )}

//     </div>
// </div>
// </div>
//     </section>)
// }
// export default PortfolioContainer

import style from './aboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={style.about}>
            <h3 className={`${style.aboutTitle} title`}>About us</h3>
            <h4 className={style.subtitle}>Your business can benefit from freelance services</h4>
            <p className={style.aboutText}>
                Here you can find the <strong>world best freelance specialists</strong> among top performers registered on Go
                SimpleIT.</p>
            <p className={style.aboutText}>
                The world-best freelance specialists among top performers – they are already registered on Go
                SimpleIT.</p>
            <p className={style.aboutText}>
                Programmers, designers, artists, copywriters, lawyers, accountants, engineers, photographers – over
                hundreds of remote professionals receive and complete your projects daily.</p>
            <p className={style.aboutText}>
                Simply <strong>place an order and freelancers will offer their services</strong>, help you create a task, and determine
                the budget and deadlines for the completion. Choosing the best performer among those who responded is
                all that
                remains.</p>
            <p className={style.aboutText}>
                Start cooperation with them now!
                If there is no time for waiting for respond, you can quickly find remote specialists in the
                catalogue by evaluating their portfolio with the submitted works – and offer an order in only 2 clicks.
            </p>
            <p className={style.aboutText}>
                For your secure cooperation, use our "Secure Transaction" service – we will simply reserve the cost of
                the project on your customer account. Go SimpleIT guarantees you a refund if the work is done poorly.
            </p>
        </div>
    )
        ;
};

export default AboutUs;

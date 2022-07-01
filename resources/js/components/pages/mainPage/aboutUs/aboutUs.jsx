import style from './aboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={style.about}>
            <h3 className={`${style.aboutTitle} title`}>About us</h3>
                <p className={style.aboutText}>
                    Here you can find the best freelance specialists among 1
                    million performers registered on the site. Programmers,
                    designers, artists, copywriters, lawyers, accountants,
                    engineers, photographers - thousands of remote employees
                    in any freelance specialization.
                    <br />
                    It is enough for you to publish an order, a competition
                    or a vacancy - and interested freelancers will offer
                    their services themselves, help you form a task,
                    determine the budget and deadlines for completing the
                    work. It remains only to choose the best performer from
                    among the freelance specialists who responded and start
                    cooperation with him. <br />
                    If there is no time for orders at all, you can quickly
                    find remote specialists in the catalog by evaluating
                    their portfolio with the submitted works - and offer an
                    order in 2 clicks. <br />
                    For the security of freelance cooperation! Use our
                    "Secure Transaction" service with the reservation of the
                    amount on the website for cooperation with freelancers -
                    and we guarantee you a refund if the work is done
                    poorly.
                </p>
        </div>
    );
};

export default AboutUs;

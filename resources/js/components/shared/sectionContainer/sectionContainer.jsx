import React from "react";
export default function SectionContainer({classes,classesCont, children }) {
    return (
        <>

            <section className={`sectionContainer ${classes}`}>
                <div className={`container ${classesCont}`}>{children}</div>
            </section>

        </>
    );
}
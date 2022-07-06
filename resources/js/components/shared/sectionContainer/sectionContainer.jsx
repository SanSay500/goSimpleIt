import React from "react";
export default function SectionContainer({ section, container, children }) {
    return (
        <>
            <section className={`sectionContainer ${section}`}>
                <div className={`container ${container}`}>{children}</div>
            </section>
        </>
    );
}

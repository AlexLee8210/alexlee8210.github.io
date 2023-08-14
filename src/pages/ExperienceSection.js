import './ExperienceSection.css';

function ExperienceSection({ className, name, location, title, dates, children }) {
    return (
        <div className={className}>

            <h3 className='name'>
                {name}
                <span className='location' style={{float: 'right'}}>
                    {location}
                </span>
            </h3>
            <h3 className='subheader'>
                <span className='title'>
                    {title}
                </span>
                <span className='dates'>
                    {dates}
                </span>
            </h3>
            <p>
                {children}
            </p>
        </div>
    );
}

export default ExperienceSection;
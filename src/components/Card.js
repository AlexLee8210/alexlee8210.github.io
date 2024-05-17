import '../styles/Card.css';

function Card({title, tags, tagLinks, image, children, className, link}) {

    return (
        <div className={`${className} + card-wrapper`}>
            <a href={link} target='_blank' 
                rel='noreferrer'
                className='card-link'
            >
                <div className='card'>
                    <img className='card-image' src={image} alt='card'/>
                    <div className="card-content">
                        <h1>
                            {title}
                        </h1>
                        <p className='card-info'>
                            {children}
                        </p>
                    </div>
                    
                    <div className='tag-container'>
                        {
                            tags.map((tag, index) => {
                                const linked = tagLinks && tagLinks[tag];
                                const tagLinked = linked ? <a className='tag-link' href={tagLinks[tag]} target="_blank" rel="noreferrer">{tag}</a> : tag;
                                return (
                                    <div key={index} className={`tag-content ${linked ? 'linked' : ''}`}>
                                        {tagLinked}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
import '../styles/Card.css';

function Card({title, image, children, className, link}) {

    return (
        <div className={`${className} + card-wrapper`}>
            <a href={link} target='_blank' 
                rel='noreferrer'
                className='card-link'
            >
                <div className='card'>
                    {/* <div className='card-img-wrapper'> */}
                        <img className='card-image' src={image} alt='card'/>
                    {/* </div> */}
                    <div className="card-content">
                        <h1>
                            {title}
                        </h1>
                        <p className='card-info'>
                            {children}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
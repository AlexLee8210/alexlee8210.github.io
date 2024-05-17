
import { useState, useRef, useEffect} from 'react'; 
import Card from './Card';
import '../styles/CardGrid.css';
import PROJECT_DATA from '../data/projects';

function CardGrid({className}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: '-150px' }
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            const cardWrappers = ref.current.querySelectorAll('.card-wrapper');
            cardWrappers.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.3}s`;
                el.classList.add('card-anim');
            });
        }
    }, [isIntersecting]);

    return (
        <div className='card-grid' ref={ref}>
            {PROJECT_DATA.map((project, index) => (
                <Card
                    key={index}
                    title={project.title} 
                    className='hide-card'
                    image={project.image_url}
                    link={project.link}
                    tags={project.tags}
                    tagLinks={project.tag_links}>
                    <p dangerouslySetInnerHTML={{ __html: project.description }}/>
                </Card>
            ))}
        </div>
    );
}

export default CardGrid;
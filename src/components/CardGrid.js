
import { useState, useRef, useEffect} from 'react'; 
import Card from './Card';
import './CardGrid.css';

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
            ref.current.querySelectorAll('.card-wrapper').forEach((el) => {
                el.classList.add('card-anim');
            });
        }
    }, [isIntersecting]);

    
    // useEffect(() => {
    //     const LINKS = ['https://apps.apple.com/tt/app/zenith-math/id1561490083',
    //                     'https://github.com/AlexLee8210/tic_tac_toe'];
    //     var index = 0;
    //     const handleClick = () => {
    //         window.open(LINKS[index++], '_blank');
    //     };
    //     const cards = document.querySelectorAll('.card');
    //     cards.forEach((card) => {
    //         card.addEventListener('click', handleClick);
    //     });
    // }, []);

    return (
        <div className='card-grid' ref={ref}>
            <Card title='Zenith Math' className='hide-card' image={process.env.PUBLIC_URL + '/app_icon_Z.png'}
                link='https://apps.apple.com/tt/app/zenith-math/id1561490083'>
                <p>
                    Mental math app I created with my friends in high school.
                </p>
                <p>
                    Out on the App Store!
                </p>
            </Card>
            <Card title='Tic Tac Toe' className='hide-card'
                image='https://i2.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/10/flutter.jpg?fit=1570%2C1500&ssl=1'
                link='https://github.com/AlexLee8210/tic_tac_toe'>
                <p>
                    Flutter Application I made while learning about this framework.
                </p>
            </Card>
            <Card title='Greater - QWELL' className='hide-card'
                image='https://www.austinoutpost.org/wp-content/uploads/2022/02/QWELL-Greater-Than_300.jpg'
                link='https://austinoutpost.org'>
                <p>
                    Worked on Greater, a React Native Mobile Applciation for QWELL
                    as a Tech Member in&nbsp;
                    <a href='https://www.txconvergent.org/forge' target='_blank'
                        rel='noreferrer'
                    >
                        Convergent - Forge
                    </a>.
                </p>
            </Card>
        </div>
    );
}

export default CardGrid;
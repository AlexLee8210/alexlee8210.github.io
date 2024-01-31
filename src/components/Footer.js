import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <a href='https://www.linkedin.com/in/aleexander/'
                    target='_blank'
                    rel='noreferrer'
                    className='footer-icon-link'
                >
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a href='https://github.com/AlexLee8210'
                    target='_blank'
                    rel='noreferrer'
                    className='footer-icon-link'
                >
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a href='https://medium.com/@alexlee8210'
                    target='_blank'
                    rel='noreferrer'
                    className='footer-icon-link'
                >
                    <i class="fa-brands fa-medium fa-2xl"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
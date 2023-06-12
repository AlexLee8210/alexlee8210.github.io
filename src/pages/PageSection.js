import './PageSection.css';
import '../App.css';

function PageSection({className, children}) {
    return (
        <div className={`page-section + ${className}`}>
            {children}
        </div>
    );
}

export default PageSection;
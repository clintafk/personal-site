import '../styles/Welcome.css'
import Greet from '../../public/Greet.svg'

interface WelcomeProps {
    userName: string;
    imagePath: string;
    userDescription: string | JSX.Element;
}

function Welcome ({userName, imagePath, userDescription}: WelcomeProps) {
    return (
        <>
            <div className="welcome">
                <div className="welcome-header">
                    <img src={Greet} alt="" />
                </div>
                <div className="welcome-content">
                    <div className='welcome-description'>
                        <p>{userDescription}</p>
                    </div>
                    <div className="welcome-image">
                        <img src={imagePath} alt="Author image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;
import '../styles/ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <div className="error">
                <div className="error-message">
                    <h1>404</h1>    
                    <p>Page not found!</p>
                    <p>Go back to <a href=''><Link to="/">homepage</Link></a>
                    </p>
                </div>
            </div>
        </>
    )

}

export default ErrorPage
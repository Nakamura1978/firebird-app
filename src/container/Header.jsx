import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = (props) => {
    return(
        <div className='container'>
            <header>
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}
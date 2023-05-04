import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">焼き鳥 中村屋</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">注文</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" >注文管理</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" >受付設定</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" >顧客リスト</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}



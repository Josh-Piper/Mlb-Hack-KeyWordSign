import './_PageHeader.scss';

function PageHeader(props) {

    return (
        <header className="page-header">
            <div className="container">
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export default PageHeader
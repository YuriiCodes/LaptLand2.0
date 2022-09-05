import Link from "next/link";

export function ProductScreen(props) {
    return (
        <div
            className={"shadow-lg content position-relative overflow-hidden mt-3 text-center bg-light d-flex justify-content-center  align-items-center jumbotron"}
        >
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Welcome to LaptLand👋</h1>
                <p className="lead fw-normal">You won`&apos;t resist buying from us. Our prices are simply stunning.</p>
                <Link href="/#brands">
                    <a className="btn btn-outline-secondary">Explore
                        available brands
                    </a>
                </Link>
            </div>
        </div>
    )
}
const Footer = () => {
    return (
        <footer className="px-4 py-8 dark:bg-gray-100 dark:text-gray-600">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <h3 className="text-2xl font-black ">MGR</h3>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
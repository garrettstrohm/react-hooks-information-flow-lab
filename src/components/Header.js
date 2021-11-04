


function Header({onDarkModeClick, darkMode}){
    
    function handleClick(){
        onDarkModeClick(darkMode => darkMode)
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>
            {darkMode ? "Dark" : "Light"} Mode
            </button>
        </header>);
}

export default Header;
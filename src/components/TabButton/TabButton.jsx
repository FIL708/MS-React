function TabButton({ children, onClick, isSelected }) {
    return (
        <li>
            <button
                className={isSelected ? 'active' : ''}
                type='button'
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}

export default TabButton;

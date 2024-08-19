function TabButton({ children, isSelected, ...props }) {
    return (
        <li>
            <button
                className={isSelected ? 'active' : ''}
                type='button'
                {...props}
            >
                {children}
            </button>
        </li>
    );
}

export default TabButton;

import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [isDay, setIsDay] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'day') {
            setIsDay(true);
            document.body.classList.add('day-theme');
        } else {
            setIsDay(false);
            document.body.classList.remove('day-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (isDay) {
            document.body.classList.remove('day-theme');
            localStorage.setItem('theme', 'night');
            setIsDay(false);
        } else {
            document.body.classList.add('day-theme');
            localStorage.setItem('theme', 'day');
            setIsDay(true);
        }
    };

    return (
        <>
            <input
                type="checkbox"
                id="theme-toggle-input"
                checked={isDay}
                onChange={toggleTheme}
                hidden
            />
            <label id="theme-toggle-label" htmlFor="theme-toggle-input" style={{ cursor: 'pointer' }}>
                {isDay ? '🌇' : '🌃'}
            </label>
        </>
    );
}

export default ThemeToggle;
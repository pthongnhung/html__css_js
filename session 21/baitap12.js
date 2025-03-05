for (let i = 0; i < 10; i++) {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(`%cMau sac da duoc thay doi`, `color: ${color}`);
}
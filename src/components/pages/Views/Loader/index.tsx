import { FC, useState, useEffect } from 'react';

interface LoaderProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    start: { x: number, y: number };
    end: { x: number, y: number };
    duration: number;
}

const Loader: FC<LoaderProps> = ({ canvasRef, start, end, duration }) => {
    const [position, setPosition] = useState(start);

    useEffect(() => {
        let startTime: number;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const timeElapsed = time - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            const newX = start.x + (end.x - start.x) * progress;
            const newY = start.y + (end.y - start.y) * progress;

            setPosition({ x: newX, y: newY });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [start, end, duration]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Рисуем погрузчик в текущей позиции
        context.fillStyle = '#526ED3';
        context.strokeStyle = '#111';
        context.lineWidth = 1;
        context.beginPath();
        context.arc(position.x, position.y, 10, 0, 2 * Math.PI);
        context.fill();

    }, [position, canvasRef]);

    return null;
};

export { Loader };


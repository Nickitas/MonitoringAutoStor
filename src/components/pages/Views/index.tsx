import { FC, useEffect, useRef, ReactNode } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import { Loader } from './Loader';
import cls from './index.module.scss';


interface ViewsProps { 
    currentWarehouse: number;
};

interface BuildingPlanCanvasProps {
    children: (props: { loaderCanvasRef: React.RefObject<HTMLCanvasElement> }) => ReactNode;
};

const BuildingPlanCanvas: FC<BuildingPlanCanvasProps> = ({ children, currentWarehouse }) => {
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
    const loaderCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        //#region Схема
        const canvas = backgroundCanvasRef.current;
        if (!canvas || !canvas.parentElement) return;

        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const context = canvas.getContext('2d');

        const loaderHeight = 50;
        const rackWidth = canvasWidth * 0.6;

        const fixedRackHeight = 100;
        const totalRackHeight = 3 * fixedRackHeight;
        const totalGapHeight = canvasHeight - totalRackHeight;
        const gapBetweenRacks = totalGapHeight / 4;
        //#endregion


        //#region Рисование стеллажей
        const drawRack = (x: number, y: number) => {
            context.fillStyle = '#F4F4F4';
            context.strokeStyle = '#000';
            context.lineWidth = 2;
            context.fillRect(x, y, rackWidth, fixedRackHeight);
            context.strokeRect(x, y, rackWidth, fixedRackHeight);
        }

        const startX = (canvasWidth - rackWidth) / 2;
        let startY = gapBetweenRacks; // начнем с первого интервала

        drawRack(startX, startY);
        startY += (fixedRackHeight + gapBetweenRacks);
        drawRack(startX, startY);
        startY += (fixedRackHeight + gapBetweenRacks);
        drawRack(startX, startY);
        //#endregion


        //#region Определение координат точек выгрузки
        const getUnloadPoints = (x: number, y: number, width: number, height: number) => {
            const offset = width / 6; // смещение от края стеллажа
            const middleHeight = y + height / 2;
            return [
                { x: x + offset, y: middleHeight },
                { x: x + width - offset, y: middleHeight }
            ];
        }

        const unloadPoints = [
            ...getUnloadPoints(startX, gapBetweenRacks, rackWidth, fixedRackHeight),
            ...getUnloadPoints(startX, gapBetweenRacks * 2 + fixedRackHeight, rackWidth, fixedRackHeight),
            ...getUnloadPoints(startX, gapBetweenRacks * 3 + fixedRackHeight * 2, rackWidth, fixedRackHeight)
        ];
        //#endregion


        //#region  Рисование точек выгрузки
        const drawUnloadPoint = (x: number, y: number, label: string) => {
            context.fillStyle = '#526ED3';
            context.strokeStyle = '#526ED3';
            context.lineWidth = 1;
            context.beginPath();
            context.arc(x, y, 5, 0, 2 * Math.PI);
            context.fill();

            context.font = "18px Arial";
            context.fillText(label, x + 10, y + 5);
        }

        unloadPoints.forEach((point, index) => {
            drawUnloadPoint(point.x, point.y, `X${index + 1}`);
        });
        //#endregion


        //#region Рисование маршрута погрузчика
        const verticalLineStart = { x: startX + rackWidth + 20, y: 10 }; // начальная точка вертикальной линии
        const verticalLineEnd = { x: startX + rackWidth + 20, y: canvasHeight - 10 }; // конечная точка вертикальной линии

        const horizontalLines = [
            { start: { x: verticalLineStart.x, y: gapBetweenRacks / 2 }, end: { x: startX, y: gapBetweenRacks / 2 } }, // между верхней границей и первым стеллажом
            { start: { x: verticalLineStart.x, y: 1.5 * gapBetweenRacks + fixedRackHeight }, end: { x: startX, y: 1.5 * gapBetweenRacks + fixedRackHeight } }, // между первым и вторым стеллажами
            { start: { x: verticalLineStart.x, y: 2.5 * gapBetweenRacks + 2 * fixedRackHeight }, end: { x: startX, y: 2.5 * gapBetweenRacks + 2 * fixedRackHeight } }, // между вторым и третьим стеллажами
            { start: { x: verticalLineStart.x, y: canvasHeight - gapBetweenRacks / 2 }, end: { x: startX, y: canvasHeight - gapBetweenRacks / 2 } } // между третьим стеллажом и нижней границей
        ];

        context.strokeStyle = 'rgba(82, 110, 211, 0.32)';
        context.lineWidth = 2;
        context.setLineDash([5, 10]); // пунктир

        // Рисуем вертикальную линию
        context.beginPath();
        context.moveTo(verticalLineStart.x, verticalLineStart.y);
        context.lineTo(verticalLineEnd.x, verticalLineEnd.y);
        context.stroke();

        // Рисуем горизонтальные линии
        horizontalLines.forEach(line => {
            context.beginPath();
            context.moveTo(line.start.x, line.start.y);
            context.lineTo(line.end.x, line.end.y);
            context.stroke();
        });

        // сброс настройки линии на непрерывную
        context.setLineDash([]);
        //#endregion


        //#region Определение координат контрольных точек
        // Пересечение с точками выгрузки
        const intersectionPoints = unloadPoints.map(point => {
            return { x: verticalLineStart.x, y: point.y, radius: 10 };  // radius set to 10 for 20px diameter
        });

        // Места между точками выгрузки (на горизонтальных линиях маршрута)
        const midPoints = horizontalLines.map(line => {
            return { x: (line.start.x + line.end.x) / 2, y: line.start.y, radius: 10 };  // radius set to 10 for 20px diameter
        });

        // Две контрольные точки на вертикальной линии: одна сверху и одна снизу
        const verticalEdgePoints = [
            { x: verticalLineStart.x, y: verticalLineStart.y, radius: 10 },  // radius set to 10 for 20px diameter
            { x: verticalLineEnd.x, y: verticalLineEnd.y, radius: 10 }  // radius set to 10 for 20px diameter
        ];

        // Соединяем все контрольные точки в один массив
        const controlPoints = [
            ...intersectionPoints,
            ...midPoints,
            ...verticalEdgePoints
        ];
        //#endregion

        //#region Рисование контрольных точек
        controlPoints.slice(0, 10).forEach((point, index) => {  // Use .slice(0, 10) to limit to 10 points
            context.fillStyle = '#FF7043';
            context.strokeStyle = '#fff';
            context.lineWidth = 1;
            context.beginPath();
            context.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);  // Corrected 3 * Math.PI to 2 * Math.PI
            context.fill();
            context.stroke();

            // Добавляем нумерацию контрольных точек
            context.fillStyle = '#fff';
            context.font = "12px Arial";
            context.textAlign = 'center';  // Чтобы текст был по центру
            context.textBaseline = 'middle';  // Чтобы текст был по центру
            context.fillText(`K${index + 1}`, point.x, point.y);
        });
        //#endregion

        const controlPointsCoordinates = controlPoints.map(point => ({ x: point.x, y: point.y }));
    }, []);

    return (
        <div className={cls.wrapper}>
            <canvas ref={backgroundCanvasRef} width="800" height="600" style={{ position: 'absolute', top: 0, left: 0 }} />
            <canvas ref={loaderCanvasRef} width="800" height="600" style={{ position: 'absolute', top: 0, left: 0 }} />
            {children({ loaderCanvasRef })}
        </div>
    );
};


// {x: 486.4, y: 114.5} 
// {x: 486.4, y: 114.5}
// {x: 486.4, y: 279} 
// {x: 486.4, y: 548}

const Views: FC<ViewsProps> = () => {
    return (
        <section className={cls.views}>
            <PageTitle title="Мониторинг" />
            <div className={cls.buildingPlan}>
                <BuildingPlanCanvas>
                    {({ loaderCanvasRef }) => (
                        <Loader canvasRef={loaderCanvasRef} start={{ x: 665, y: 565 }} end={{ x: 665, y: 350 }} duration={2000} />
                    )}
                </BuildingPlanCanvas>
            </div>
        </section>
    );
};

export default Views;


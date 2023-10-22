export interface IWarehouse {
    [key: string]: any;
    id: number; // Идентификатор склада
    name: string; // Название склада
    square: number; // Общая площадь склада
    rackingNumber: number; // Количество доступных стеллажей
    currentWorkload: number; // Текущая загруженность склада (в процентах)
    availableSpace: number; // Доступное пространство на складе (в кубических метрах)
    activeOrdersNumber: number;// Количество активных заказов на складе
    status: number; // статус склада
    dateOfLastUpdateInfo: number;// Дата последнего обновления информации о складе
    contact: string; // Контактные данные ответственного лица для связи
}
export interface IForklift {
    id: number;
    name: string | 'Noname';
    task_id: number;
    maintenance_date: number;
    position: number[];
    status: 0 | -1 | 1 | 'wait' | 'started' | 'finished';
    warehouse_id: number | null,
    load_capacity: number,
    total_mileage: number,
    mileage_affter_maintenance: number,
    last_point_id: string | null,
    point_id: string,
    createdAt: string,
    updatedAt: string
}
import { useState } from "react";
import { Checkbox } from "../../ui/inputs/Checkbox";
import { FilterIcon, ArrowSmallDown } from '../../ui/svg.module';
import cls from './index.module.scss';


const Filter = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<{
        wait: boolean;
        started: boolean;
        finished: boolean;
    }>({
        wait: false,
        started: false,
        finished: false
    });

    const handleCheckboxChange = (e: any) => {
        const { value, checked } = e.target;
        setFilter(prev => ({ ...prev, [value]: checked }));
    }

    const _filter = (
        <div className={cls.filter}>
            <div className={cls.button} onClick={() => setOpen(prev => !prev)}>
                <FilterIcon />
                <span>Фильтры</span>
                <div className={isOpen ? `${cls.dropArrow} ${cls.rot}` : cls.dropArrow} onClick={() => { }}>
                    <ArrowSmallDown />
                </div>
            </div>
            <div className={isOpen ? `${cls.drop} ${cls.open}` : cls.drop}>
                <div className={cls.head}>
                    <span>Отметьте категории : </span>
                </div>
                <div className={cls.body}>
                    <Checkbox
                        checked={filter.wait}
                        name='wait'
                        value='wait'
                        onChange={handleCheckboxChange}
                    >
                        <p>Ожидаются</p>
                    </Checkbox>
                    <Checkbox
                        checked={filter.started}
                        name='started'
                        value='started'
                        onChange={handleCheckboxChange}
                    >
                        <p>Начаты</p>
                    </Checkbox>
                    <Checkbox
                        checked={filter.finished}
                        name='finished'
                        value='finished'
                        onChange={handleCheckboxChange}
                    >
                        <p>Окончены</p>
                    </Checkbox>
                </div>
            </div>
        </div>
    );

    return _filter;
};

export { Filter };
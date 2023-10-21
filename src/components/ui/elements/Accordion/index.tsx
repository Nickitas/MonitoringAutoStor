import { FC, ReactNode, useState } from "react";
import { AccordionSummary } from "./AccordionSummary";
import { AccordionDetails } from "./AccordionDetails";
import cls from './index.module.scss';


interface AccordionProps {
    summary: string;
    children: ReactNode;
};

const Accordion: FC<AccordionProps> = ({ summary, children }) => {
    const [isClicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    const accordion = (
        <div className={`${cls.accordion} ${isClicked ? cls.clicked : ''}`}>
            <AccordionSummary setClicked={handleClick}>
                { summary }
            </AccordionSummary>
            <AccordionDetails isClicked={isClicked}>
                { children }
            </AccordionDetails>
        </div>
    );

    return accordion;
};

export { Accordion };
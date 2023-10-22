import { FC } from 'react';
import { PageTitle } from '../../ui/elements/PageTitle';
import { Accordion } from '../../ui/elements/Accordion';
import { rulesTexts } from '../../../data/rulesTexts';
import cls from './index.module.scss';


interface RulesProps {

};

const Rules: FC<RulesProps> = ({  }) => {

    const _rules = (
        <section className={cls.rules}>
            <PageTitle title='Правила' />
            { rulesTexts.map(el => (
                <Accordion key={el.id} summary={`${el.id+1}. ${el.title}`}>
                    { el.paragraphs.map((parag, index) => (
                        <p key={index}>{ parag }</p>
                    ))}
                </Accordion>
            ))}
        </section>
    );

    return _rules;
}

export default Rules;
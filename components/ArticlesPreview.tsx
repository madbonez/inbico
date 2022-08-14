import { TextAccent } from './atoms/TextAccent';
import { ArticleCard } from './ArticleCard';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const ArticlesPreview = (props: { header: string, bgGray?: boolean }) => {
    return (
        <section className={`flex ${props.bgGray ? 'bg-grayBg' : ''} w-full justify-center pt-12 pb-12 p-12`}>
            <div className="lg:w-container relative">
                <h2 className="text-2xl font-medium text-teal-900 font-bold">{props.header}</h2>
                <TextAccent black/>

                <div className="cursor-pointer inline-block absolute top-0 right-0">
                    <div className="bg-orange-600 inline-block p-3 hover:bg-nepal transition-colors duration-150">
                        <BsChevronLeft/>
                    </div>
                    <div className="bg-blue inline-block p-3 hover:bg-nepal transition-colors duration-500">
                        <BsChevronRight/>
                    </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap mt-8 justify-center items-center">
                    <ArticleCard header="Оценка недвижимости" imgUrl="/articles/img.png" publishDay="12" publishMonth="НОЯ" text="Компания ООО
“Инновации
Бизнес Консалтинг” n“Инновации Бизнес
Консалтинг”
“Инновации Бизнес Консалтинг
” “Инновации Бизнес Консалтинг” “Инновации Бизнес Консалтинг” проводит независимую оценку и экспертизу всех видов объектов недвижимости."/>
                    <ArticleCard header="Оценка недвижимости" imgUrl="/articles/img.png" publishDay="12" publishMonth="НОЯ" text="Компания ООО "/>
                </div>
            </div>
        </section>
    )
}

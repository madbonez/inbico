import { NextPage } from 'next';
import { BasePageTemplate } from '../components/templates/BasePageTemplate';
import Image from 'next/image';

const About: NextPage = () => {
    return (
        <BasePageTemplate>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="lg:w-container justify-center items-center mb-3 mt-0 lg:mt-16 p-6">
                    <h1 className="text-2xl font-bold text-teal-900 mb-6">О компании</h1>

                    <div className="mb-10 text-teal-900">
                        <p className="pb-3">
                            Компания "Инновации Бизнес Консалтинг" была основана профессиональными оценщиками, и именно
                            оценка является основным направлением нашей деятельности. Благодаря тому, что учредителями
                            являются оценщики, компания, наряду со своими сотрудниками, несёт полную ответственность за
                            результаты проводимых оценочных работ. Это позволяет избежать ситуации, при которой в результате
                            некачественной оценки клиенты несут убытки, а взыскать их с компании не представляется возможным
                            из-за некоторых пробелов в законодательстве.
                        </p>
                        <p className="pb-3 font-bold">
                            Мы несём ответственность, за всё что делаем и готовы отстаивать интересы клиентов во всех инстанциях.
                        </p>
                    </div>

                    <h1 className="text-xl text-teal-900 mb-3">Реквизиты нашей компании:</h1>

                    <table className="bg-grayBg hover:bg-orange-600 border border-slate-500 bg-grayBg cursor-text">
                        <tbody className="text-teal-900 text-xs md:text-sm font-medium">
                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Полное или сокращенное наименование (в соответствие с учредительными документами)</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">ООО «Инновации Бизнес Консалтинг», ООО «ИБК»</td>
                        </tr>
                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Юридический адрес</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">115522, Москва, Пролетарский пр-т, дом 17, корп. 1 оф.204</td>
                        </tr>
                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Фактическое местонахождение</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">115409, Москва, Каширское ш., дом 66, корп. 2, оф.33</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Телефон</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">8 495 796 25 50</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Идентификационный номер налогоплательщика (ИНН)</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">7724724748</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">КПП</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">772401001</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Коды ОКВЭД</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">74.12.2, 22.1, 22.2, 70.3, 72.3, 74.11, 74.12.1, 74.13, 74.14, 80.4</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Код ОКПО</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">63752066</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Расчетный счет</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">40702810638060056874</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">БИК</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">044525225</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Корреспондентский счет</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">30101810400000000225</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Полное наименование банка</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Сбербанк России ПАО</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Местонахождение банка</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">117997, г. Москва, ул. Вавилова, д.19</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">ОГРН</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">1097746684298</td>
                        </tr>

                        <tr>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Генеральный директор</td>
                            <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">Акимов Павел Александрович</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="lg:w-container p-7">
                    <h2 className="text-xl text-teal-900 w-full">Фактическое местоположение</h2>
                    <span className="font-extralight text-lg">115409, Москва, Каширское ш., дом 66, корп. 2, оф.33</span>
                </div>
                <iframe
                    className="pointer-events-auto"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af82bb37a5c98b3457e38339dc92373bdb3206e57faf745c21aea1c3897f2eef2&amp;source=constructor"
                    width="100%" height="400" frameBorder="0"></iframe>
            </div>

            <div className="w-full flex flex-col justify-center items-center bg-white pt-7">
                <div className="lg:w-container p-7 text-teal-900">

                    <h3 className="text-lg font-medium mb-3">Оценочная компания "Инновации Бизнес Консалтинг" оказывает следующие виды услуг:</h3>

                    <ul className="list-disc mb-7 ml-12">
                        <li>Оценка недвижимости</li>
                        <li>Оценка транспорта</li>
                        <li>Оценка ценных бумаг</li>
                        <li>Оценка бизнеса</li>
                        <li>Оценка нематериальных активов</li>
                        <li>Оценка имуества</li>
                        <li>Оценка ущерба</li>
                        <li>Экспертиза отчетов об оценке</li>
                        <li>Бизнес-планирование и разработка бизнес планов</li>
                    </ul>


                    <h3 className="text-lg font-medium mb-3">Мы осуществляем свою деятельность на основании и в соответствии с действующим законодательством Российской Федерации.</h3>
                    <h3 className="font-medium mb-3">Основными нормативными актами, регулирующими оценочную деятельность являются:</h3>


                    <ul className="list-disc mb-7 ml-12">
                        <li>Федеральный закон № 135-ФЗ "Об оценочной деятельности в Российской Федерации"</li>
                        <li>ФСО № 1 "Общие понятия оценки, подходы к оценке и требования к проведению оценки"</li>
                        <li>ФСО №2 "Цель оценки и виды стоимости"</li>
                        <li>ФСО №3 "Требования к отчету об оценке"</li>
                        <li>ФСО №4 "Определение кадастровой стоимости объектов недвижимости"</li>
                        <li>ФСО №5 "Виды экспертизы, порядок её проведения, требования к экспертному заключению и порядку его утверждения"</li>
                        <li>ФСО №6 "Требования к уровню знаний эксперта саморегулируемой организации оценщиков"</li>
                        <li>ФСО №7 "Оценка недвижимости"</li>
                        <li>ФСО №8 "Оценка бизнеса"</li>
                        <li>ФСО №9 "Оценка для целей залога"</li>
                        <li>ФСО №10 "Оценка стоимости машин и оборудования"</li>
                        <li>ФСО №11 "Оценка нематериальных активов и интеллектуальной собственности"</li>
                    </ul>

                </div>
            </div>
        </BasePageTemplate>
    )
}

export default About;

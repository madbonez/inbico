import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';

export const Banks = () => {
    return (
        <section className="flex flex-col items-center lg:w-container pt-16 pb-16">
            <h2 className="inline mb-1 text-lg font-bold text-teal-900">ОЦЕНКА ДЛЯ ИПОТЕКИ В БАНКАХ</h2>
            <TextAccent black/>

            <div className="mt-5 grayscale lg:w-container grid grid-cols-2 lg:grid-cols-4">
                <div className="inline-block w-32 m-auto mr-5">
                    <Image
                        src="/banks/img.png"
                        layout="responsive"
                        width="300"
                        height="76"
                    />
                </div>

                <div className="w-32 m-auto mr-5 block">
                    <Image
                        className="m-auto"
                        src="/banks/img_1.png"
                        layout="responsive"
                        width="275"
                        height="71"
                    />
                </div>

                <div className="inline-block w-32 m-auto mr-5">
                    <Image
                        src="/banks/img_2.png"
                        layout="responsive"
                        width="284"
                        height="120"
                    />
                </div>

                <div className="inline-block w-32 m-auto mr-5">
                    <Image
                        src="/banks/img_3.png"
                        layout="responsive"
                        width="101"
                        height="56"
                    />
                </div>
            </div>
        </section>
    )
}

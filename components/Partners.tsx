import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';

export const Partners = () => {
    return (
        <section className="flex flex-col items-center lg:w-container pt-16 pb-16">
            <h2 className="inline mb-1 text-2xl font-medium text-teal-900">НАШИ ПАРТНЕРЫ</h2>
            <TextAccent black/>

            <div className="mt-5 grayscale lg:w-container grid grid-cols-2 lg:grid-cols-5">
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img.png"
                        layout="responsive"
                        width="183"
                        height="67"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_1.png"
                        layout="responsive"
                        width="227"
                        height="58"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_2.png"
                        layout="responsive"
                        width="81"
                        height="36"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_3.png"
                        layout="responsive"
                        width="105"
                        height="35"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_4.png"
                        layout="responsive"
                        width="269"
                        height="48"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_5.png"
                        layout="responsive"
                        width="261"
                        height="64"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_6.png"
                        layout="responsive"
                        width="340"
                        height="45"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_7.png"
                        layout="responsive"
                        width="912"
                        height="256"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_8.png"
                        layout="responsive"
                        width="179"
                        height="178"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_9.png"
                        layout="responsive"
                        width="227"
                        height="43"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_10.png"
                        layout="responsive"
                        width="209"
                        height="235"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_11.png"
                        layout="responsive"
                        width="340"
                        height="59"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_12.png"
                        layout="responsive"
                        width="220"
                        height="269"
                    />
                </div>
                <div className="mr-5 mb-5 inline-block w-24 m-auto">
                    <Image
                        src="/partners/img_13.png"
                        layout="responsive"
                        width="273"
                        height="182"
                    />
                </div>
            </div>
        </section>
    )
}


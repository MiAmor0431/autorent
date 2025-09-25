import React from 'react';
import { useState } from 'react';

function TermsPage() {
    const [downloading, setDownloading] = useState(false);

    // Base64-encoded font data for Roboto-Regular
    // This is necessary because jsPDF's default fonts don't support Cyrillic characters.
    const robotoFont = 'AAEAAAASAQAABAAgAABgAACgAAAAAQAAAAEAAAAAAACxAAEAAAAAAAAAAgAAABoAAAAAAAAAAQAAAGoAAAAAAAAAAQAAAIAAAAAAAAAAAEAAAMAAAAAAAEAAAX8AAAAAAEAAApkAAAAAAEAAAxAAAAAAAAAAEAAAN4AAAAAAEAAAQoAAAAAAEAAASYAAAAAAEAAAUAAAAAAAAAAQAAAWwAAAAAAAAAAQAAAGoAAAAAAAAAAQAAAD4AAAAAAEAAAJ8AAAAAAAAAAQAAAQYAAAAAAAAAAQAAAHwAAAAAAAAAAQAAAJAAAAAAAAAA... (truncated for brevity)';

    // Function to handle the PDF generation and download
    const handleDownload = () => {
        setDownloading(true);
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add font to the PDF document
        doc.addFileToVFS('Roboto-Regular.ttf', robotoFont);
        doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');

        // The provided contract text
        const contractText = `
ПРЕАМБУЛА
Настоящий Договор аренды транспортного средства (далее – Договор) является договором присоединения, условия
которого определены Арендодателем и принимаются Арендатором посредством Соглашения о присоединении к Договору в
целом (ст.389 Гражданского Кодекса РК). - Договор считается заключенным с момента подписания Сторонами письменного
Соглашения о присоединении к Договору, в котором указаны все существенные условия.
Арендатор, присоединяясь к Договору подтверждает, что ознакомился с его текстом в полном объеме, размещенном на
сайте: https://almaty.arendacar.kz, разумно определил необходимость в аренде транспортного средства и оценил свои
возможности для заключения Договора.

ДОГОВОР АРЕНДЫ ТРАНСПОРТНОГО СРЕДСТВА
Юридическое лицо и (или) индивидуальный предприниматель, осуществляющий в качестве предпринимательской
деятельности сдачу в аренду транспортных средств на основании договоров проката, именуемый в дальнейшем
«Арендодатель» и юридическое лицо, физическое лицо или индивидуальный предприниматель, достигшие возраста 23 лет,
присоединившиеся к данному Договору, именуемый в дальнейшем «Арендатор», совместно именуемые «Стороны»,
заключили настоящий Договор о нижеследующем:

1. ПРЕДМЕТ ДОГОВОРА
1.1. Арендодатель передает, а Арендатор принимает во временное возмездное владение и пользование (аренду)
транспортное средство, без экипажа и его технической эксплуатации.
1.2. Сведения о передаваемом арендном транспортном средстве и его технические характеристики, а также
паспортные данные Арендатора указываются в Соглашении о присоединении к Договору.
1.3. Передаваемое в аренду транспортное средство принадлежит Арендодателю на праве частной
собственности/аренды.
1.4. Арендодатель передает, а Арендатор принимает арендуемое транспортное средство по акту приема-передачи,
подписанного Сторонами, после оплаты аренды и внесения депозита на лицевой счет или в кассу Арендодателя.
1.5. Доставка арендованного транспортного средства с адреса по городам: Алматы, Астана – 10000 тенге, Караганда –
5000 тенге, прием транспортного средства: Алматы, Астана – 10000 тенге, Караганда – 5000 тенге. С 19:00 до 9:00
получение и возврат транспортного средства является дополнительной услугой, стоимость которой составляет двойной
тариф по соответствующим городам.

2. ПРАВА И ОБЯЗАННОСТИ СТОРОН
2.1. Арендодатель обязан:
2.1.1. Принять от Арендатора залог в размере, указанном в Соглашении о присоединении к Договору до его подписания,
путем внесения Арендатором наличных денежных средств в кассу Арендодателя или перечисления их на лицевой счет
Арендодателя.
2.1.2. Передать Арендатору арендуемое транспортное средство, указанное в Соглашении о присоединении к Договору, по
акту-приема-передачи после подписания Соглашения о присоединении к Договору, оплаты аренды и внесения залога.
2.1.3. Передать Арендатору вместе с арендуемым транспортным средством все документы, необходимые для его
эксплуатации.
2.1.4. Передать Арендатору арендуемое транспортное средство, заправленное топливом на 100%.
2.1.5. Принять арендованное транспортное средство от Арендатора по окончании срока Аренды в соответствие с
условиями Договора и Соглашения о присоединении к Договору.
2.2. Арендатор обязан:
2.2.1. Иметь водительское удостоверение категории B и стаж вождения автомобиля не менее 5 (пять) лет.
2.2.2. Ознакомиться с Договором и Соглашением о присоединении к Договору, использовать арендованное транспортное
средство в соответствии с их условиями и требованиями, исключительно для личных нужд.
2.2.3. Оплатить аренду за транспортное средство и внести залог в размере, указанном в Соглашении о присоединении к
Договору, до его подписания путем внесения наличных денежных средств в кассу или перечисления их на лицевой счет
Арендодателю.
2.2.4. Выполнять требования Правил дорожного движения Республики Казахстан (далее по тексту – ПДД), условия
Договора и Соглашения присоединения к Договору.
2.2.5. Производить заправку арендованного транспортного средства топливом АИ-95/98.
2.2.6. Незамедлительно оповещать Арендодателя обо всех случаях повреждениях арендованного транспортного средства,
полученных во время его эксплуатации, о загрязнении салона и т.д. Оповещение должно содержать данные о характере
указанных повреждений.
2.2.7. По окончании аренды возвратить арендованное транспортное средство в исправном состоянии без ухудшения его
технических качеств и внешнего вида, в полной комплектации, чистым внутри и снаружи, заправленным топливом на 100%
и сдать его Арендодателю по акту приема-передачи. При этом, все повреждения арендованного транспортного средства, не
указанные в акте приема-передачи при передаче арендованного транспортного средства Арендатору от Арендодателя,
детально фиксируются в том же акте при приеме арендованного транспортного средства Арендодателем от Арендатора, с
сопровождением фото и видеофиксации.
2.2.8. Предоставить арендованное транспортное средство в течение 24 часов по требованию Арендодателя для осмотра.
2.2.9. Нести ответственность за ущерб, причиненный в течение срока аренды, в том числе: стоимость восстановительного
ремонта без учета износа, при повреждении (узлов, агрегатов или иного установленного на нем оборудования); рыночную
стоимость арендованного транспортного средства, в случае его полного уничтожения (когда его восстановление
невозможно или экономически нецелесообразно); рыночную стоимость арендованного транспортного средства, в случае
его угона (хищения); упущенную выгоду, связанную с потерей дохода от сдачи в аренду транспортного средства во время
нахождения его в ремонте, розыске и т.п.`;

        // Split the text into lines to fit the PDF page
        doc.setFontSize(11);
        const splitText = doc.splitTextToSize(contractText, 180);

        let y = 10;
        splitText.forEach((line) => {
            if (y > 280) {
                doc.addPage();
                y = 10;
            }
            doc.text(line, 10, y);
            y += 5; // Line height
        });

        // Save the PDF with a specific filename
        doc.save('Договор аренды.pdf');
        setDownloading(false);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white font-sans p-6 md:p-12 lg:p-16">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
                body { font-family: 'Inter', sans-serif; }
            `}</style>

            <div className="max-w-7xl mx-auto py-12">
                {/* Main Title Section */}
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Аренда без водителя
                </h1>

                {/* Transparent Contract Section */}
                <div className="bg-neutral-800 rounded-3xl p-6 md:p-12 mb-12 shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                        Прозрачный договор
                    </h2>
                    <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
                        Вы арендуете автомобиль по той стоимости, которая указана на сайте. Без скрытых платежей и комиссий.
                    </p>
                    <div className="flex justify-center items-center">
                        <a
                            href="#"
                            onClick={handleDownload}
                            download="Договор аренды.pdf"
                            className={`flex items-center space-x-2 text-yellow-400 font-medium hover:underline ${downloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {downloading ? 'Загрузка...' : (
                                <>
                                    <span className="text-2xl font-bold">📄</span>
                                    <span>Скачать формуляр договора проката 3 стр.</span>
                                </>
                            )}
                        </a>
                    </div>
                </div>

                {/* Minimal Conditions Section */}
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Минимальные условия проката
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Age Condition */}
                    <div className="bg-neutral-800 rounded-2xl p-6 flex items-start space-x-4 shadow-xl">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center font-bold text-2xl">
                            23
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">
                                Возраст
                            </h3>
                            <p className="text-gray-300">
                                от 23-х лет
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                от 18 лет увеличенный залог, нет страховки
                            </p>
                        </div>
                    </div>
                    {/* Driving Experience Condition */}
                    <div className="bg-neutral-800 rounded-2xl p-6 flex items-start space-x-4 shadow-xl">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-2"/><path d="M19 11V9c0-.6-.4-1-1-1h-4L3 20h9c1.6 0 3-1.4 3-3V5c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1v4"/><path d="M2 19h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1z"/><path d="M14 17h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1z"/></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">
                                Водительский опыт
                            </h3>
                            <p className="text-gray-300">
                                от 3-х лет
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Стаж от 1 года увеличенный залог, без страховки. Рассмотрение в индивидуальном порядке.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Documents and Payments Section */}
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Для физических лиц необходим следующий набор документов
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Kazakhstan Citizens */}
                    <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl md:text-2xl font-bold mb-6">
                            Гражданам Казахстана
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <span className="text-2xl font-bold">📄</span>
                                <span className="text-gray-300">Водительское удостоверение</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="text-2xl font-bold">🛂</span>
                                <span className="text-gray-300">Национальный паспорт</span>
                            </li>
                        </ul>
                    </div>
                    {/* Foreign Citizens */}
                    <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl md:text-2xl font-bold mb-6">
                            Иностранным гражданам
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <span className="text-2xl font-bold">📄</span>
                                <span className="text-gray-300">Водительское удостоверение</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="text-2xl font-bold">✈️</span>
                                <span className="text-gray-300">Миграционная карта / виза или въездная виза</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="text-2xl font-bold">🛂</span>
                                <span className="text-gray-300">Заграничный паспорт</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6">
                    Способы оплаты для физических лиц
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    <div className="bg-neutral-800 rounded-2xl p-6 flex items-center space-x-4 shadow-xl">
                        <span className="text-3xl">💰</span>
                        <p className="text-gray-300 text-lg">Наличными при получении автомобиля</p>
                    </div>
                    <div className="bg-neutral-800 rounded-2xl p-6 flex items-center space-x-4 shadow-xl">
                        <span className="text-3xl">💳</span>
                        <p className="text-gray-300 text-lg">Банковской картой</p>
                    </div>
                </div>

                {/* City Exit and Mileage Restrictions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* City Exit */}
                    <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Выезд за пределы города
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Если вы планируете выехать за пределы города маршрут согласовывается заранее — вам необходимо внести залог наличными или картой (при поездках за город залог будет увеличен). Сумма залога зависит от класса автомобиля. Залог возвращается частично в момент возврата ТС, а 21 000 тенге удерживается на срок до 14 рабочих дней для оплаты штрафов, зафиксированных камерами наблюдения, если вы нарушали ПДД. Выезжать за пределы Казахстана, согласование в индивидуальном порядке.
                        </p>
                    </div>
                    {/* Mileage Restrictions */}
                    <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ограничения по пробегу
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Суточный пробег 300 км. Пробег суммируется, можно в один день проехать больше, в другой меньше. Оплата сверх включенного пробега: эконом — от 70 тенге/км, кроссоверы от 120 тенге/км, бизнес и премиум — от 210 тенге/км.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TermsPage;
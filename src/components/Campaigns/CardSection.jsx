import Card from '../Card';
import images from '../../data/images';

const cardData = [
    {
      id: 1,
      name: 'حملة البصرة',
      description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
      img: images.cardLogo
    },
    {
        id: 2,
        name: 'حملة البصرة',
        description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
        img: images.cardLogo
    },
    {
        id: 3,
        name: 'حملة البصرة',
        description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
        img: images.cardLogo
    },
    {
        id: 4,
        name: 'حملة البصرة',
        description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
        img: images.cardLogo
    },
    {
        id: 5,
        name: 'حملة البصرة',
        description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
        img: images.cardLogo
    },
    {
        id: 6,
        name: 'حملة البصرة',
        description: 'يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة! يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التنومة!',
        img: images.cardLogo
    },
  ];

const CardSection = () => {
    return <section className='p-20'>
            <header className='text-center pb-16'>
                <div className='text-Heading-5 text-primaryOrange'>
                سفراء النظافة بكل مكان
                </div>
                <div className='text-Heading-2 text-highlightBlack'>
                بجهودكــم وبمشاركتكم راح نحقق الأفضل لبلدنا تعالــوا ننظف سوة!
                </div>
            </header>
            <div className='grid grid-cols-3 gap-4 '>
            {cardData.map((card) => (
                <div className='flex justify-center py-8'>
                    <Card
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    img={card.img}
                    />
                </div>
            ))}
            </div>
           </section>;
  };
  
  export default CardSection;
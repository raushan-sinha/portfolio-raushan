import RaushanImage from '../assets/Raushan-Image.jpg';

export default function Home() {
    //todo: Name 
    const introSection = [
        { img: RaushanImage, alt: 'Raushan Sinha Image', name: 'Raushan Sinha' }
    ];

    return (
        <>
            <section className='border-4 border-double h-max p-3 rounded-lg w-max'>
                {/* Intro - Image & Name */}
                {
                    introSection.map((info, idx) => (
                        <div className='flex flex-row items-center gap-4' key={idx}>
                            <img src={info.img} alt={info.alt} className='w-16 h-16 rounded-full object-cover' />
                            <span className='font-mono text-2xl'>{info.name}</span>
                        </div>
                    ))
                }

            </section>
        </>
    );
}
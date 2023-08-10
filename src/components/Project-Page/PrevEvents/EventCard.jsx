/* eslint-disable react/prop-types */


export default function EventCard(props) {
    return (
        <article>
          <figure className="project-card transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl max-w-[300px] bg-[#fff] rounded-[10px] m-[10px] p-[20px] flex flex-col items-center justify-center">
            <img
            className="max-w-[100%] rounded-[10px] mb-[10px]"
              // eslint-disable-next-line react/prop-types
              src={props.imageUrl}
              loading='lazy'
              alt={"tittle"}
            />
            <figcaption > 
              <header>
                  
              <h3 className=" text-lg mb-[10px] text-center font-bold">
                  {props.title}
                  </h3>
            </header>
            <p className=" text-[16px] text-[#21272A] text-center">{props.content}</p>
            </figcaption>
           
          </figure>
          
        </article>
      );
}

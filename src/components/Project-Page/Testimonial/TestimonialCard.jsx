/* eslint-disable react/prop-types */

function TestimonialCard(props) {
    return (
        <div className="testimonial-cont bg-[#FDF9F2] max-w-[100%] my-0 mx-auto grid place-items-center pb-[50px] relative">
        <article>
          <figure className="testimonial-card bg-[#fff] w-[850px] rounded-[10px] m-[10px] p-[20px] flex flex-col items-center justify-center min-[320px]:w-[50%] sm:w-[50%] lg:w-[70%] xl:w-[60%] mx-auto">
            <img
            className=" max-w-[20%] mb-[10px] clip-circle"
              // eslint-disable-next-line react/prop-types
              src={props.image}
              loading='lazy'
              alt={"tittle"}
            />
            <figcaption > 
            <p className=" text-[16px] text-[#21272A] text-center">{props.quote}</p>
              <h3 className="text-lg mb-[10px] text-center font-bold">
                  {props.name}
            </h3>
            <p className="text-[#21272A]">{props.title}</p>
            </figcaption>
           
          </figure>
          
        </article>
        </div>
      );
}

export default TestimonialCard


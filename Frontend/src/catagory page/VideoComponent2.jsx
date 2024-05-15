import { Rating} from "flowbite-react";
export default function VideoComponent2({videolink, name, poster, rating, price, description}){
    function starGen(){
        switch(rating){
            case 1:
                return(
                    <Rating>
                        <span className="font-bold">{rating}</span>
                        <Rating.Star />
                        <Rating.Star filled={false}/>
                        <Rating.Star filled={false}/>
                        <Rating.Star filled={false}/>
                        <Rating.Star filled={false} />
                    </Rating>
                )
            
            case 2:
                return(
                    <Rating>
                        <span className="font-bold">{rating}</span>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false}/>
                        <Rating.Star filled={false}/>
                        <Rating.Star filled={false} />
                    </Rating>
                )

                case 3:
                    return(
                        <Rating>
                            <span className="font-bold">{rating}</span>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false}/>
                            <Rating.Star filled={false} />
                        </Rating>
                    )
                
                case 4:
                return(
                    <Rating>
                        <span className="font-bold">{rating}</span>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                )
                case 5:
                    return(
                        <Rating>
                            <span className="font-bold">{rating}</span>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>
                    )
            
        }
    }
    return(
        <div className="md:inline-flex gap-4 justify-center">
            <video
                src={videolink}
                className="md:w-[20rem] w-[9rem]"
            >
            </video>
            <div>
                <p className="text-[0.8rem] md:text-[1.3rem] font-bold">{name}</p>
                <p className="text-[0.7rem] md:text-[1rem]">{description}</p>
                <p className="text-[0.5rem] md:text-[0.8rem] text-grey-100">{poster}</p>
                <p className="text-[0.8rem] md:text-[0.9rem]">
                    {starGen()}
                </p>
                <p className="font-bold">${price}</p>
            </div>
        </div>
    )
}
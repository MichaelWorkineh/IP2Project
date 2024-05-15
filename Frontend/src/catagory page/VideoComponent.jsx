import { Rating} from "flowbite-react";
export default function VideoComponent({videolink, name, poster, rating, price}){
    function starGen(){
        switch(rating){
            case 1:
                return(
                    <Rating>
                        <span>{rating}</span>
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
                        <span>{rating}</span>
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
                            <span>{rating}</span>
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
                        <span>{rating}</span>
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
                            <span>{rating}</span>
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
        <div>
            <video
                src={videolink}
                width="280"
            >
            </video>
            <p>{name}</p>
            <p className="text-[0.8rem] text-grey-100">{poster}</p>
            <p className="text-[0.9rem]">
                {starGen()}
            </p>
            <p className="font-bold">${price}</p>
        </div>
    )
}
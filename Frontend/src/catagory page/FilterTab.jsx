import { Banner, Card, Carousel,  Button, Timeline , Tabs, Navbar, Dropdown, Accordion, Rating} from "flowbite-react";

export default function FilterTab(){
    return(
            <div className="w-[20rem]">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>Ratings</Accordion.Title>
                        <Accordion.Content>
                            <button>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                    <span> & up</span>
                                </Rating>
                            </button> <br></br>
                            <button>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false}/>
                                    <Rating.Star filled={false} />
                                    <span> & up</span>
                                </Rating>
                            </button>  <br></br>
                            <button>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false}/>
                                    <Rating.Star filled={false}/>
                                    <Rating.Star filled={false} />
                                    <span> & up</span>
                                </Rating>
                            </button> <br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Video Duration</Accordion.Title>
                        <Accordion.Content>
                            <button>
                                0-1 Hour
                            </button><br></br>
                            <button>
                                1-3 Hour
                            </button><br></br>
                            <button>
                                3-6 Hour
                            </button><br></br>
                            <button>
                                6-17 Hour
                            </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Topic</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            Django
                        </button><br></br>
                        <button>
                            Python
                        </button><br></br>
                        <button>
                            Web Development
                        </button><br></br>
                        <button>
                            REST API
                        </button><br></br>
                        <button>
                            Vue JS
                        </button><br></br>
                        <button>
                            Amazon AWS
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Subcategory</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            Web Development
                        </button><br></br>
                        <button>
                            Programming Language
                        </button><br></br>
                        <button>
                            Software Engineer
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Level</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            Beginner
                        </button><br></br>
                        <button>
                            All Level
                        </button><br></br>
                        <button>
                            Intermediate
                        </button><br></br>
                        <button>
                            Expert
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Language</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            English
                        </button><br></br>
                        <button>
                            Espanol
                        </button><br></br>
                        <button>
                            Portugues
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Price</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            Paid
                        </button><br></br>
                        <button>
                            Free
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Features</Accordion.Title>
                        <Accordion.Content>
                        <button>
                            Subtitles
                        </button><br></br>
                        <button>
                            Quizzes
                        </button><br></br>
                        <button>
                            Coding Exercises
                        </button><br></br>
                        <button>
                            Practice Test
                        </button><br></br>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
    );
}
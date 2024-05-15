import Avatar from '@mui/material/Avatar';

export default function Instructor({profile, name, course, catagory, student, courseNumber}){
    return(
        <div className="md:inline-flex gap-8 p-5 border-solid border-[0.01rem] border-[rgb(178,178,178)] w-[20rem]">
            <Avatar alt={name} src={profile} sx={{ width: 56, height: 56 }}/>
            <div>
                <p className='font-semibold md:text-[1.3rem] text-[0.7rem]'>{name}</p>
                <p className='md:text-[1rem] text-[0.5rem]'><span className='font-semibold'>{course}</span><span>, {catagory}</span></p>
                <p className='md:text-[0.8rem] text-[0.5rem]'><span className='font-semibold'>{student}</span> students</p>
                <p className='md:text-[0.8rem] text-[0.5rem]'><span className='font-semibold'>{courseNumber}</span> courses</p>
            </div>
        </div>
    );
}
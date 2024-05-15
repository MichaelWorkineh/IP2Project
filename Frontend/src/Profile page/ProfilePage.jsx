import Avatar from "./LetterAvatar"
import { Label, TextInput, Textarea } from "flowbite-react";

export default function ProfilePage({profile}){
    return(
        <div className="inline-flex justify-center w-full items-start">
            <Avatar name={"Michael Workineh"}/>
            <form className="w-[30rem] border-solid border-[0.01rem] border-[rgb(178,178,178)]">
                <div className="p-3 border-solid border-0_0rem_0.01rem_0rem] border-[rgb(178,178,178)]">
                    <h1 className="text-center text-[1.7rem] font-bold">Public profile</h1>
                    <p className="text-center mb-3">Add information about yourself</p>
                    <hr></hr>
                </div>
                <div className="p-3">
                    <h2 className="font-semibold">Basics: </h2>
                    <TextInput id="firstname" type="text" sizing="sm" placeholder={profile.first} className="mt-3 mb-3"/>
                    <TextInput id="lastname" type="text" sizing="sm" placeholder={profile.last} className="mt-3 mb-3"/>
                    <TextInput id="headline" type="text" sizing="md" placeholder={profile.headline} className="mt-3 mb-3"/>
                    <Textarea id="aboutme"   placeholder={profile.about} fixed rows={5}  className="mt-3 mb-3"/>
                    <hr></hr>
                </div>
                <div className="mt-6 p-3">
                    <h2 className="font-semibold">Links:</h2>
                    <TextInput id="link1" type="link" placeholder="Website (http(s)://...)" className="mt-3 mb-3"/>
                    <TextInput id="link1" type="link" placeholder="http://twitter.com" className="mt-3 mb-3"/>
                    <TextInput id="link1" type="link" placeholder="http://www.facebook.com" className="mt-3 mb-3"/>
                    <TextInput id="link1" type="link" placeholder="http://www.linkedin.com" className="mt-3 mb-3"/>
                    <TextInput id="link1" type="link" placeholder="http://www.youtube.com" className="mt-3 mb-3"/>
                </div>
                <button className="bg-black text-white p-2 mt-5 font-bold w-[4rem] m-3">Save</button>
            </form>
        </div>
    )
}
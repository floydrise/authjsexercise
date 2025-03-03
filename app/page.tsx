import {auth} from "@/auth";
import {SignOut} from "@/app/components/SignOut";
import {SignIn} from "@/app/components/SignIn";
import Image from "next/image";

export default async function Page() {
    const session = await auth();
    const user = session?.user;
    return (
        <div className={"h-screen w-screen flex justify-center items-center flex-col gap-2"}>
            <div>
                {session ? <SignOut/> : <SignIn/>}
            </div>
            {session ? <div className={"flex justify-center items-center flex-col"}>
                <p>Logged in as: {user?.name}</p>
                <p>Email: {user?.email}</p>
                {user?.image ? <Image src={user?.image} alt={"User pic"} width={100} height={100}/> : <p>No image found</p>}
            </div> : <p>Not logged</p>}
        </div>
    );
}
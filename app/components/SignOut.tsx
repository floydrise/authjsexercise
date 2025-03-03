import {signOut} from "@/auth";

export const SignOut = () => {
    return (
        <form action={async () => {
            "use server"
            await signOut();
        }}>
            <button className={"border rounded-lg"} type={"submit"}>Log out</button>
        </form>
    );
};
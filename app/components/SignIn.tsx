import {signIn} from "@/auth";

export const SignIn = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button className={"border rounded-lg"} type="submit">Signin with Google</button>
        </form>
    );
};
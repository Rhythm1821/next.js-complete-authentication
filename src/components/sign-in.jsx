import { signIn } from "@/auth";

export default function SignIn() {
    
    return (
        <form className="flex flex-col gap-4 text-white border w-1/5 bg-slate-400 hover:bg-slate-500 border-white"
         action={
            async ()=>{
                "use server"
                await signIn()
            }
         }>
            <button>Sign In</button>
        </form>
    );
}
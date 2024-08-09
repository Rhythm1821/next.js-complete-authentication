import SignIn from "@/components/sign-in";
import { auth } from "@/auth";
import { SignOut } from "@/components/signout-button";


export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <>
     <h1>Hello, {session?.user?.name}</h1>
     <SignIn/>
     <SignOut/>
    </>
  );
}

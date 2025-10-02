import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (  
    <p>
      This is Authentication route
      <UserButton/>
    </p>
  );
}

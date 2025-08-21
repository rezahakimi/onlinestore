import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import Welcome from "@/components/welcome";

export default function Home() {
  
  return (
    <div  className="flex flex-col items-center justify-center h-screen">
     <Banner></Banner>
     <Welcome></Welcome>
    </div>
  );
}

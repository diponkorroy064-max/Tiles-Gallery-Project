import Bannar from "../components/homeComponent/Bannar";
import BreakingNews from "../components/homeComponent/BreakingNews";
import Featured from "../components/homeComponent/Featured";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       {/* <h2>This is a home page</h2>
        */}
      <Bannar></Bannar>
      <BreakingNews></BreakingNews>
      <Featured></Featured>
    </div>
  );
}


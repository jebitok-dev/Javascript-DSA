import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SearchBox from "./component/SearchBox";

const queryClient = new QueryClient();

export default function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black w-screen h-screen p-12">
        <SearchBox />
      </div>
    </QueryClientProvider>
  )
}

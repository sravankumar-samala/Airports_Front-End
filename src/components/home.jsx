import AppLayout from "./appLayout";
import AirportHeader from "./header";
import Sidebar from "./sidebar";
import Airports from "./airports";

function Home() {
  return (
    <AppLayout>
      <AirportHeader />
      <Sidebar />
      <Airports />
    </AppLayout>
  );
}

export default Home;

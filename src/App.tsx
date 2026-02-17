import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

function App() {
  return (
    <>
      <MainLayout>
        <Navbar/>
      </MainLayout>
    </>
  );
}

export default App;

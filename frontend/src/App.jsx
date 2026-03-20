import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import HomePage from "@/pages/HomePage";
import CreatePage from "@/pages/CreatePage";
import NavBar from "@/components/NavBar";
import { useTheme } from "next-themes";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <Box minHeight="100vh" bg={theme === "light" ? "gray.100" : "gray.800"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

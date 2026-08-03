import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import AIChat from "../components/AIChat";

export default function Home() {
  return (
    <Layout>
      <Dashboard />
      <AIChat />
    </Layout>
  );
}
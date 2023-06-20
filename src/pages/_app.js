import "@/styles/globals.css";
import Nav from "@/components/Nav/Nav";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: organizationsData,
    error: organizationsError,
    isLoading: organizationsIsLoading,
  } = useSWR("/api/organizations", fetcher);
  const {
    data: usersData,
    error: usersError,
    isLoading: usersIsLoading,
  } = useSWR("/api/users", fetcher);

  if (organizationsError || usersError) return <div>failed to load</div>;
  if (organizationsIsLoading || usersIsLoading) return <div>loading...</div>;

  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 1000,
      }}
    >
      <Component
        {...pageProps}
        usersData={usersData}
        organizationsData={organizationsData}
      />
      <Nav></Nav>
    </SWRConfig>
  );
}

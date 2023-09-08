import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "..getLatestRepos/lib/getLatestRepos";
import userData from "@constants/data";
import {Roboto} from '@next/font/google'

const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700']
})

export default function Home({ repositories }) {
    return (
      <ContainerBlock
        title="Alex Van Dyke-Developer, Customer Service, Writer"
        description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
        className={roboto.className}
      >
        <Hero />
        <LatestCode repositories={repositories} />
      </ContainerBlock>
    );
  }
  
  export const getServerSideProps = async () => {
    console.log(process.env.GITHUB_AUTH_TOKEN);
    let token = process.env.GITHUB_AUTH_TOKEN;
  
    const repositories = await getLatestRepos(userData, token);
     //console.log("REPOSITORIES", repositories);
  
    return {
      props: {
        repositories,
      },
    };
  };
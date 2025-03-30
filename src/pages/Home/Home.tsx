import ActiveMissionsList from "../../components/ActiveMissionsList";
import Banner from "../../components/Banner";
import QuickAccessButtons from "../../components/QuickAccessButtons";
import UserStatus from "../../components/UserStatus";
import XpBar from "../../components/XpBar";

const Home = () => {
  return (
    <>
      <Banner title="Painel do Herói" />
      <main style={{ padding: `0 24px` }}>
        <UserStatus
          avatar="mage"
          name="Luiz, o Codificador"
          level={1}
          charClass="Mago"
        />
        <XpBar current={20} max={100} />
        <ActiveMissionsList />
        <QuickAccessButtons />
      </main>
    </>
  );
};
export default Home;

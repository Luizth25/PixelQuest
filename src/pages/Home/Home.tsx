import { useState } from "react";

import ActiveMissionsList from "../../components/ActiveMissionsList";
import Banner from "../../components/Banner";
import QuickAccessButtons from "../../components/QuickAccessButtons";
import UserStatus from "../../components/UserStatus";
import XpBar from "../../components/XpBar";
import CharacterModal from "../../components/CharacterModal";

import { useCharacterStore } from "../../store/characterStore/characterStore";

import { charSelected } from "../../types";
import { ChangeAvatarButton, MainContainer } from "./Home.styles";
import useLevelStore from "../../store/levelStore/levelStore";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const avatar = useCharacterStore((state) => state.avatar);
  const currentXp = useLevelStore((state) => state.xp);

  return (
    <>
      <Banner title="Painel do Herói" />
      <MainContainer>
        <ChangeAvatarButton onClick={() => setShowModal(true)} style={{}}>
          Selecionar Personagem
        </ChangeAvatarButton>
        <CharacterModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
        <UserStatus
          avatar={avatar}
          name="Luiz, o Codificador"
          charClass={charSelected[avatar]}
        />
        <XpBar current={currentXp} max={100} />
        <ActiveMissionsList />
        <QuickAccessButtons />
      </MainContainer>
    </>
  );
};
export default Home;

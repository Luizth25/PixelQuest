import Modal from "react-modal";
import { useCharacterStore } from "../../store/characterStore/characterStore";
import { Character } from "../../types";
import { charSelected } from "../../constants";
import { AvatarButton, AvatarGrid } from "./CharacterModal.style";

Modal.setAppElement("#root");

type TCharacterModal = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterModal = ({ isOpen, onClose }: TCharacterModal) => {
  const avatar = useCharacterStore((state) => state.avatar);
  const setAvatar = useCharacterStore((state) => state.setAvatar);

  const avatars = ["warrior", "mage", "archer", "cleric"];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Escolha seu personagem"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "fit-content",
          margin: "auto",
          padding: "24px",
          color: "#333",
          borderRadius: "8px",
          border: "none",
          background: "#f0f2f5",
        },
      }}
    >
      <h2>🎨 Escolha seu Personagem</h2>
      <AvatarGrid>
        {avatars.map((id) => (
          <AvatarButton
            key={id}
            selected={avatar === id}
            onClick={() => setAvatar(id as Character)}
          >
            <img src={`src/images/avatars/${id}.png`} alt={id} />
            <p>{charSelected[id as keyof typeof charSelected]}</p>
          </AvatarButton>
        ))}
      </AvatarGrid>
      <button onClick={onClose} style={{ marginTop: "20px" }}>
        Fechar
      </button>
    </Modal>
  );
};

export default CharacterModal;

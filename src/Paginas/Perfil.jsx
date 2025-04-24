import { useState } from 'react';
import styles from './Perfil.module.css';
import { PhotoManager } from '../componentes/userProfile/PhotoManager';
import { ProfileInfo } from '../componentes/userProfile/ProfileInfo';
import { ProfileManager } from '../componentes/userProfile/ProfileManager';

export function Perfil() {
  // Estado inicial do perfil, carregado do localStorage ou com valores padrão
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userProfile');
    return savedData
      ? JSON.parse(savedData)
      : {
          photo: null, // URL da foto ou null
          name: 'Usuário',
          age: '',
          nickname: '',
          birthdate: '',
          favoriteMovie: '',
          favoriteSeries: '',
        };
  });

  // Estado para controlar modo de edição
  const [isEditing, setIsEditing] = useState(false);
  console.log('isEditing:', isEditing);

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1>Perfil</h1>
      </div>
      <PhotoManager
        photo={userData.photo}
        setPhoto={(newPhoto) => setUserData({ ...userData, photo: newPhoto })}
        isEditing={isEditing}
      />
      <ProfileInfo userData={userData} isEditing={isEditing} setUserData={setUserData} />
      <ProfileManager
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        userData={userData}
      />
    </div>
  );
}
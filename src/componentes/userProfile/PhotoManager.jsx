import { useRef } from 'react';
import styles from './photomanager.module.css';
import user_photo from '../../assets/user.png'; // Imagem padrão para o ícone de upload

export function PhotoManager({ photo, setPhoto, isEditing }) {
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Atualiza a foto com a URL base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    if (isEditing) {
    //   console.log('Clicou no ícone de upload');
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.photoContainer}>
      <img
        src={photo || user_photo} // photo -> imagem do usuário || user_photo -> imagem padrão em assets
        alt="Foto do perfil"
        className={styles.profilePhoto}
      />
      {isEditing && (
        <div className={styles.uploadIcon} onClick={handleUploadClick}>
            {/* {console.log('Ícone de upload renderizado')} */}
            📤
        </div>
        )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}
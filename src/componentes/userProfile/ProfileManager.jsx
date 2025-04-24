import { useEffect } from 'react';
import styles from './profilemanager.module.css';

export function ProfileManager({ isEditing, setIsEditing, userData }) {
    const handleEdit = () => {
        // console.log('Botão Editar clicado, isEditing será true');
        setIsEditing(true);
      };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(userData));
    setIsEditing(false);
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={handleEdit}
        disabled={isEditing}
        className={styles.button}
      >
        Editar Perfil
      </button>
      <button
        onClick={handleSave}
        disabled={!isEditing}
        className={styles.button}
      >
        Salvar Perfil
      </button>
    </div>
  );
}